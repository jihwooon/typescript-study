import { create } from 'zustand'
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer'

const useCountStore = create(
  immer(
    combine({ count: 0 }, (set, get) => ({
      actions: {
        increase: () => {
          set((state) => ({
            count: state.count + 1
          }))
        },
        decrease: () => {
          set((state) => ({
            count: state.count - 1
          }))
        },
      }
    }))
  )
)

export const useCount = () => useCountStore((store) => store.count)
export const useIncreaseCount = () => useCountStore((store) => store.actions.increase);
export const useDecreaseCount = () => useCountStore((store) => store.actions.decrease);
