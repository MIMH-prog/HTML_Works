import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const Contactenos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">Contáctenos</h1>
            <p className="lead text-muted">
              ¿Tienes alguna pregunta o necesitas ayuda? No dudes en contactarnos.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-12 col-md-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="nombre" className="form-label fw-semibold">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      
                      <div className="col-12 col-md-6">
                        <label htmlFor="telefono" className="form-label fw-semibold">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                      
                      <div className="col-12">
                        <label htmlFor="email" className="form-label fw-semibold">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                        />
                      </div>
                      
                      <div className="col-12">
                        <label htmlFor="mensaje" className="form-label fw-semibold">
                          Mensaje
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="mensaje"
                          name="mensaje"
                          rows={5}
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder="Escribe tu mensaje aquí..."
                          style={{ resize: 'vertical' }}
                        ></textarea>
                      </div>
                      
                      <div className="col-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-techhome btn-lg">
                            <i className="fas fa-paper-plane me-2"></i>
                            Enviar Mensaje
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-4">Información de Contacto</h5>
                  
                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-start">
                      <div className="contact-icon me-3">
                        <i className="fas fa-map-marker-alt fa-lg text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Dirección</h6>
                        <p className="text-muted mb-0 small">
                          Av. Tecnología 123<br/>
                          Santiago, Chile
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-start">
                      <div className="contact-icon me-3">
                        <i className="fas fa-phone fa-lg text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Teléfono</h6>
                        <p className="text-muted mb-0 small">+56 2 1234 5678</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item mb-4">
                    <div className="d-flex align-items-start">
                      <div className="contact-icon me-3">
                        <i className="fas fa-envelope fa-lg text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Email</h6>
                        <p className="text-muted mb-0 small">info@techhome.cl</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="d-flex align-items-start">
                      <div className="contact-icon me-3">
                        <i className="fas fa-clock fa-lg text-primary"></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold mb-1">Horario</h6>
                        <p className="text-muted mb-0 small">
                          Lun - Vie: 9:00 - 18:00<br/>
                          Sáb: 9:00 - 14:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactenos;
