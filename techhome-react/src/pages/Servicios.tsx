const Servicios = () => {
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
    },
    {
      id: 4,
      nombre: "iPhone 16",
      descripcion: "El último modelo de iPhone con tecnología de vanguardia.",
      precio: "$1.299.990",
      imagen: "/assets/img/pngimg.com - iphone16_PNG32.png"
    },
    {
      id: 5,
      nombre: "Tablet",
      descripcion: "Tablet de alta performance para trabajo y entretenimiento.",
      precio: "$399.990",
      imagen: "/assets/img/pngimg.com - tablet_PNG8567.png"
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Nuestros Productos</h1>
        <p className="lead text-muted">Descubre toda nuestra gama de productos tecnológicos</p>
      </div>
      
      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <select className="form-select form-select-lg">
            <option value="">Todos los productos</option>
            <option value="perifericos">Periféricos</option>
            <option value="audio">Audio</option>
            <option value="monitores">Monitores</option>
            <option value="moviles">Móviles</option>
            <option value="tablets">Tablets</option>
          </select>
        </div>
      </div>
      
      <div className="row g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow-sm border-0 product-card">
              <div className="position-relative overflow-hidden">
                <img 
                  src={producto.imagen} 
                  className="card-img-top img-producto" 
                  alt={producto.nombre}
                />
                <div className="product-overlay">
                  <button className="btn btn-light btn-sm">
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>
              <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title fw-bold mb-3">{producto.nombre}</h5>
                <p className="card-text text-muted small flex-grow-1">{producto.descripcion}</p>
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="h4 text-primary fw-bold mb-0">{producto.precio}</span>
                    <div className="text-warning">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-techhome">
                      <i className="fas fa-shopping-cart me-2"></i>
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Paginación */}
      <nav aria-label="Navegación de productos" className="mt-5">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1}>Anterior</a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">Siguiente</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Servicios;
