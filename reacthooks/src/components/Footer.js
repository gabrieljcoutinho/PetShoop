import React from 'react';
import '../Css/footer.css'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Seu Petshop. Todos os direitos reservados.
        </div>

        <div className="social-media">
          {/* Add your social media icons as SVG or images */}
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          {/* You might need to include a Font Awesome or similar library for these icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;