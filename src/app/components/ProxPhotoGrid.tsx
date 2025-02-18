import React from 'react';

const ProxPhotoGrid = () => {
  const images = [
    "/images/prox/Contact List.png",
    "/images/prox/Edit Profile Page.png",
    "/images/prox/Home Page.png",
    "/images/prox/Messaging Page.png",
    "/images/prox/Settings Page.png",
    "/images/prox/Sign Up Page.png",
    "/images/prox/View Other User Profile Page.png",
    "/images/prox/View Own Profile Page.png",
    "/images/prox/Welcome Page.png",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-full h-full">
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

export default ProxPhotoGrid;
