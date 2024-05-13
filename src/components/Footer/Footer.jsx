import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container1">
        <p className="footer-text">
          <a
            href="https://www.linkedin.com/in/david-johnson-79b9b524a/"
            target="_blank"
          >
            Linkedin
          </a>
        </p>
        <p className="footer-text">
          <a href="https://github.com/dejv0ld" target="_blank">
            GitHub
          </a>
        </p>
        <p className="footer-text">
          <a
            target="_blank"
            className="contact-anchor"
            onClick={() => {
              window.location.href = 'mailto:david_johnson_1992@hotmail.com';
            }}
          >
            Contact
          </a>
        </p>
      </div>
      <div className="footer-container2">
        {' '}
        David © 2024 - All rights reserved
      </div>
        </footer>


  );
};
