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
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-left">
            <h2 className="mb-3">Bienvenido a TechHome</h2>
            <p className="lead">¡Innovación y tecnología al alcance de todos!</p>
            <p>Tu tienda de confianza en tecnología. Ofertas, novedades y los mejores gadgets del mercado.</p>
          </div>
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Productos Destacados</h3>
        <div className="row">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-4 mb-4">
              <div className="card h-100 text-center">
                <img 
                  src={producto.imagen} 
                  className="card-img-top img-producto" 
                  alt={producto.nombre}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text font-weight-bold">{producto.precio}</p>
                  <Link to="/servicios" className="btn btn-techhome mt-auto">
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
