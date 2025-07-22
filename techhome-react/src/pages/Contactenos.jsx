import { useState } from 'react';

const Contactenos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto!');
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center mb-4">Contáctenos</h2>
          <p className="text-center mb-5">
            ¿Tienes alguna pregunta o necesitas ayuda? No dudes en contactarnos.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-techhome btn-lg">
                Enviar Mensaje
              </button>
            </div>
          </form>
          
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <h5>Dirección</h5>
              <p>Av. Tecnología 123<br/>Santiago, Chile</p>
            </div>
            <div className="col-md-4 text-center">
              <h5>Teléfono</h5>
              <p>+56 2 1234 5678</p>
            </div>
            <div className="col-md-4 text-center">
              <h5>Email</h5>
              <p>info@techhome.cl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
