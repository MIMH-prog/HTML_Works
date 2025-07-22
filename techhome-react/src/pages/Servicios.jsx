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
    <div className="container my-5">
      <h2 className="text-center mb-5">Nuestros Productos</h2>
      
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <img 
                src={producto.imagen} 
                className="card-img-top img-producto" 
                alt={producto.nombre}
                style={{ height: '200px', objectFit: 'contain', padding: '20px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text font-weight-bold text-primary fs-4">{producto.precio}</p>
                <button className="btn btn-techhome mt-auto">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
