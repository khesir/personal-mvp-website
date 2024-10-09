import { create } from 'zustand';

interface PathStore {
  pathname: string;
  setPathname: (url: string) => void;
}

export const usePathname = create<PathStore>((set) => ({
  pathname: '/',
  setPathname: (path: string) => set({ pathname: path }),
}));
