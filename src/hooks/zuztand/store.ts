import { create } from 'zustand';

interface Favorite {
  favorites: Set<string>;
  register: (state: string) => void;
  unRegister: (state: string) => void;
}
export const useFavoriteStore = create<Favorite>((set) => ({
  favorites: new Set(),
  register: (state) => {
    set((prev) => {
      const newSet = new Set(prev.favorites);
      newSet.add(state);
      return { favorites: newSet };
    });
  },
  unRegister: (state) => {
    set((prev) => {
      const newSet = new Set(prev.favorites);
      newSet.delete(state);
      return { favorites: newSet };
    });
  },
}));