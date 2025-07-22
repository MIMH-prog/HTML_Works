import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src="/assets/img/Ventas_y_servicios__1_-removebg-preview.png" 
            alt="TechHome" 
            width="50" 
            height="50" 
            className="d-inline-block align-top me-2" 
          />
          <span style={{fontFamily: 'Pacifico, cursive', fontSize: 'clamp(1.2rem, 4vw, 2rem)'}}>
            TechHome
          </span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-nosotros" onClick={() => setIsOpen(false)}>
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios" onClick={() => setIsOpen(false)}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactenos" onClick={() => setIsOpen(false)}>
                Contáctenos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
