import { useCustomBanner } from '@/hooks/useCustomBanner';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function Background() {
  const location = useLocation();
  const pathname = location.pathname;

  // Zustand store
  const { imageUrl, setImageUrl } = useCustomBanner();

  useEffect(() => {
    if (!pathname.startsWith('/view')) {
      setImageUrl('/img/banner3.jpg');
    } else if (pathname.startsWith('/view') && imageUrl === ''){
      setImageUrl('/img/banner2.jpeg');
    }
  }, [pathname, setImageUrl, imageUrl]);
  console.log(imageUrl)
  return (
    <div className="relative w-full sm:h-[400px] h-[300px] overflow-hidden rounded-3xl z-0">
      <img
        src={imageUrl}
        alt="banner"
        className="w-full h-full object-top object-cover pointer-events-none"
      />
    </div>
  );
}
