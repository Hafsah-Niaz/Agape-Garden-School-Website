import React, { useEffect } from 'react';

const PicflowGallery = ({ galleryId, lightboxColor }) => {
  useEffect(() => {
    // Function to load the Picflow script
    const loadPicflowScript = () => {
      if (!window.picflow) {
        window.picflow = true;
        const script = document.createElement('script');
        script.src = 'https://picflow.com/embed/main.js';
        script.type = 'module';
        script.defer = true;
        script.onload = () => {
          console.log('Picflow script loaded successfully.');
        };
        script.onerror = () => {
          console.error('Failed to load the Picflow script.');
        };
        document.head.appendChild(script);
      }
    };
    loadPicflowScript();

    return () => {
      // Cleanup if necessary
      const existingScript = document.querySelector('script[src="https://picflow.com/embed/main.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div>
      <picflow-gallery 
        id={galleryId}
        lightbox={lightboxColor}
      ></picflow-gallery>
    </div>
  );
};

PicflowGallery.defaultProps = {
  galleryId: 'gal_1YhJycVFionBn1Z3',
  lightboxColor: '#000000E6',
};

export default PicflowGallery;
