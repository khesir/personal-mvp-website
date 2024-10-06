import { create } from 'zustand';

// Define the type for the Zustand store
interface ImageStore {
  imageUrl: string; // State to track the image URL
  setImageUrl: (url: string) => void; // Function to update the image URL
}

// Zustand store to manage the image URL
export const useCustomBanner = create<ImageStore>((set) => ({
  imageUrl: '', // Initial state for image URL (empty string)
  setImageUrl: (url: string) => set({ imageUrl: url }), // Function to set the image URL
}));
