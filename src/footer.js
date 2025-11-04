import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      


      <div className="footer">
        <div className="footer-container">
          <div className="top">
            <div className="logo">
              <div className="logo-inner">
                <img src="/images/logo.png" alt="logo" />
                <div className="social-media">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/agapegarden300/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                  >
                    <img src="/motion/fb.png" alt="Facebook" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/agap_egarden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                  >
                    <img src="/motion/insta.png" alt="Instagram" />
                  </a>
                </div>



              </div>
            </div>

            <div className="quick-links">
              <p>📌Quick Links</p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
              <a href="/About">About us</a>
              <Link to="/Features">Features</Link>
              <Link to="/Testimonial">Testimonial</Link>
              <Link to="/Gallery">Gallery</Link>
              
            </div>

            
            <div className="address">
  <h5>Address</h5>
  <p>
    No 301, 12th Street, Viduthalai Nagar, Chennai - 600091 (Behind Nilgiris)
  </p>

  <h5>Timings</h5>
  <p>
    Mon - Fri 8:00 am - 8:00 pm
    <br />
    Sat - Sun Closed
    <br />
   Phone:
    <span >96000 51683</span>
    <br />
   
    <a href="mailto:agapegarden300@gmail.com" style={{ color: '#000000ff', fontWeight: 'bold' }}>
      agapegarden300@gmail.com
    </a>
  </p>
</div>
          </div>

          <div className="bottom">
            <div className="footer-line"></div>
            <p>Copyright © Agape Garden. All rights reserved.</p>
          </div>

          <div className="map-container">
            <a
              href="https://www.google.com/maps/place/Agape+Garden+Play+School+%26+Day+Care+Centre/@12.9472781,80.1969516,17z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="footer-map">
                <img src="/images/map.png" alt="Map" className="map-image" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
