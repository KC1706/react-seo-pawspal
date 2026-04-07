import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main navigation">
      <div className="wrap nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', boxSizing: 'border-box' }}>
        <Link to="/" className="nav-logo" aria-label="PawsPal Connect Home" style={{ display: 'flex', alignItems: 'center', flexShrink: '0', textDecoration: 'none' }}>
          <img src="/assets/logo-transparent.png" alt="PawsPal Logo" style={{ height: '32px', marginRight: '8px' }} />
          PawsPal<span>.</span>Connect
        </Link>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} role="list" style={{ alignItems: 'center', gap: '16px', listStyle: 'none', marginLeft: '24px', marginRight: 'auto', padding: '0' }}>
          <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/pet-identity/pet-digital-identity">Pet Identity</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/pet-health-records">Health Records</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/ai-vet">BharatPetGPT</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/pet-passport/pet-passport">Pet Passport</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/emergency-infrastructure">Emergency</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/blog/how-to-store-pet-health-records">Blog</Link></li>
        </ul>
        <a href="/pet-identity/pet-digital-identity#create-pawid" id="nav-btn" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 18px', background: '#144b36', color: '#ffffff', fontWeight: '600', borderRadius: '50px', textDecoration: 'none', fontSize: '0.95rem', marginLeft: '20px', flexShrink: '0', transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}>
          Create PetID Free &rarr;
        </a>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
