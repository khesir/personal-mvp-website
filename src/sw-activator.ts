

// Export the register function if needed
export const register = () => {
  
  if ('serviceWorker' in navigator) {
    // Wait for the 'load' event to not block other work
    window.addEventListener('load', async () => {
      // Try to register the service worker.
      try {
        // Capture the registration for later use, if needed
        let reg;

        // Use ES Module version of our Service Worker in development
        if (import.meta.env?.DEV) {
          reg = await navigator.serviceWorker.register('/sw.ts', {
            type: 'module',
          });
        } else {
          // In production, use the normal service worker registration
          reg = await navigator.serviceWorker.register('/sw.ts');
        }

        console.log('Service worker registered! 😎', reg);
      } catch (err) {
        console.log('😥 Service worker registration failed: ', err);
      }
    });
  }
};