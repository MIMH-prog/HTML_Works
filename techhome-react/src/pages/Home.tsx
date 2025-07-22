import { Link } from 'react-router-dom';

const Home = () => {
  const productos = [
    {
      id: 1,
      nombre: "Teclado Mecánico RGB",
      descripcion: "Teclado con retroiluminación personalizable, ideal para gamers y programadores.",
      precio: "$49.990",
      imagen: "/assets/img/Producto-1-removebg-preview.png"
    },
    {
      id: 2,
      nombre: "Audífonos Inalámbricos",
      descripcion: "Sonido envolvente, cancelación de ruido y batería de larga duración.",
      precio: "$29.990",
      imagen: "/assets/img/Producto-2-removebg-preview.png"
    },
    {
      id: 3,
      nombre: "Monitor LED 24\"",
      descripcion: "Monitor Full HD de 24 pulgadas con alta tasa de refresco y colores vibrantes.",
      precio: "$99.990",
      imagen: "/assets/img/Producto-3-removebg-preview.png"
    }
  ];

  return (
    <>
      {/* Sección de bienvenida */}
      <div className="container-fluid py-5 bg-gradient">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4">
                Bienvenido a <span className="text-primary">TechHome</span>
              </h1>
              <p className="lead mb-4">¡Innovación y tecnología al alcance de todos!</p>
              <p className="fs-5 mb-4">
                Tu tienda de confianza en tecnología. Ofertas, novedades y los mejores gadgets del mercado.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Link to="/servicios" className="btn btn-techhome btn-lg px-4">
                  Ver Productos
                </Link>
                <Link to="/contactenos" className="btn btn-outline-light btn-lg px-4">
                  Contactanos
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-5 mt-lg-0 text-center">
              <img 
                src="/assets/img/slider-en-una-página-web.png" 
                alt="Tecnología" 
                className="img-fluid hero-image"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Productos Destacados</h2>
          <p className="lead text-muted">Descubre nuestra selección de productos más populares</p>
        </div>
        
        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 card-hover">
                <div className="card-img-wrapper">
                  <img 
                    src={producto.imagen} 
                    className="card-img-top img-producto" 
                    alt={producto.nombre}
                  />
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold mb-3">{producto.nombre}</h5>
                  <p className="card-text text-muted flex-grow-1">{producto.descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-primary fw-bold mb-0">{producto.precio}</span>
                    <Link to="/servicios" className="btn btn-techhome">
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de características */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-12 col-md-4">
              <div className="feature-icon mb-3">
                <i className="fas fa-shipping-fast fa-3x text-primary"></i>
              </div>
              <h4 className="fw-bold">Envío Rápido</h4>
              <p className="text-muted">Entrega en 24-48 horas en todo Chile</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-icon mb-3">
                <i className="fas fa-shield-alt fa-3x text-primary"></i>
              </div>
              <h4 className="fw-bold">Garantía Total</h4>
              <p className="text-muted">Todos nuestros productos con garantía oficial</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-icon mb-3">
                <i className="fas fa-headset fa-3x text-primary"></i>
              </div>
              <h4 className="fw-bold">Soporte 24/7</h4>
              <p className="text-muted">Atención al cliente las 24 horas del día</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
