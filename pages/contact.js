import Head from 'next/head';
import { useState } from 'react';
// Remove social media icons to simplify the build
// We'll use emoji icons instead

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Contact Us - Aivara Solutions</title>
        <meta name="description" content="Get in touch with Aivara Solutions for AI-powered business solutions" />
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
          <h1>Contact <span className="highlight">Us</span></h1>
          <p>Get in touch to discuss how we can help your business leverage AI</p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>Our Contact Information</h2>
            <div className="info-item">
              <strong>Email:</strong>
              <p>Kevin@AivaraSolutions.com</p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p>+1 310-400-0032</p>
            </div>
            <div className="info-item">
              <strong>Follow Us:</strong>
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

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            {formStatus.submitted && formStatus.success ? (
              <div className="success-message">
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>
                
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            )}
          </div>
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
        
        .contact-content {
          display: flex;
          padding: 4rem 2rem;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-info, .contact-form {
          flex: 1;
        }
        
        h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #0047AB;
        }
        
        .info-item {
          margin-bottom: 1.5rem;
        }
        
        .info-item strong {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          font-size: 1.5rem;
        }
        
        .social-icons a {
          color: #0047AB;
          transition: color 0.3s;
        }
        
        .social-icons a:hover {
          color: #ff6b0e;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        
        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
        }
        
        textarea {
          resize: vertical;
        }
        
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }
        
        .primary {
          background-color: #ff6b0e;
          color: white;
        }
        
        .primary:hover {
          background-color: #e05d00;
        }
        
        .success-message {
          padding: 1rem;
          background-color: #d4edda;
          color: #155724;
          border-radius: 4px;
          margin-bottom: 1rem;
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
          
          .contact-content {
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
