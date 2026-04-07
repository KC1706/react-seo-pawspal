import React from 'react';

export default function Pawid() {
  return (
    <>
      <div id="navbar"></div>
  

  {/*  ✅ BREADCRUMB  */}
  <div className="wrap" style={{'paddingTop': '20px'}}>
    <ol className="bc-list" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
        <meta itemprop="position" content="1" />
      </li>
      
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <span itemprop="name">PAWID Identity Engine</span>
        <meta itemprop="position" content="2" />
      </li>
    </ol>
  </div>

  
  <main>
    {/*  HERO  */}
    <section className="hero" style={{'padding': '60px 0'}}>
      <div className="wrap grid-2">
        <div className="hero-content">
          <div className="hero-tag">PAWID Engine</div>
          <h1>The Aadhaar for <em>Pets</em>.</h1>
          <p className="lead">PAWID is a 12-digit unique identifier. It is the permanent anchor for ownership, health records, microchips, and travel documents, eliminating lost records and abandoned pets.</p>
          <div className="hero-actions">
            <a href="#" className="btn btn-amber">Register PAWID →</a>
          </div>
        </div>
      </div>
    </section>

    {/*  FEATURES OVERVIEW  */}
    <section className="section records-section">
      <div className="wrap">
        <div className="section-head" style={{'textAlign': 'center', 'marginBottom': '40px'}}>
          <div className="feature-label">Immutable & Permanent</div>
          <h2>Secure Identity</h2>
        </div>
        
        <div className="records-grid">
          
          <div className="record-item">
            <h4>🆔 Ownership Proof</h4>
            <p>Legally verifiable proof of pet ownership on a secure ledger.</p>
          </div>
          <div className="record-item">
            <h4>🔍 Lost & Found</h4>
            <p>Scan a QR code or microchip to instantly contact the owner.</p>
          </div>
          <div className="record-item">
            <h4>🔐 Privacy Control</h4>
            <p>You decide which vets or borders get to view the medical history.</p>
          </div>
          <div className="record-item">
            <h4>📜 Govt Compliant</h4>
            <p>Built to conform with local municipality pet registration rules.</p>
          </div>
        </div>
      </div>
    </section>
  </main>


  <section className="links-section" aria-label="Site sections">
    <div className="wrap">
      <p
        style={{'color': 'rgba(255,255,255,.5)', 'fontSize': '.8rem', 'textAlign': 'center', 'textTransform': 'uppercase', 'letterSpacing': '.08em', 'marginBottom': '20px'}}>
        Explore the PawsPal Ecosystem</p>
      <div className="links-inner">
        <a href="/pet-identity/pet-digital-identity" className="link-pill">Pet Digital Identity</a>
        <a href="/pet-health-records" className="link-pill">Pet Health Records</a>
        <a href="/ai-vet" className="link-pill">AI Vet Consultation</a>
        <a href="/pet-passport/pet-passport" className="link-pill">Pet Passport India</a>
        <a href="/emergency-infrastructure" className="link-pill">Pet Emergency Services</a>
        <a href="/vet-software" className="link-pill">Veterinary Software (VetOS)</a>
        <a href="/pet-marketplace" className="link-pill">Pet Marketplace</a>
        <a href="/pet-adoption" className="link-pill">Pet Adoption Platform</a>
        <a href="/city/bangalore" className="link-pill">Pet Services Bangalore</a>
        <a href="/blog/how-to-store-pet-health-records" className="link-pill">Store Pet Records Guide</a>
        <a href="/blog/best-pet-care-app-india" className="link-pill">Best Pet Apps India 2026</a>
        <a href="/blog/pet-emergency-guide" className="link-pill">Pet Emergency Guide</a>
        <a href="/blog/dog-health-tracking" className="link-pill">Dog Health Tracking</a>
      </div>
    </div>
  </section>

  {/*  ✅ FOOTER  */}
  <footer role="contentinfo">
    <div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">PawsPal<span>.</span>Connect</div>
          <p>India's First Pet Operating System — giving every pet a permanent digital identity, intelligent health
            management, and emergency care readiness.</p>
          <p style={{'marginTop': '12px', 'fontSize': '.82rem'}}>© 2026 PawsPal Connect Pvt. Ltd. · Bengaluru, India</p>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="/pawid/pawid">PAWID Overview</a></li>
            <li><a href="/pet-identity/pet-digital-identity">Pet Digital Identity</a></li>
            <li><a href="/pet-health-records">Health Records</a></li>
            <li><a href="/ai-vet">AI Vet</a></li>
            <li><a href="/pet-passport/pet-passport">Pet Passport</a></li>
            <li><a href="/emergency-infrastructure">Emergency Services</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>For Vets</h4>
          <ul>
            <li><a href="/vet-software">VetOS Software</a></li>
            <li><a href="/vet-software#join">Join as a Vet</a></li>
            <li><a href="/vet-software#community">Vet Community</a></li>
            <li><a href="/vet-software#resources">Clinical Resources</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Learn</h4>
          <ul>
            <li><a href="/blog/how-to-store-pet-health-records">Pet Care Blog</a></li>
            <li><a href="/blog/pet-emergency-guide">Emergency Guide</a></li>
            <li><a href="/blog/dog-health-tracking">Dog Health Tracking</a></li>
            <li><a href="/pet-os/pet-os">What is PetOS?</a></li>
            <li><a href="/platform/platform">About Us</a></li>
            <li><a href="/platform/platform#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Built with ❤️ for India's 50 million pets</span>
        <span>
          <a href="/#privacy" style={{'color': 'rgba(255,255,255,.4)'}}>Privacy</a> ·
          <a href="/#terms" style={{'color': 'rgba(255,255,255,.4)'}}>Terms</a> ·
          <a href="/sitemap.xml" style={{'color': 'rgba(255,255,255,.4)'}}>Sitemap</a>
        </span>
      </div>
    </div>
  </footer>




    </>
  );
}
