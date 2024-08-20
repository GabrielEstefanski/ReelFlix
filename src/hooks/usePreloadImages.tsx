import { useState, useEffect } from 'react';

const usePreloadImages = (imageUrls: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = imageUrls.map(
        url => new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
          img.onerror = () => reject();
        })
      );

      try {
        await Promise.all(promises);
        setLoaded(true);
      } catch(error) {
        console.error('Error or fetching images: ', error);
      }
    };

    loadImages();
  }, [imageUrls]);

  return loaded;
};

export default usePreloadImages;
