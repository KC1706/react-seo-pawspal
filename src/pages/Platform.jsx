import React from 'react';

export default function Platform() {
  return (
    <>
      <nav aria-label="Main navigation">
    <div className="wrap nav-inner" style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '100%', 'boxSizing': 'border-box'}}>
      <a href="/" className="nav-logo" aria-label="PawsPal Connect Home" style={{'display': 'flex', 'alignItems': 'center', 'flexShrink': '0'}}><img src="/assets/logo-transparent.png" alt="PawsPal Logo" style={{'height': '32px', 'marginRight': '8px'}} />PawsPal<span>.</span>Connect</a>
      <ul className="nav-links" role="list" style={{'display': 'flex', 'alignItems': 'center', 'gap': '16px', 'listStyle': 'none', 'marginLeft': '24px', 'marginRight': 'auto', 'padding': '0'}}>
        <li><a href="/">Home</a></li>
        <li><a href="/pet-identity/pet-digital-identity">Pet Identity</a></li>
        <li><a href="/pet-health-records">Health Records</a></li>
        <li><a href="/ai-vet">AI Vet</a></li>
        <li><a href="/pet-passport/pet-passport">Pet Passport</a></li>
        <li><a href="/emergency-infrastructure">Emergency</a></li>
        <li><a href="/blog/how-to-store-pet-health-records">Blog</a></li>
      </ul>
      <a href="/pet-identity/pet-digital-identity#create-pawid" className="btn btn-primary" style={{'display': 'inline-flex', 'alignItems': 'center', 'justifyContent': 'center', 'padding': '10px 18px', 'background': '#144b36', 'color': '#ffffff !important', 'fontWeight': '600', 'borderRadius': '50px', 'textDecoration': 'none', 'fontSize': '0.95rem', 'marginLeft': '20px', 'flexShrink': '0', 'transition': 'all 0.3s ease', 'whiteSpace': 'nowrap'}}>Create PetID Free &rarr;</a>
    </div>
  </nav>
  

  {/*  ✅ BREADCRUMB  */}
  <div className="wrap" style={{'paddingTop': '20px'}}>
    <ol className="bc-list" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
        <meta itemprop="position" content="1" />
      </li>
      
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <span itemprop="name">Platform Ecosystem</span>
        <meta itemprop="position" content="2" />
      </li>
    </ol>
  </div>

  
  <main>
    {/*  HERO  */}
    <section className="hero" style={{'padding': '60px 0'}}>
      <div className="wrap grid-2">
        <div className="hero-content">
          <div className="hero-tag">PawsPal Platform</div>
          <h1>One App for <em>Everything</em> Pet.</h1>
          <p className="lead">Explore the complete ecosystem. From PAWID identity scanning to e-commerce and veterinary clinic tools, PawsPal Connect unites the fragmented pet care industry into one seamless experience.</p>
          <div className="hero-actions">
            <a href="#" className="btn btn-amber">Explore PAWID →</a>
          </div>
        </div>
      </div>
    </section>

    {/*  FEATURES OVERVIEW  */}
    <section className="section records-section">
      <div className="wrap">
        <div className="section-head" style={{'textAlign': 'center', 'marginBottom': '40px'}}>
          <div className="feature-label">Connecting the Dots</div>
          <h2>The Ecosystem</h2>
        </div>
        
        <div className="records-grid">
          
          <div className="record-item">
            <h4>🪪 PAWID Identity</h4>
            <p>The core digital identity tying everything together.</p>
          </div>
          <div className="record-item">
            <h4>🏥 VetOS</h4>
            <p>B2B software powering the clinics that treat your pets.</p>
          </div>
          <div className="record-item">
            <h4>🛒 Marketplace</h4>
            <p>Unified commerce powered by health data algorithms.</p>
          </div>
          <div className="record-item">
            <h4>🤖 BharatPetGPT</h4>
            <p>The intelligence layer analyzing millions of data points.</p>
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
