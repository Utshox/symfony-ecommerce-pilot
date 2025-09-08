import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics', icon: 'Smartphone', productCount: 45 },
  { id: '2', name: 'Clothing', slug: 'clothing', icon: 'Shirt', productCount: 123 },
  { id: '3', name: 'Home & Garden', slug: 'home-garden', icon: 'Home', productCount: 67 },
  { id: '4', name: 'Sports', slug: 'sports', icon: 'Dumbbell', productCount: 34 },
  { id: '5', name: 'Books', slug: 'books', icon: 'BookOpen', productCount: 89 },
  { id: '6', name: 'Beauty', slug: 'beauty', icon: 'Sparkles', productCount: 56 }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The latest iPhone with titanium design and advanced camera system.',
    price: 999,
    originalPrice: 1099,
    category: 'Electronics',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    stockCount: 23,
    features: ['6.1-inch Super Retina XDR display', 'A17 Pro chip', 'Pro camera system', '5G capable'],
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '128GB',
      'Camera': '48MP Main + 12MP Ultra Wide'
    },
    tags: ['premium', 'new', 'flagship']
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    description: 'Supercharged by M2 chip. Incredibly thin and light design.',
    price: 1199,
    category: 'Electronics',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      'https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg'
    ],
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    stockCount: 12,
    features: ['M2 chip', '13.6-inch Liquid Retina display', '18-hour battery life', 'MagSafe charging'],
    specifications: {
      'Display': '13.6-inch Liquid Retina',
      'Chip': 'Apple M2',
      'Memory': '8GB',
      'Storage': '256GB SSD'
    },
    tags: ['laptop', 'premium', 'portable']
  },
  {
    id: '3',
    name: 'Sony WH-1000XM4',
    description: 'Industry-leading noise canceling wireless headphones.',
    price: 349,
    originalPrice: 399,
    category: 'Electronics',
    brand: 'Sony',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    rating: 4.7,
    reviewCount: 2156,
    inStock: true,
    stockCount: 45,
    features: ['30-hour battery life', 'Touch sensor controls', 'Speak-to-chat technology', 'Quick charge'],
    specifications: {
      'Battery Life': '30 hours',
      'Driver': '40mm',
      'Frequency Response': '4Hz-40kHz',
      'Weight': '254g'
    },
    tags: ['audio', 'wireless', 'noise-canceling']
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Comfortable sneakers with Max Air unit for all-day comfort.',
    price: 150,
    category: 'Clothing',
    brand: 'Nike',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'
    ],
    rating: 4.5,
    reviewCount: 743,
    inStock: true,
    stockCount: 67,
    features: ['Max Air unit', 'Breathable mesh', 'Rubber outsole', 'Lightweight design'],
    specifications: {
      'Upper': 'Mesh and synthetic',
      'Midsole': 'Foam with Max Air unit',
      'Outsole': 'Rubber',
      'Weight': '310g (size 9)'
    },
    tags: ['sneakers', 'comfortable', 'athletic']
  },
  {
    id: '5',
    name: 'Samsung 55" QLED TV',
    description: '4K QLED Smart TV with Quantum HDR and Alexa built-in.',
    price: 799,
    originalPrice: 899,
    category: 'Electronics',
    brand: 'Samsung',
    images: [
      'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg',
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg'
    ],
    rating: 4.6,
    reviewCount: 456,
    inStock: true,
    stockCount: 8,
    features: ['4K QLED Display', 'Quantum HDR', 'Smart TV platform', 'Voice control'],
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K (3840 x 2160)',
      'Panel Type': 'QLED',
      'Smart Platform': 'Tizen OS'
    },
    tags: ['tv', '4k', 'smart', 'entertainment']
  },
  {
    id: '6',
    name: 'Dyson V11 Vacuum',
    description: 'Powerful cordless vacuum with intelligent suction.',
    price: 599,
    category: 'Home & Garden',
    brand: 'Dyson',
    images: [
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
      'https://images.pexels.com/photos/6195276/pexels-photo-6195276.jpeg'
    ],
    rating: 4.4,
    reviewCount: 234,
    inStock: true,
    stockCount: 15,
    features: ['60 minutes run time', 'Intelligent suction', 'LCD screen', 'Whole-machine filtration'],
    specifications: {
      'Run Time': 'Up to 60 minutes',
      'Bin Capacity': '0.76L',
      'Weight': '3.05kg',
      'Filtration': 'Whole-machine HEPA'
    },
    tags: ['vacuum', 'cordless', 'powerful', 'home']
  }
];