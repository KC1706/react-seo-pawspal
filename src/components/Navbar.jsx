import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
// prevent bg scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <nav aria-label="Main navigation">
      <div
        className="wrap nav-inner"
        style={{
          boxSizing: "border-box",
        }}
      >
        <Link
          to="/"
          className="nav-logo"
          aria-label="PawsPal Connect Home"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: "0",
            textDecoration: "none",
          }}
        >
          <img
            src="/assets/logo-transparent.png"
            alt="PawsPal Logo"
            style={{ height: "32px", marginRight: "8px" }}
          />
          PawsPal Connect
        </Link>

        <ul className={`nav-links ${isOpen ? "active" : ""}`} role="list">
          <li>
            <Link onClick={() => setIsOpen(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="/pet-identity/pet-digital-identity"
            >
              Pet Identity
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/pet-health-records">
              Health Records
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/ai-vet">
              BharatPetGPT
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="/pet-passport/pet-passport"
            >
              Pet Passport
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="/emergency-infrastructure"
            >
              Emergency
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              to="/blog/how-to-store-pet-health-records"
            >
              Blog
            </Link>
          </li>
          <div className="mobile-wrapper">
            <li className="mobile-auth">
              <a
                href="https://dev.pawspalconnect.com/login"
                onClick={() => setIsOpen(false)}
                className="mobile-btn outline"
              >
                Login
              </a>
            </li>
            <li className="mobile-auth">
              <a
                href="/pet-identity/pet-digital-identity#create-pawid"
                onClick={() => setIsOpen(false)}
                className="mobile-btn primary"
              >
                Sign Up (Create PetID Free →)
              </a>
            </li>
          </div>
        </ul>

        <div
          className="flex"
          style={{
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
          }}
        >
          {/* Login */}
          <Link
            to="https://dev.pawspalconnect.com/login"
            className="btn btn-outline hover:text-white text-[#144b36]"
            style={{
              padding: "8px 16px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "500",
              border: "1px solid #144b36",
              whiteSpace: "nowrap",
            }}
          >
            Login
          </Link>

          {/* Sign Up */}
          <a
            href="/pet-identity/pet-digital-identity#create-pawid"
            id="nav-btn"
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 18px",
              background: "#144b36",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            Sign Up (Create PetID Free →)
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
}
