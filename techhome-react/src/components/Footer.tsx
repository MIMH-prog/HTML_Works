import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-5">
        <div className="row g-4">
          {/* Logo y descripción */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="/assets/img/Ventas_y_servicios__1_-removebg-preview.png" 
                alt="TechHome" 
                width="40" 
                height="40" 
                className="me-2" 
              />
              <h5 className="mb-0" style={{fontFamily: 'Pacifico, cursive'}}>
                TechHome
              </h5>
            </div>
            <p className="text-light">
              Tu tienda de confianza en tecnología. Ofertas, novedades y los mejores 
              gadgets del mercado al mejor precio.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/sobre-nosotros" className="text-light text-decoration-none">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/servicios" className="text-light text-decoration-none">
                  Productos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contactenos" className="text-light text-decoration-none">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categorías */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3">Categorías</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Periféricos</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Audio</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Monitores</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Móviles</a>
              </li>
            </ul>
          </div>
          
          {/* Información de contacto */}
          <div className="col-12 col-lg-4">
            <h6 className="fw-bold mb-3">Contacto</h6>
            <div className="d-flex align-items-start mb-2">
              <i className="fas fa-map-marker-alt me-2 mt-1"></i>
              <span className="text-light">Av. Tecnología 123, Santiago, Chile</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="fas fa-phone me-2"></i>
              <span className="text-light">+56 2 1234 5678</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-envelope me-2"></i>
              <span className="text-light">info@techhome.cl</span>
            </div>
            
            {/* Newsletter */}
            <div className="mt-3">
              <h6 className="fw-bold mb-2">Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Tu email"
                />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-top border-secondary">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className="mb-0 text-light">
                &copy; 2025 TechHome - Todos los derechos reservados
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-light text-decoration-none small">
                  Términos y Condiciones
                </a>
                <a href="#" className="text-light text-decoration-none small">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
