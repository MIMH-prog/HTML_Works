const SobreNosotros = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Sobre Nosotros</h1>
              <p className="lead mb-4">
                En TechHome, somos apasionados por la tecnología y nos dedicamos a ofrecer 
                los mejores productos tecnológicos a nuestros clientes.
              </p>
              <p className="fs-5">
                Desde nuestros inicios, hemos trabajado incansablemente para convertirnos en 
                la tienda de tecnología de confianza, ofreciendo productos de alta calidad, 
                precios competitivos y un servicio excepcional.
              </p>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0 text-center">
              <img 
                src="/assets/img/disparo-vertical-de-feliz-mujer-de-piel-oscura-con-pelo-rizado.jpg" 
                alt="Nuestro equipo" 
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Nuestros Valores</h2>
          <p className="lead text-muted">Los pilares que nos definen como empresa</p>
        </div>
        
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="mb-3">
                  <i className="fas fa-award fa-3x text-primary"></i>
                </div>
                <h4 className="card-title fw-bold">Calidad</h4>
                <p className="card-text">
                  Productos de las mejores marcas y con garantía completa. 
                  Cada artículo pasa por rigurosos controles de calidad.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="mb-3">
                  <i className="fas fa-users fa-3x text-primary"></i>
                </div>
                <h4 className="card-title fw-bold">Servicio</h4>
                <p className="card-text">
                  Atención personalizada y soporte técnico especializado. 
                  Nuestro equipo está siempre dispuesto a ayudarte.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <div className="mb-3">
                  <i className="fas fa-lightbulb fa-3x text-primary"></i>
                </div>
                <h4 className="card-title fw-bold">Innovación</h4>
                <p className="card-text">
                  Siempre a la vanguardia de las últimas tendencias tecnológicas. 
                  Descubre lo más nuevo del mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">5+</h2>
              <p className="mb-0">Años de Experiencia</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">10K+</h2>
              <p className="mb-0">Clientes Satisfechos</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">500+</h2>
              <p className="mb-0">Productos Disponibles</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-4 fw-bold">24/7</h2>
              <p className="mb-0">Soporte Técnico</p>
            </div>
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Nuestro Equipo</h2>
          <p className="lead text-muted">Conoce a las personas detrás de TechHome</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <img 
                  src="/assets/img/apuesto-hombre-apuntando-la-lateral.jpg" 
                  alt="CEO" 
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="card-title fw-bold">Juan Pérez</h5>
                <p className="text-primary fw-semibold">CEO & Fundador</p>
                <p className="card-text small">
                  Experto en tecnología con más de 10 años de experiencia en el sector.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card border-0 shadow-sm text-center">
              <div className="card-body p-4">
                <img 
                  src="/assets/img/nunca-escuche-una-broma-mejor-hombre-guapo-feliz-en-camiseta-roja-casual-con-pulgar-arriba.jpg" 
                  alt="CTO" 
                  className="rounded-circle mb-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="card-title fw-bold">Carlos Silva</h5>
                <p className="text-primary fw-semibold">Director Técnico</p>
                <p className="card-text small">
                  Ingeniero especializado en sistemas y soporte técnico avanzado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosotros;
