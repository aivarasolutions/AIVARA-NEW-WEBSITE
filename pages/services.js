import Head from 'next/head';
// Remove social media icons to simplify the build
// We'll use emoji icons instead

export default function Services() {
  return (
    <div className="container">
      <Head>
        <title>Our Services - Aivara Solutions</title>
        <meta name="description" content="Explore our AI-powered services including custom GPT solutions, chatbots, and AI website development" />
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

        <section className="page-header">
          <h1>Our <span className="highlight">Services</span></h1>
          <p>Discover how our AI solutions can transform your business</p>
        </section>

        <section className="services-detailed">
          <div className="service-item">
            <div className="service-content">
              <h2>Custom GPT Solutions</h2>
              <p>We create specialized GPT models tailored to your industry and business needs. Our custom GPTs can:</p>
              <ul>
                <li>Provide expert knowledge in your specific domain</li>
                <li>Automate customer support and sales inquiries</li>
                <li>Generate industry-specific content and insights</li>
                <li>Analyze data and provide actionable recommendations</li>
              </ul>
              <p>Each GPT is built with your brand voice and expertise, creating a powerful AI assistant that represents your business perfectly.</p>
            </div>
            <div className="service-image">
              <div className="placeholder-image">Custom GPT Solutions</div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-content">
              <h2>AI-Powered Websites</h2>
              <p>Our websites combine beautiful design with powerful AI capabilities:</p>
              <ul>
                <li>Intelligent chatbots that understand your visitors' needs</li>
                <li>Personalized content recommendations</li>
                <li>Dynamic pricing and product suggestions</li>
                <li>Automated lead qualification and nurturing</li>
              </ul>
              <p>We build responsive, fast-loading websites that not only look great but actively work to convert visitors into customers.</p>
            </div>
            <div className="service-image">
              <div className="placeholder-image">AI Websites</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <h2>AI Strategy Consulting</h2>
              <p>Not sure how AI can benefit your business? Our consulting services include:</p>
              <ul>
                <li>AI readiness assessment</li>
                <li>Custom AI implementation roadmap</li>
                <li>ROI analysis and business case development</li>
                <li>AI training and change management</li>
              </ul>
              <p>We help you identify the highest-impact AI opportunities for your business and create a clear path to implementation.</p>
            </div>
            <div className="service-image">
              <div className="placeholder-image">AI Strategy</div>
            </div>
          </div>
        </section>

        <section className="featured-gpts">
          <h2>Featured <span className="highlight">GPT Solutions</span></h2>
          <div className="gpt-cards">
            <div className="gpt-card">
              <h3>Marketing Genius AI</h3>
              <p>Your AI marketing expert that creates campaigns, content strategies, and social media plans.</p>
              <a href="https://chatgpt.com/g/g-680b665c99a08191b6b40908ebf68fe0-marketing-genius-ai" className="btn primary" target="_blank" rel="noopener noreferrer">Try It</a>
            </div>
            
            <div className="gpt-card">
              <h3>MusicBiz Pro AI</h3>
              <p>Specialized assistant for music industry professionals, artists, and producers.</p>
              <a href="https://chatgpt.com/g/g-680b62acead481919fbc50db2dc8b3e9-musicbiz-pro-ai" className="btn primary" target="_blank" rel="noopener noreferrer">Try It</a>
            </div>
            
            <div className="gpt-card">
              <h3>FreightGenius AI</h3>
              <p>Expert logistics and freight management assistant for shipping professionals.</p>
              <a href="https://chatgpt.com/g/g-67bff639b358819193665c8963bcc298-freightgenius-ai" className="btn primary" target="_blank" rel="noopener noreferrer">Try It</a>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your AI needs and goals.</p>
          <a href="/contact" className="btn primary">Contact Us</a>
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
        
        .page-header {
          background-color: #0047AB;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .highlight {
          color: #ff6b0e;
        }
        
        .services-detailed {
          padding: 4rem 2rem;
        }
        
        .service-item {
          display: flex;
          margin-bottom: 4rem;
          gap: 2rem;
          align-items: center;
        }
        
        .reverse {
          flex-direction: row-reverse;
        }
        
        .service-content {
          flex: 1;
        }
        
        .service-image {
          flex: 1;
          min-height: 300px;
        }
        
        .placeholder-image {
          background-color: #f0f0f0;
          height: 100%;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #666;
          font-weight: bold;
        }
        
        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #0047AB;
        }
        
        ul {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        li {
          margin-bottom: 0.5rem;
        }
        
        .featured-gpts {
          background-color: #f9f9f9;
          padding: 4rem 2rem;
          text-align: center;
        }
        
        .gpt-cards {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .gpt-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 2rem;
          width: 300px;
          transition: transform 0.3s;
        }
        
        .gpt-card:hover {
          transform: translateY(-5px);
        }
        
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s;
          margin-top: 1rem;
        }
        
        .primary {
          background-color: #ff6b0e;
          color: white;
        }
        
        .primary:hover {
          background-color: #e05d00;
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
          
          .service-item {
            flex-direction: column;
          }
          
          .reverse {
            flex-direction: column;
          }
          
          .footer-content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
