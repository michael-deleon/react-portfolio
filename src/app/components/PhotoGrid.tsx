import React from 'react';

const PhotoGrid = () => {
  const images = [
    "/images/art-with-rm/outcome/RM1.jpg",
    "/images/art-with-rm/outcome/RM2.png",
    "/images/art-with-rm/outcome/RM3.png",
    "/images/art-with-rm/outcome/RM4.png",
    "/images/art-with-rm/outcome/RM5.png",
    "/images/art-with-rm/outcome/RM6.png",
    "/images/art-with-rm/outcome/RM7.png",
    "/images/art-with-rm/RM-cartoon.jpg",
    "/images/art-with-rm/RM2.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-full h-64">
            <img 
              src={src} 
              alt={`Photo ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;
