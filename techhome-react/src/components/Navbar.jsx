import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand d-flex align-items-center">
        <img 
          src="/assets/img/Ventas_y_servicios__1_-removebg-preview.png" 
          alt="TechHome" 
          width="60" 
          height="60" 
          className="d-inline-block align-top mr-2" 
        />
        <span style={{fontFamily: 'Pacifico, cursive', fontSize: '2rem'}}>TechHome</span>
      </span>
      
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/servicios">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactenos">Contáctenos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
