import {create} from 'zustand';

export const useSwiperStore = create((set) => ({
  prevRef: null,
  nextRef: null,
  setNavigationRefs: (prev: any, next: any) => set({ prevRef: prev, nextRef: next }),
}));