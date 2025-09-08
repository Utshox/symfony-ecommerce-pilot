import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, User, Product, Filter } from '../types';

interface StoreState {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;

  // User
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;

  // UI State
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  
  // Search & Filters
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: Filter;
  setFilters: (filters: Filter) => void;
  
  // Wishlist
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      addToCart: (product, quantity = 1) => {
        const existingItem = get().cart.find(item => item.product.id === product.id);
        if (existingItem) {
          set(state => ({
            cart: state.cart.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }));
        } else {
          set(state => ({
            cart: [...state.cart, { product, quantity }]
          }));
        }
      },
      removeFromCart: (productId) => {
        set(state => ({
          cart: state.cart.filter(item => item.product.id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set(state => ({
          cart: state.cart.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        }));
      },
      clearCart: () => set({ cart: [] }),
      get cartTotal() {
        return get().cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      get cartItemCount() {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },

      // User
      user: null,
      setUser: (user) => set({ user }),
      get isAuthenticated() {
        return get().user !== null;
      },

      // UI State
      theme: 'light',
      toggleTheme: () => set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

      // Search & Filters
      searchQuery: '',
      setSearchQuery: (searchQuery) => set({ searchQuery }),
      filters: {},
      setFilters: (filters) => set({ filters }),

      // Wishlist
      wishlist: [],
      addToWishlist: (productId) => {
        set(state => ({
          wishlist: [...state.wishlist, productId]
        }));
      },
      removeFromWishlist: (productId) => {
        set(state => ({
          wishlist: state.wishlist.filter(id => id !== productId)
        }));
      }
    }),
    {
      name: 'ecommerce-store',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        theme: state.theme,
        wishlist: state.wishlist
      })
    }
  )
);