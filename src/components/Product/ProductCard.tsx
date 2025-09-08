import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useStore } from '../../store/useStore';
import clsx from 'clsx';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  const { addToCart, wishlist, addToWishlist, removeFromWishlist } = useStore();
  
  const isInWishlist = wishlist.includes(product.id);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className={clsx(
        "bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden",
        variant === 'featured' && "md:flex md:max-w-2xl"
      )}>
        {/* Image Container */}
        <div className={clsx(
          "relative overflow-hidden",
          variant === 'featured' ? "md:w-1/2" : "aspect-square"
        )}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {hasDiscount && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
            {!product.inStock && (
              <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
                Out of Stock
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col gap-2">
              <button
                onClick={handleWishlistToggle}
                className={clsx(
                  "p-2 rounded-full shadow-lg transition-all duration-200",
                  isInWishlist
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
                )}
              >
                <Heart className={clsx("h-4 w-4", isInWishlist && "fill-current")} />
              </button>
              <Link
                to={`/product/${product.id}`}
                className="p-2 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500 rounded-full shadow-lg transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <Eye className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Add to Cart */}
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
          )}
        </div>

        {/* Content */}
        <div className={clsx(
          "p-4",
          variant === 'featured' && "md:w-1/2 md:p-6"
        )}>
          {/* Brand */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{product.brand}</p>
          
          {/* Title */}
          <h3 className={clsx(
            "font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
            variant === 'featured' ? "text-lg" : "text-sm"
          )}>
            {product.name}
          </h3>

          {/* Description - Featured variant only */}
          {variant === 'featured' && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={clsx(
                    "h-4 w-4",
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className={clsx(
              "font-bold text-gray-900 dark:text-white",
              variant === 'featured' ? "text-xl" : "text-lg"
            )}>
              ${product.price}
            </span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Features - Featured variant only */}
          {variant === 'featured' && (
            <ul className="space-y-1 mb-4">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Stock Status */}
          {product.inStock ? (
            <p className="text-sm text-green-600 dark:text-green-400">
              In Stock ({product.stockCount} available)
            </p>
          ) : (
            <p className="text-sm text-red-600 dark:text-red-400">Out of Stock</p>
          )}
        </div>
      </div>
    </Link>
  );
};