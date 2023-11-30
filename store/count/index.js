import {create} from 'zustand';

const useCounterStore = create((set) => ({
  count: 1,
  controls: {
    increment: () => set(({ count }) => ({ count: count + 1 })),
    decrement: () => set(({ count }) => ({ count: count - 1 })),
    reset: () => set({ count: 0 }),
  },
}));

export default useCounterStore;
