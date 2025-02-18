import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="footer bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="footer-left">
        <p>Made using React and Tailwind CSS</p>
      </div>

      <div className="footer-right">
        <div className="social-icons flex gap-4">
          <a href="mailto:deleonjmike@gmail.com">
            <i className="fas fa-paper-plane text-gray-900 dark:text-white text-2xl hover:text-blue-500 dark:hover:text-blue-500 transition duration-300"></i>
          </a>
          <a href="https://www.linkedin.com/in/michael-joel-de-leon-9bb460181/">
            <i className="fab fa-linkedin text-gray-900 dark:text-white text-2xl hover:text-blue-500 dark:hover:text-blue-500 transition duration-300"></i>
          </a>
          <a href="https://github.com/michael-deleon">
            <i className="fab fa-github text-gray-900 dark:text-white text-2xl hover:text-blue-500 dark:hover:text-blue-500 transition duration-300"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
