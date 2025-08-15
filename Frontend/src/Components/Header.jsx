// import { House, Heart, Menu, Bell, X } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [activeButton, setActiveButton] = useState("signup");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="navbar header shadow-sm p-2 p-sm-3 mb-2 bg-white">
//       <div className="container d-flex justify-content-between align-items-center">
//         {/* Logo */}
//         <div className="d-flex logo align-items-center">
//           <div className="logo-icon me-2">
//             <House size={24} style={{ color: "white" }} />
//           </div>
//           <h4 className="m-0 brand-name">PG Finder</h4>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="d-lg-none btn btn-outline-secondary ms-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle navigation"
//         >
//           {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>

//         {/* Desktop Menu */}
//         <div className="menuItems d-none d-lg-flex gap-4">
//           <Link to="/home" className="nav-link d-flex align-items-center gap-2">
//             <House size={18} /> <span>Home</span>
//           </Link>
//           <Link
//             to="/listings"
//             className="nav-link d-flex align-items-center gap-2"
//           >
//             <Menu size={18} /> <span>Listings</span>
//           </Link>
//           <Link
//             to="/saved"
//             className="nav-link d-flex align-items-center gap-2"
//           >
//             <Heart size={18} /> <span>Saved</span>
//           </Link>
//         </div>

//         {/* Desktop Actions */}
//         <div className="d-none d-lg-flex align-items-center gap-3">
//           <Link to="/notification" className="notification-icon">
//             <Bell size={20} />
//           </Link>
//           <button
//             className={`btn fw-medium header-btn ${
//               activeButton === "login" ? "active-btn" : ""
//             }`}
//             onClick={() => setActiveButton("login")}
//           >
//             Login
//           </button>
//           <button
//             className={`btn fw-medium header-btn ${
//               activeButton === "signup" ? "active-btn" : ""
//             }`}
//             onClick={() => setActiveButton("signup")}
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="d-lg-none bg-white p-3 shadow-sm">
//           <div className="container d-flex flex-column gap-3">
//             <Link
//               to="/home"
//               className="nav-link d-flex align-items-center gap-2"
//             >
//               <House size={18} /> Home
//             </Link>
//             <Link
//               to="/listings"
//               className="nav-link d-flex align-items-center gap-2"
//             >
//               <Menu size={18} /> Listings
//             </Link>
//             <Link
//               to="/saved"
//               className="nav-link d-flex align-items-center gap-2"
//             >
//               <Heart size={18} /> Saved
//             </Link>
//             <div className="d-flex gap-2 mt-2">
//               <button
//                 className={`btn btn-sm flex-grow-1 fw-medium ${
//                   activeButton === "login" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveButton("login")}
//               >
//                 Login
//               </button>
//               <button
//                 className={`btn btn-sm flex-grow-1 fw-medium ${
//                   activeButton === "signup" ? "active-btn" : ""
//                 }`}
//                 onClick={() => setActiveButton("signup")}
//               >
//                 Sign Up
//               </button>
//             </div>
//             <Link
//               to="/notification"
//               className="nav-link d-flex align-items-center gap-2"
//             >
//               <Bell size={18} /> Notifications
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;

"use client";

import { HomeIcon as House, Heart, Menu, Bell, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeButton, setActiveButton] = useState("signup");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = (type) => {
    setActiveButton(type);
    if (type === "login") {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveButton("signup");
  };

  return (
    <nav className="navbar header shadow-sm p-2 p-sm-3 mb-2 bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo - Same as Footer */}
        <Link
          to="/"
          className="d-flex logo align-items-center text-decoration-none"
        >
          <div className="logo-icon me-2">
            <House size={24} style={{ color: "white" }} />
          </div>
          <h4 className="m-0 brand-name">PG Finder</h4>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="d-lg-none btn btn-outline-secondary ms-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Menu */}
        <div className="menuItems d-none d-lg-flex gap-4">
          <Link to="/" className="nav-link d-flex align-items-center gap-2">
            <House size={18} /> <span>Home</span>
          </Link>
          <Link
            to="/listings"
            className="nav-link d-flex align-items-center gap-2"
          >
            <Menu size={18} /> <span>Listings</span>
          </Link>
          <Link
            to="/saved"
            className="nav-link d-flex align-items-center gap-2"
          >
            <Heart size={18} /> <span>Saved</span>
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <Link to="/notifications" className="notification-icon">
            <Bell size={20} />
          </Link>

          {isLoggedIn ? (
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2"
                type="button"
                data-bs-toggle="dropdown"
              >
                <User size={18} />
                Profile
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/saved">
                    Saved PGs
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button
                className={`btn fw-medium header-btn ${
                  activeButton === "login" ? "active-btn" : ""
                }`}
                onClick={() => handleAuthClick("login")}
              >
                Login
              </button>
              <button
                className={`btn fw-medium header-btn ${
                  activeButton === "signup" ? "active-btn" : ""
                }`}
                onClick={() => handleAuthClick("signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="d-lg-none bg-white p-3 shadow-sm">
          <div className="container d-flex flex-column gap-3">
            <Link
              to="/"
              className="nav-link d-flex align-items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <House size={18} /> Home
            </Link>
            <Link
              to="/listings"
              className="nav-link d-flex align-items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Menu size={18} /> Listings
            </Link>
            <Link
              to="/saved"
              className="nav-link d-flex align-items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart size={18} /> Saved
            </Link>
            <Link
              to="/notifications"
              className="nav-link d-flex align-items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Bell size={18} /> Notifications
            </Link>

            {!isLoggedIn && (
              <div className="d-flex gap-2 mt-2">
                <button
                  className={`btn btn-sm flex-grow-1 fw-medium ${
                    activeButton === "login" ? "active-btn" : ""
                  }`}
                  onClick={() => {
                    handleAuthClick("login");
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </button>
                <button
                  className={`btn btn-sm flex-grow-1 fw-medium ${
                    activeButton === "signup" ? "active-btn" : ""
                  }`}
                  onClick={() => {
                    handleAuthClick("signup");
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
