import React, { useState, useEffect } from "react";
import "./App.css";

// Assets locales estáticos (Se mantienen de tu carpeta interna)
import logoImg from "./assets/logo.png";
import heroImg from "./assets/hero.jpg";
import alfajorImg from "./assets/alfajor.jpg";
import trufaImg from "./assets/trufa.jpg";
import limonImg from "./assets/limon.jpg";
import manzanaImg from "./assets/manzana.jpg";
import carneImg from "./assets/carne.jpg";
import tequenosImg from "./assets/tequenos.jpg";

const WHATSAPP_NUMBER = "51932906162";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL_CONTACT = "noeqp011085@gmail.com";

const listadoBocaditos = [
  { id: 1, titulo: "Alfajores Clásicos", imagen: alfajorImg, badge: "El Favorito", descripcion: "Suaves capas de galleta de mantequilla artesanal espolvoreadas con azúcar fina y un abundante relleno del más tierno manjarblanco." },
  { id: 2, titulo: "Trufas de Chocolate", imagen: trufaImg, badge: "Premium", descripcion: "Exquisitas esferas de puro chocolate premium seleccionadas rigurosamente, con una textura sedosa que se funde en el paladar." },
  { id: 3, titulo: "Mini Pie de Limón", imagen: limonImg, badge: "Cítrico", descripcion: "El equilibrio perfecto sobre una base crocante horneada, rellena de una crema cítrica vibrante y coronada con merengue." },
  { id: 4, titulo: "Mini Pie de Manzana", imagen: manzanaImg, badge: "Clásico", descripcion: "Deliciosas manzanas frescas finamente picadas y caramelizadas con un toque de canela secreta, reposadas en una delicada masa." },
  { id: 5, titulo: "Empanaditas de Carne", imagen: carneImg, badge: "Clásico", descripcion: "Masa hojaldrada artesanal rellena de tierno lomo fino sazonado, con un dorado perfecto y sabor casero que encanta en cada bocado."},
  { id: 6, titulo: "Tequeños con Guacamole", imagen: tequenosImg, badge: "Clásico", descripcion: "Crujientes tequeños de queso acompañados de cremosa salsa guacamole preparada con palta fresca y finos ingredientes seleccionados."}
];

const catalogoExtendidoBocaditos = [
  { id: 7, titulo: "Brownies Bites", categoria: "Dulce", desc: "Cuadraditos de chocolate melcochoso con nueces crujientes." },
  { id: 8, titulo: "Mini Cupcakes Temáticos", categoria: "Dulce", desc: "Suave masa de vainilla o chocolate con frosting personalizado." },
  { id: 9, titulo: "Macarons Franceses", categoria: "Dulce", desc: "Finas galletas de almendra rellenas de ganache de frutos de la estación." },
   { id: 10, titulo: "Mini Quiche Lorraine", categoria: "Salado", desc: "Tartaleta salada de crema, queso suizo y tocino ahumado crocante." }
];

// Mapeo directo a la carpeta public/servicios/
const subServiciosAlquiler = [
  { id: "m1", categoria: "menaje", titulo: "Cucharas, Tenedores y Cuchillos", desc: "Cubertería fina de acero inoxidable de alto brillo, desinfectada y lista para vestir tu mesa.", img: "/servicios/menaje1.jpg" },
  { id: "m2", categoria: "menaje", titulo: "Vasos y Copas de Cristal Fino", desc: "Cristalería premium para champaña, vino, agua y cócteles que aporta elegancia y distinción.", img: "/servicios/menaje2.jpg" },
  { id: "m3", categoria: "menaje", titulo: "Platos de Loza Premium", desc: "Platos base, de fondo y de postre en cerámica blanca ultra pulcra que resalta tu banquete.", img: "/servicios/menaje3.jpg" },
  
  { id: "mo1", categoria: "mobiliario", titulo: "Sillas Tiffany", desc: "Sillas en acabados dorados y plateados ideales para recepciones elegantes y de etiqueta.", img: "/servicios/mobiliario1.jpg" },
  { id: "mo2", categoria: "mobiliario", titulo: "Sillón Luis XIV", desc: "Asiento de honor imponente, perfecto para los novios, quinceañeras o anfitriones principales.", img: "/servicios/mobiliario2.jpg" },
  { id: "mo3", categoria: "mobiliario", titulo: "Salitas Lounge", desc: "Juegos de muebles minimalistas blancos para crear zonas de conversación cómodas y relajadas.", img: "/servicios/mobiliario3.jpg" },
  { id: "mo4", categoria: "mobiliario", titulo: "Sillas Tradicionales con Fundas", desc: "Sillas ergonómicas plásticas vestidas con elegantes telas satinadas y lazos de color temático.", img: "/servicios/mobiliario4.jpg" },
  { id: "mo5", categoria: "mobiliario", titulo: "Sillas Tradicionales", desc:"Sillas ergonómicas plásticas resistentes, comododas y perfectas para eventos sociales", img: "/servicios/mobiliario5.jpg"},
  { id: "mo6", categoria: "mobiliario", titulo: "Mesas Redondas y Rectangulares", desc:"Mesas resistentes y decoradas, perfectas para bodas, cumpleaños, reuniones y eventos corporativos", img: "/servicios/mobiliario6.jpg"},

  { id: "d1", categoria: "decoracion", titulo: "Paredes de Fondo (Backdrops)", desc: "Estructuras de fondo perfectas para sesiones de fotos familiares, mesas de honor y tortas.", img: "/servicios/decoracion1.jpg" },
  { id: "d2", categoria: "decoracion", titulo: "Decoraciones con Globos", desc: "Arcos orgánicos, cascadas de globos y combinaciones modernas con paletas de color en tendencia.", img: "/servicios/decoracion2.jpg" },
  { id: "d3", categoria: "decoracion", titulo: "Centros de Mesa y Arreglos Florales", desc: "Composiciones artísticas con flores naturales y bases sofisticadas que realzan la visual.", img: "/servicios/decoracion3.jpg" },

  { id: "e1", categoria: "estructuras", titulo: "Toldos Estructurados Arquitectónicos", desc: "Estructuras altas y seguras revestidas en telas finas para proteger a tus invitados de la intemperie.", img: "/servicios/estructuras1.jpg" }
];

// Mapeo directo a la carpeta public/eventos/
const tiposEventos = [
  { nombre: "Bautizos", img: "/eventos/bautizos.jpg" },
  { nombre: "Matrimonios", img: "/eventos/matrimonios.jpg" },
  { nombre: "Fiestas de Promoción", img: "/eventos/promocion.jpg" },
  { nombre: "Cumpleaños", img: "/eventos/cumpleanos.jpg" },
  { nombre: "Aniversarios", img: "/eventos/aniversarios.jpg" },
  { nombre: "Baby Showers", img: "/eventos/babyshower.jpg" },
  { nombre: "Eventos Corporativos", img: "/eventos/corporativos.jpg" },
  { nombre: "Reuniones Sociales", img: "/eventos/sociales.jpg" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="#inicio" className="logo-link">
          <img src={logoImg} alt="Dulce Encanto" className="brand-logo" />
        </a>
        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
          <a href="#nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
          <a href="#bocaditos" onClick={() => setIsMobileMenuOpen(false)}>Bocaditos</a>
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)}>Estructuras y Alquiler</a>
          <a href="#eventos" onClick={() => setIsMobileMenuOpen(false)}>Eventos</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-nav-mobile">Cotizar Ahora</a>
        </nav>
        <div className="nav-actions-desktop">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Cotizar Ahora</a>
        </div>
        <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menú">
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="hero-section">
    <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}></div>
    <div className="hero-overlay"></div>
    <div className="container hero-content">
      <div className="hero-card">
        <span className="hero-pretitle">✿ Catering, Alquiler y Decoración Integral ✿</span>
        <h1 className="hero-title">Hacemos de tu Evento un Momento Único e Inolvidable</h1>
        <div className="hero-divider">✿</div>
        <p className="hero-text">
          Llevamos tu celebración al siguiente nivel. Te ofrecemos la más fina repostería artesanal junto con el servicio de alquiler de mobiliario, menaje, toldos y decoración temática exclusiva.
        </p>
        <div className="hero-buttons">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary pulse">Solicitar Cotización Integral</a>
          <a href="#servicios" className="btn-secondary">Ver Equipamiento</a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="nosotros" className="about-section">
    <div className="ornament-top">✿ ✧ ✿ ✧ ✿ ✧ ✿ ✧ ✿ ✧ ✿ ✧ ✿</div>
    <div className="container about-grid">
      <div className="about-image-wrapper">
        <div className="about-bg-shape mint-shape"></div>
        <div className="about-bg-shape pink-shape"></div>
        <img src="/servicios/estructuras1.jpg" alt="Organización de eventos" className="about-img" />
        <div className="floating-badge">
          <strong>Premium</strong>
          <span>Garantizado</span>
        </div>
      </div>
      <div className="about-text">
        <span className="section-label">✧ Nuestra Experiencia y Calidad ✧</span>
        <h2 className="section-title">El Arte de Celebrar en Grande</h2>
        <div className="title-underline"></div>
        <p className="highlight-text">
        </p>
        <p className="standard-text">
          Nuestra filosofía se basa en el compromiso absoluto y la perfección del detalle. No solo te ofrecemos bocaditos deliciosos que deleitan paladares, sino que vestimos y acondicionamos tu locación completa con toldos, menaje pulcro y mobiliario sofisticado, quitándote cualquier preocupación logística.
        </p>
        <ul className="features-list">
          <li><span className="check-icon">✿</span> Insumos Gastronómicos Seleccionados</li>
          <li><span className="check-icon">✿</span> Mobiliario e Infraestructura Impecable</li>
          <li><span className="check-icon">✿</span> Decoración Temática Vanguardista y Diseños Exclusivos</li>
          <li><span className="check-icon">✿</span> Montaje Corporativo y Social con Puntualidad Rigurosa</li>
        </ul>
      </div>
    </div>
  </section>
);

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="bocaditos" className="products-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">✿ Catering & Repostería Boutique ✿</span>
          <h2 className="section-title text-prominent">Nuestros Bocaditos Exclusivos</h2>
          <div className="title-underline center"></div>
          <p className="section-subtitle">
            Explora nuestra fina selección de dulces diseñados meticulosamente para deleitar la vista y conquistar los paladares más exigentes de tus invitados.
          </p>
        </div>
        <div className="products-grid">
          {listadoBocaditos.map((bocadito) => (
            <div key={bocadito.id} className="product-card">
              <div className="product-img-container">
                <span className="product-badge">{bocadito.badge}</span>
                <img src={bocadito.imagen} alt={bocadito.titulo} className="product-img" loading="lazy" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{bocadito.titulo}</h3>
                <p className="product-desc">{bocadito.descripcion}</p>
                <a href={`${WHATSAPP_URL}?text=Hola%20Dulce%20Encanto,%20deseo%20información%20y%20cotizar%20el%20bocadito:%20${encodeURIComponent(bocadito.titulo)}`} target="_blank" rel="noopener noreferrer" className="btn-text-arrow">
                  Consultar Bocadito <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center current-more-catalog-trigger">
          <button onClick={() => setModalOpen(true)} className="btn-secondary btn-catalog-trigger">
            🌸 Ver Más Variedades y Bocaditos Salados
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setModalOpen(false)}>×</button>
            <h3 className="modal-title">Variedades Adicionales Disponibles</h3>
            <p className="modal-subtitle">Preparamos pedidos personalizados por ciento y cincuentena.</p>
            <div className="modal-list-grid">
              {catalogoExtendidoBocaditos.map((bocadito) => (
                <div key={bocadito.id} className="modal-item-card">
                  <span className={`modal-item-tag ${bocadito.categoria.toLowerCase()}`}>{bocadito.categoria}</span>
                  <h4>{bocadito.titulo}</h4>
                  <p>{bocadito.desc}</p>
                  <a href={`${WHATSAPP_URL}?text=Hola%20Dulce%20Encanto,%20me%20interesa%20el%20bocadito%20adicional:%20${encodeURIComponent(bocadito.titulo)}`} target="_blank" rel="noopener noreferrer" className="modal-item-wa">Pedir info ↗</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("menaje");

  const categories = [
    { id: "menaje", nombre: "🍽️ Alquiler de Menaje" },
    { id: "mobiliario", nombre: "🪑 Mobiliario" },
    { id: "decoracion", nombre: "✨ Decoración Temática" },
    { id: "estructuras", nombre: "⛺ Toldos y Estructuras" }
  ];

  return (
    <section id="servicios" className="services-section">
      {/* Sintonía con la estética del Hero */}
      <div className="services-hero-mirror-bg" style={{ backgroundImage: `url(${heroImg})` }}></div>
      <div className="services-hero-mirror-overlay"></div>
      
      <div className="container services-interactive-container">
        <div className="section-header text-center text-white-context">
          <span className="section-label-light">✿ Mobiliario, Estructuras y Decoración ✿</span>
          <h2 className="section-title text-prominent white-text">Servicios Complementarios para Eventos</h2>
          <div className="title-underline center mint-light-line"></div>
          
          <div className="menaje-explanation-box refined-box">
            <p><strong>Nota de Servicio (Alquiler de Menaje):</strong> Incluye el abastecimiento completo de vajilla, loza tratada a alta temperatura y cristalería fina. Todo nuestro equipamiento se entrega lavado, pulido a mano y empaquetado herméticamente, garantizando higiene absoluta en la mesa de tu evento.</p>
          </div>
        </div>

        <div className="tabs-navigation refined-tabs">
          {categories.map((cat) => (
            <button key={cat.id} className={`tab-btn refined-tab-btn ${activeTab === cat.id ? "active" : ""}`} onClick={() => setActiveTab(cat.id)}>
              {cat.nombre}
            </button>
          ))}
        </div>

        <div className="services-interactive-grid">
          {subServiciosAlquiler.filter(item => item.categoria === activeTab).map((item) => (
            <a key={item.id} href={`${WHATSAPP_URL}?text=Hola%20Dulce%20Encanto,%20solicito%20alquiler%20y%20presupuesto%20para:%20${encodeURIComponent(item.titulo)}`} target="_blank" rel="noopener noreferrer" className="subservice-clickable-card refined-card" title="Click para cotizar este servicio por WhatsApp">
              <div className="subservice-img-wrapper">
                <img src={item.img} alt={item.titulo} className="subservice-img" loading="lazy" />
                <div className="subservice-hover-layer">
                  <span>💬 Cotizar por WhatsApp</span>
                </div>
              </div>
              <div className="subservice-text-content">
                <h4>{item.titulo}</h4>
                <p>{item.desc}</p>
                <div className="subservice-card-footer">
                  <span>Solicitar Disponibilidad</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventsType = () => (
  <section id="eventos" className="events-type-section">
    <div className="ornament-divider">✿ ✧ ✿ ✧ ✿ ✧ ✿ ✧ ✿</div>
    <div className="container">
      <div className="section-header text-center">
        <span className="section-label">✧ Atmósferas Personalizadas ✧</span>
        <h2 className="section-title text-prominent">Tipos de Eventos que Atendemos</h2>
        <div className="title-underline center"></div>
        <p className="section-subtitle">
          Haz clic sobre el evento que estás planificando para enviarnos una consulta automática y reservar la fecha de producción.
        </p>
      </div>

      <div className="events-type-grid">
        {tiposEventos.map((evento, idx) => (
          <a key={idx} href={`${WHATSAPP_URL}?text=Hola%20Dulce%20Encanto,%20estoy%20organizando%20un%20evento%20y%20deseo%20asesoría%20para:%20${encodeURIComponent(evento.nombre)}`} target="_blank" rel="noopener noreferrer" className="event-type-card-interactive">
            <div className="event-type-img-container">
              <img src={evento.img} alt={evento.nombre} className="event-type-image" loading="lazy" />
              <div className="event-type-gradient-overlay"></div>
            </div>
            <h3 className="event-type-name-floating">{evento.nombre}</h3>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact-section" id="contacto">
    <div className="container">
      <div className="contact-card">
        <span className="section-label">✿ Atención Personalizada ✿</span>
        <h2 className="section-title text-prominent">Planifiquemos tu Próximo Evento</h2>
        <div className="title-underline center"></div>
        <p className="contact-desc">
          ¿Listo para cotizar? Estamos aquí para asesorarte sobre las cantidades ideales de bocaditos, coordinar mobiliario y armar un presupuesto integral a tu medida.
        </p>
        
        <div className="contact-info-grid">
          <div className="contact-item">
            <div className="icon-circle">📞</div>
            <h4>Teléfono Directo</h4>
            <a href={`tel:${WHATSAPP_NUMBER}`}>
              {WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4')}
            </a>
          </div>
          <div className="contact-item">
            <div className="icon-circle">✉️</div>
            <h4>Correo Electrónico</h4>
            <a href={`mailto:${EMAIL_CONTACT}`}>{EMAIL_CONTACT}</a>
          </div>
        </div>

        <div className="cta-wrapper">
          <p>¿Prefieres una respuesta inmediata de nuestro equipo?</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large pulse">Escríbenos por WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand text-center-mobile">
        <div className="footer-logo-container-giant">
          <img src={logoImg} alt="Dulce Encanto" className="footer-logo-max" />
        </div>
        <p className="footer-tagline">✿ Pequeños bocados, grandes momentos ✿</p>
        <p className="footer-text">
          Dedicados al diseño, catering gourmet y equipamiento logístico premium para toda clase de eventos sociales en Lima Metropolitana.
        </p>
      </div>
      <div className="footer-links">
        <h4>Enlaces Rápidos</h4>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Sobre Nosotros</a></li>
          <li><a href="#bocaditos">Bocaditos</a></li>
          <li><a href="#servicios">Alquiler y Toldos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div className="footer-info">
        <h4>Atención y Reservas</h4>
        <p><strong>Lunes a Sábado:</strong></p>
        <p>09:00 AM — 07:00 PM</p>
        <div className="delivery-info">
          <span>🚚</span> Soporte integral y entregas puntuales en Lima.
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} DULCE ENCANTO. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <EventsType />
      <Contact />
      <Footer />
    </div>
  );
}