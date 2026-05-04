import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-watermark">STREAMHUB</div>
      
      <div className="footer-bento">
        {/* Branding Tile */}
        <div className="footer-tile branding-tile">
          <h2 className="logo" style={{ marginBottom: '1.5rem' }}>StreamHub</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Experience the future of streaming with AI-powered discovery and unlimited cinematic content.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">📸</a>
            <a href="#" className="social-icon">▶</a>
            <a href="#" className="social-icon">🐦</a>
          </div>
        </div>

        {/* Explore Tile */}
        <div className="footer-tile">
          <h4>Explore</h4>
          <div className="footer-links-col">
            <Link to="/" className="footer-link-item">Home</Link>
            <Link to="/movies" className="footer-link-item">Movies</Link>
            <Link to="/web-series" className="footer-link-item">Web Series</Link>
            <Link to="/trending" className="footer-link-item">Trending Now</Link>
          </div>
        </div>

        {/* Support Tile */}
        <div className="footer-tile">
          <h4>Support</h4>
          <div className="footer-links-col">
            <a className="footer-link-item">Help Center</a>
            <a className="footer-link-item">Terms of Service</a>
            <a className="footer-link-item">Privacy Policy</a>
            <a className="footer-link-item">Corporate Info</a>
          </div>
        </div>

        {/* Newsletter Tile */}
        <div className="footer-tile newsletter-tile">
          <h4>Join the Club</h4>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            Get the latest cinematic updates and AI-picked recommendations.
          </p>
          <div className="newsletter-box">
            <input type="email" placeholder="Your email address" className="newsletter-input" />
            <button className="btn btn-primary" style={{ width: '100%', padding: '0.8rem' }}>Subscribe Now</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 StreamHub Inc. All rights reserved.</p>
        <p>Crafted for Cinephiles</p>
      </div>
    </footer>
  );
}

export default Footer;
