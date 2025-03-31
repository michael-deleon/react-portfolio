import React from "react";

interface PlayerCardProps {
  project: {
    image: string;
    title: string;
    description: string;
    skills: string[];
    link: string;
  };
}

const PlayerCard: React.FC<PlayerCardProps> = ({ project }) => {
  return (
    <a href={project.link} rel="noopener noreferrer" className="w-full max-w-3xl">
      <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-lg w-full bg-white dark:bg-gray-800 mt-4 mb-4 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
        {/* Left Side - Project Image */}
        <div className="relative w-full md:w-2/3">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-full object-cover"
          />
          {/* Skills Tags */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-800 text-white text-xs font-semibold px-2 py-1 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side - Project Details */}
        <div className="p-4 flex flex-col justify-between w-full md:w-1/3">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PlayerCard;
