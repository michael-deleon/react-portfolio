import React from "react";

const CoinnectDemo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
      {/* Live Prototype Button */}
      <a
        href="https://www.figma.com/proto/aLoMX5z4AQrpOKsjMo4Meg/Social-Finance-App?node-id=18-66&t=Ctu6HnK0cUpst3TG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1"
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
          poster="/images/coinnect/Coinnect.jpg" // Optional preview image

        >
          <source src="/videos/Coinnect Walkthrough.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CoinnectDemo;
