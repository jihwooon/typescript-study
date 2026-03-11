import { create } from 'zustand'
import { combine, persist, subscribeWithSelector, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer'

const useCountStore = create(
  persist(
  subscribeWithSelector(
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
  ),
  {
    name: 'countStore', 
    partialize: (store) => ({
      count: store.count
    }),
    storage: createJSONStorage(() => sessionStorage)
  }
  )
)

useCountStore.subscribe((store) => store.count, (count, prevCount) => {
  const store = useCountStore.getState()
  console.log(store)
})

export const useCount = () => useCountStore((store) => store.count)
export const useIncreaseCount = () => useCountStore((store) => store.actions.increase);
export const useDecreaseCount = () => useCountStore((store) => store.actions.decrease);
