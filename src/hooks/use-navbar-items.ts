import { Home, MessageSquare, LayoutDashboardIcon, Book, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { create } from 'zustand';

// Define the Zustand store
interface NavItem {
  name: string;
  isActive: boolean;
  icon: IconType | LucideIcon;
}

interface NavState {
  navdata: NavItem[];
  setActive: (name: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
  navdata: [
    { name: "Home", isActive: true, icon: Home },
    { name: "Guestbook", isActive: false, icon: MessageSquare },
    { name: "Projects", isActive: false, icon: LayoutDashboardIcon },
    { name: "Blogs", isActive: false, icon: Book },
  ],
  setActive: (name: string) =>
    set((state) => ({
      navdata: state.navdata.map((item) =>
        item.name === name
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      ),
    })),
}));