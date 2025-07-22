const SobreNosotros = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Sobre Nosotros</h2>
          <p className="lead">
            En TechHome, somos apasionados por la tecnología y nos dedicamos a ofrecer 
            los mejores productos tecnológicos a nuestros clientes.
          </p>
          <p>
            Desde nuestros inicios, hemos trabajado incansablemente para convertirnos en 
            la tienda de tecnología de confianza, ofreciendo productos de alta calidad, 
            precios competitivos y un servicio excepcional.
          </p>
          <p>
            Nuestro equipo está formado por expertos en tecnología que están siempre 
            dispuestos a ayudarte a encontrar el producto perfecto para tus necesidades.
          </p>
          
          <div className="row mt-5">
            <div className="col-md-4 text-center mb-3">
              <h4>Calidad</h4>
              <p>Productos de las mejores marcas y con garantía completa.</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <h4>Servicio</h4>
              <p>Atención personalizada y soporte técnico especializado.</p>
            </div>
            <div className="col-md-4 text-center mb-3">
              <h4>Innovación</h4>
              <p>Siempre a la vanguardia de las últimas tendencias tecnológicas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
