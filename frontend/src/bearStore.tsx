
import { create } from 'zustand'

interface state {
  count: number
  theme: string
  increase: (number: number) => void
  decrease: (number: number) => void
  changeTheme: (string:string) => void
}

const useStore = create<state>()((set) => ({
  theme: 'dark-theme',
  count: 0,
  increase: (number) => set((state) => ({ count: state.count + number})),
  decrease: (number) => set((state) => ({ count: state.count - number})),
  changeTheme: () => set((state) => ({theme: state.theme === 'light-theme' ? 'dark-theme' : 'light-theme'}))
}))

export default useStore