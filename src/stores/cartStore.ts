import { create } from "zustand";
import { CartState } from "../types/cart";
import api from "../lib/api";
import { persist } from "zustand/middleware";


const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      loading: false,
      
      fetchCart: async () => {
        set({ loading: true });
        try {
          const response = await api.get('/cart');
          set({ cart: response.data, loading: false });
        } catch (error) {
          console.error('Error fetching cart:', error);
          set({ loading: false });
        }
      },
      
      addToCart: async (productId) => {
        set({ loading: true });
        try {
          await api.post('/cart', { productId });
          const response = await api.get('/cart');
          set({ cart: response.data, loading: false });
        } catch (error) {
          console.error('Error adding to cart:', error);
          set({ loading: false });
        }
      },
      
      removeFromCart: async (productId) => {
        set({ loading: true });
        try {
          await api.delete(`/cart/${productId}`);
          set((state) => ({
            cart: state.cart.filter((g) => g.id !== productId),
            loading: false
          }));
        } catch (error) {
          console.error('Error removing from cart:', error);
          set({ loading: false });
        }
      },
      
      clearCart: async () => {
        set({ loading: true });
        try {
          await api.delete('/cart');
          set({ cart: [], loading: false });
        } catch (error) {
          console.error('Error clearing cart:', error);
          set({ loading: false });
        }
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;