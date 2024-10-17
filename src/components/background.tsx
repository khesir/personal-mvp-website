import { useCustomBanner } from '@/hooks/useCustomBanner';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface BackgroundProps {
  size?: string;
}

export function Background({ size = 'h-[300px]' }: BackgroundProps) {
  const location = useLocation();
  const pathname = location.pathname;

  // Zustand store
  const { imageUrl, setImageUrl } = useCustomBanner();

  useEffect(() => {
    // Check if the pathname does NOT start with any of the specified paths
    if (!(
      pathname.startsWith('/view/blogs') ||
      pathname.startsWith('/view/projects') ||
      pathname.startsWith('/view/progress')
    )) {
      setImageUrl('/img/banner3.jpg'); // Set the default image if no valid path
    }
    // This ensures the default image is set only if the current pathname is not in the specified paths.
  }, [pathname, setImageUrl]);

  return (
    <motion.div
    className={`relative w-full overflow-hidden rounded-3xl z-0 ${size}`}
    initial={{ height: 300 }} // Initial height for the animation
    animate={{ height: size === 'h-[300px]' ? 300 : 100 }} // Animate height based on size
    transition={{ duration: 0.2 }} // Duration of the animation
    >
      <img
        src={imageUrl}
        alt="banner"
        className="w-full h-full object-top object-cover pointer-events-none"
      />
    </motion.div>
  );
}