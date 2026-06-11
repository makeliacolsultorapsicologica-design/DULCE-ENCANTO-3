import React, { useState, useEffect } from "react";
import "./App.css";

// Imágenes
import logoImg from "./assets/logo.png";
import heroImg from "./assets/hero.jpg";
import alfajorImg from "./assets/alfajor.jpg";
import trufaImg from "./assets/trufa.jpg";
import limonImg from "./assets/limon.jpg";
import manzanaImg from "./assets/manzana.jpg";

const WHATSAPP_NUMBER = "51932906162";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL_CONTACT = "noeqp011085@gmail.com";

const listadoBocaditos = [
  {
    id: 1,
    titulo: "Alfajores Clásicos",
    imagen: alfajorImg,
    badge: "El Favorito",
    descripcion: "Suaves capas de galleta de mantequilla artesanal espolvoreadas con azúcar fina y un abundante relleno del más tierno manjarblanco."
  },
  {
    id: 2,
    titulo: "Trufas de Chocolate",
    imagen: trufaImg,
    badge: "Premium",
    descripcion: "Exquisitas esferas de puro chocolate premium seleccionadas rigurosamente, con una textura sedosa que se funde en el paladar."
  },
  {
    id: 3,
    titulo: "Mini Pie de Limón",
    imagen: limonImg,
    badge: "Cítrico",
    descripcion: "El equilibrio perfecto sobre una base crocante horneada, rellena de una crema cítrica vibrante y coronada con merengue."
  },
  {
    id: 4,
    titulo: "Mini Pie de Manzana",
    imagen: manzanaImg,
    badge: "Clásico",
    descripcion: "Deliciosas manzanas frescas finamente picadas y caramelizadas con un toque de canela secreta, reposadas en una delicada masa."
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
          <a href="#productos" onClick={() => setIsMobileMenuOpen(false)}>Productos</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-nav-mobile">
            Cotizar Ahora
          </a>
        </nav>

        <div className="nav-actions-desktop">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Cotizar Ahora
          </a>
        </div>

        <button 
          className="hamburger-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
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
    {/* Imagen de fondo con capa oscura */}
    <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }}></div>
    <div className="hero-overlay"></div>
    
    <div className="container hero-content">
      <div className="hero-card">
        <span className="hero-pretitle">Hechos con Amor</span>
        <h1 className="hero-title">Pequeños bocados,<br/>grandes momentos</h1>
        <div className="hero-divider">✿</div>
        <p className="hero-text">
          Bocaditos artesanales para cumpleaños, bodas, bautizos y eventos especiales. Elaborados con dedicación, diseño y la más alta calidad repostera.
        </p>
        <div className="hero-buttons">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary pulse">
            Solicitar Cotización
          </a>
          <a href="#productos" className="btn-secondary">
            Ver Catálogo
          </a>
        </div>
      </div>
    </div>
    
    {/* Ondas decorativas */}
    <div className="wave-decoration">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.93,115.82,207.5,95.8C245.92,84.7,284.14,70.52,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div>
  </section>
);

const About = () => (
  <section id="nosotros" className="about-section">
    <div className="container about-grid">
      <div className="about-image-wrapper">
        <div className="about-bg-shape mint-shape"></div>
        <div className="about-bg-shape pink-shape"></div>
        <img src={alfajorImg} alt="Elaboración artesanal" className="about-img" />
        <div className="floating-badge">
          <strong>100%</strong>
          <span>Artesanal</span>
        </div>
      </div>
      <div className="about-text">
        <span className="section-label">Nuestra Esencia</span>
        <h2 className="section-title">El Arte de lo Dulce</h2>
        <div className="title-underline"></div>
        <p className="highlight-text">
          En <strong>DULCE ENCANTO</strong> elaboramos bocaditos con ingredientes seleccionados y una presentación impecable para hacer inolvidable cada celebración.
        </p>
        <p className="standard-text">
          Nuestra filosofía se basa en la perfección del detalle. Creemos que cada bocado debe contar una historia de sabor única, uniendo la tradición de las recetas caseras con la sofisticación visual que tus eventos más importantes merecen.
        </p>
        <ul className="features-list">
          <li><span className="check-icon">♥</span> Insumos Premium Seleccionados</li>
          <li><span className="check-icon">♥</span> Diseños Exclusivos y Elegantes</li>
          <li><span className="check-icon">♥</span> Puntualidad Garantizada</li>
        </ul>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section id="productos" className="products-section">
    <div className="container">
      <div className="section-header text-center">
        <span className="section-label">Selección Exclusiva</span>
        <h2 className="section-title">Nuestros Bocaditos</h2>
        <div className="title-underline center"></div>
        <p className="section-subtitle">
          Explora nuestra fina selección de dulces diseñados meticulosamente para deleitar la vista y conquistar los paladares más exigentes.
        </p>
      </div>
      <div className="products-grid">
        {listadoBocaditos.map((bocadito) => (
          <div key={bocadito.id} className="product-card">
            <div className="product-img-container">
              <span className="product-badge">{bocadito.badge}</span>
              <img src={bocadito.imagen} alt={bocadito.titulo} className="product-img" />
            </div>
            <div className="product-info">
              <h3 className="product-title">{bocadito.titulo}</h3>
              <p className="product-desc">{bocadito.descripcion}</p>
              <a 
                href={`${WHATSAPP_URL}?text=Hola%20Dulce%20Encanto,%20deseo%20información%20y%20cotizar%20el%20bocadito:%20${encodeURIComponent(bocadito.titulo)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-text-arrow"
              >
                Consultar Bocadito <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact-section" id="contacto">
    <div className="container">
      <div className="contact-card">
        <span className="section-label">Atención Personalizada</span>
        <h2 className="section-title">Planifiquemos tu Evento</h2>
        <div className="title-underline center"></div>
        <p className="contact-desc">
          Estamos listos para atender tus consultas, asesorarte con las cantidades ideales para tu evento y preparar una presentación inolvidable.
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
          <p>¿Prefieres una respuesta inmediata?</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large pulse">
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <img src={logoImg} alt="Dulce Encanto" className="footer-logo" />
        <p className="footer-tagline">Pequeños bocados, grandes momentos.</p>
        <p className="footer-text">
          Dedicados al diseño y elaboración de la más fina repostería boutique para eventos sociales en toda Lima.
        </p>
      </div>
      <div className="footer-links">
        <h4>Enlaces Rápidos</h4>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Sobre Nosotros</a></li>
          <li><a href="#productos">Catálogo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div className="footer-info">
        <h4>Atención y Pedidos</h4>
        <p><strong>Lunes a Sábado:</strong></p>
        <p>09:00 AM — 07:00 PM</p>
        <div className="delivery-info">
          <span>🚚</span> Cobertura de entregas en Lima Metropolitana.
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
      <Contact />
      <Footer />
    </div>
  );
}