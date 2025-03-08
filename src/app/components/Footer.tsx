import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 flex justify-between items-center">
      <div className="footer-left">
        <p>Made using React and Tailwind CSS</p>
      </div>

      <div className="footer-right">
        <div className="social-icons flex gap-4">
          <a href="mailto:deleonjmike@gmail.com">
            
            <FontAwesomeIcon icon={faPaperPlane} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:dark:text-blue-700" />

          </a>
          <a href="https://www.linkedin.com/in/michael-joel-de-leon">
            
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:dark:text-blue-700" />
          </a>
          <a href="https://github.com/michael-deleon">
            
            <FontAwesomeIcon icon={faGithub} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:dark:text-blue-700" />

          </a>
        </div>
      </div>
    </footer>
  );
}
