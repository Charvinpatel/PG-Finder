// import { Mail, Phone, MapPin, House } from "lucide-react";
// import { Link } from "react-router-dom";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer text-white">
//       <div className="container">
//         <div className="footer-container">
//           {/* Logo + Description */}
//           <div className="footer-section">
//             <div className="footer-logo d-flex align-items-center">
//               <div className="logo-icon">
//                 <House size={24} style={{ color: "white" }} />
//               </div>
//               <h4 className="m-0 brand-name" style={{ color: "white" }}>
//                 PG Finder
//               </h4>
//             </div>
//             <p>
//               Find your perfect paying guest accommodation with ease. Safe,
//               verified, and comfortable stays for students and professionals.
//             </p>
//             <div className="social-icons">
//               <i className="fab fa-facebook-f" />
//               <i className="fab fa-twitter" />
//               <i className="fab fa-instagram" />
//               <i className="fab fa-linkedin-in" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="footer-section">
//             <h5>Quick Links</h5>
//             <ul>
//               <li>
//                 <Link to="/home">Home</Link>
//               </li>
//               <li>
//                 <Link to="/listings">PG Listings</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li>
//                 <Link to="/blog">Blog</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div className="footer-section">
//             <h5>Support</h5>
//             <ul>
//               <li>
//                 <Link to="/help">Help Center</Link>
//               </li>
//               <li>
//                 <Link to="/safety">Safety Guidelines</Link>
//               </li>
//               <li>
//                 <Link to="/terms">Terms of Service</Link>
//               </li>
//               <li>
//                 <Link to="/privacy">Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link to="/faq">FAQ</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact + Newsletter */}
//           <div className="footer-section">
//             <h5>Contact Us</h5>
//             <p>
//               <Phone size={16} /> +91 98765 43210
//             </p>
//             <p>
//               <Mail size={16} /> support@pgfinder.com
//             </p>
//             <p>
//               <MapPin size={16} /> 123 Tech Park, Ahmedabad, Gujarat
//             </p>
//             <h6>Subscribe to Newsletter</h6>
//             <div className="newsletter">
//               <input type="email" placeholder="Enter your email" />
//               <button>Subscribe</button>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>© 2025 PG Finder. All rights reserved.</p>
//           <div className="bottom-links">
//             <Link to="/terms">Terms</Link>
//             <Link to="/privacy">Privacy</Link>
//             <Link to="/cookies">Cookies</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Mail, Phone, MapPin, HomeIcon as House } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="footer-container">
          {/* Logo + Description - Same as Header */}
          <div className="footer-section">
            <div className="footer-logo d-flex align-items-center">
              <div className="logo-icon">
                <House size={24} style={{ color: "white" }} />
              </div>
              <h4 className="m-0 brand-name" style={{ color: "white" }}>
                PG Finder
              </h4>
            </div>
            <p>
              Find your perfect paying guest accommodation with ease. Safe,
              verified, and comfortable stays for students and professionals.
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
              <i className="fab fa-linkedin-in" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/listings">PG Listings</Link>
              </li>
              <li>
                <Link to="/saved">Saved PGs</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/safety">Safety Guidelines</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="footer-section">
            <h5>Contact Us</h5>
            <p>
              <Phone size={16} /> +91 98765 43210
            </p>
            <p>
              <Mail size={16} /> support@pgfinder.com
            </p>
            <p>
              <MapPin size={16} /> 123 Tech Park, Ahmedabad, Gujarat
            </p>
            <h6>Subscribe to Newsletter</h6>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 PG Finder. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
