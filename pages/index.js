import Head from 'next/head';
// Remove social media icons to simplify the build
// We'll use emoji icons instead

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aivara Solutions - AI-Powered Business Solutions</title>
        <meta name="description" content="Custom AI solutions, chatbots, and AI-powered websites for businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <div className="logo-container">
            <img src="/logo.png" alt="Aivara Solutions Logo" className="logo" />
          </div>
          <nav>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section className="hero">
          <h1>Making AI <span className="highlight">Simple</span> and <span className="highlight">Powerful</span></h1>
          <p>Aivara Solutions helps businesses leverage AI technology with custom chatbots, 
            AI-powered websites, and specialized GPT solutions that drive results.</p>
          <div className="cta-buttons">
            <a href="/services" className="btn primary">Explore Our Services</a>
            <a href="/contact" className="btn secondary">Contact Us</a>
          </div>
        </section>

        <section className="services">
          <h2>Our <span className="highlight">AI Services</span></h2>
          
          <div className="service-cards">
            <div className="card">
              <div className="icon">💬</div>
              <h3>Custom GPT Chatbots</h3>
              <p>Specialized AI assistants designed for your specific business needs, from customer service to sales support.</p>
            </div>
            
            <div className="card">
              <div className="icon">🖥️</div>
              <h3>AI-Powered Websites</h3>
              <p>Modern, responsive websites with integrated AI features that engage visitors and convert leads.</p>
            </div>
            
            <div className="card">
              <div className="icon">📊</div>
              <h3>AI Strategy Consulting</h3>
              <p>Expert guidance on implementing AI solutions that align with your business goals and drive ROI.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Contact us today to discuss your AI needs and goals.</p>
          <a href="/contact" className="btn primary">Get Started</a>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Aivara Solutions Logo" className="logo-small" />
            <p>AI-Powered Business Solutions</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: Kevin@AivaraSolutions.com</p>
            <p>Phone: +1 310-400-0032</p>
            
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1F3GADmDyn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                📘 Facebook
              </a>
              <a href="https://www.instagram.com/aivarasolutions" target="_blank" rel="noopener noreferrer">
                📸 Instagram
              </a>
              <a href="https://www.linkedin.com/company/aivara-solutions-llc/" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Aivara Solutions. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: Arial, sans-serif;
        }
        
        main {
          flex: 1;
        }
        
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .logo {
          height: 60px;
          width: auto;
        }
        
        .logo-small {
          height: 40px;
          width: auto;
        }
        
        nav {
          display: flex;
          gap: 2rem;
        }
        
        nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }
        
        nav a:hover {
          color: #ff6b0e;
        }
        
        .hero {
          background-color: #0047AB;
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .highlight {
          color: #ff6b0e;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s;
        }
        
        .primary {
          background-color: #ff6b0e;
          color: white;
        }
        
        .primary:hover {
          background-color: #e05d00;
        }
        
        .secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .secondary:hover {
          background-color: rgba(255,255,255,0.1);
        }
        
        .services {
          padding: 4rem 2rem;
          text-align: center;
        }
        
        h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        
        .service-cards {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 2rem;
          width: 300px;
          transition: transform 0.3s;
        }
        
        .card:hover {
          transform: translateY(-5px);
        }
        
        .icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .cta {
          background-color: #0047AB;
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }
        
        footer {
          background-color: #333;
          color: white;
          padding: 2rem;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-logo, .footer-links, .footer-contact {
          flex: 1;
          min-width: 200px;
        }
        
        .footer-links a {
          display: block;
          color: #ccc;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: #ff6b0e;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          font-size: 1.5rem;
        }
        
        .social-icons a {
          color: white;
          transition: color 0.3s;
        }
        
        .social-icons a:hover {
          color: #ff6b0e;
        }
        
        .copyright {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid #555;
        }
        
        @media (max-width: 768px) {
          header {
            flex-direction: column;
            gap: 1rem;
          }
          
          .service-cards {
            flex-direction: column;
            align-items: center;
          }
          
          .footer-content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
