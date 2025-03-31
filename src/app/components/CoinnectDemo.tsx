import React from "react";

const CoinnectDemo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
      {/* Live Prototype Button */}
      <a
        href="https://www.figma.com/proto/c7UuBSTiEWP4VZlIWbHXMv/Cambio-Ventures-UI?node-id=1419-15581&node-type=frame&t=CYNi3woPVcmRlQ3x-1&scaling=scale-down&content-scaling=fixed&page-id=1417%3A3944&starting-point-node-id=1417%3A3945YOUR_PROTOTYPE_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-1/2 text-center bg-green-600 text-white py-3 px-6 font-semibold rounded-lg hover:bg-green-700 transition duration-300"
      >
        Prototype
      </a>

      {/* Internal Video Demo */}
      <div className="w-full rounded-xl md:w-1/2 flex justify-center">
        <video
          className="rounded-xl w-full max-w-md"
          controls
          poster="/images/cambio-ventures/investor Dashboard.jpg" // Optional preview image
        >
          <source src="/videos/CambioVenturesWalkthrough.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CoinnectDemo;
