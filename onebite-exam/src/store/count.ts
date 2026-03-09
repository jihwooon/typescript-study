import { create } from 'zustand'

type Store = {
    count: number;
    actions: {
      increase: () => void;
      decrease: () => void;
    }
}

export const useCountStore = create<Store>((set) => ({
  count: 0,
  actions: {
  increase: () => {
    set((store) => ({
        count: store.count + 1
    }))
  },
  decrease: () => {
    set((store) => ({
        count: store.count - 1
    }))
  },
  }
}))

export const useCount = () => useCountStore((store) => store.count)
export const useIncreaseCount = () => useCountStore((store) => store.actions.increase);
export const useDecreaseCount = () => useCountStore((store) => store.actions.decrease);
