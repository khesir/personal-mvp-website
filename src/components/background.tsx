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
    if (!pathname.startsWith('/view')) {
      setImageUrl('/img/banner3.jpg');
    } else if (pathname.startsWith('/view') && imageUrl === '') {
      setImageUrl('/img/banner2.jpeg');
    }
  }, [pathname, setImageUrl, imageUrl]);

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