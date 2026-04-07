import React from 'react';

export default function Bangalore() {
  return (
    <>
      {/*  NAV  */}
<div id="navbar"></div>

  {/*  HERO  */}
  <header className="hero">
    <div className="wrap g2">
      <div className="hero-content">
        <div className="hero-tag" style={{'background': 'rgba(255, 255, 255, .12)', 'padding': '6px 16px', 'borderRadius': '50px', 'fontSize': '.82rem', 'fontWeight': '600', 'color': 'var(--white)', 'borderColor': '#a5b4fc', 'marginBottom': '14px', 'display': 'inline-block'}}>CITY INFRASTRUCTURE : BLR</div>
        <h1>The Ultimate Network of Verified Pet Services in Bangalore (Bengaluru)</h1>
        <p className="lead">From premium vet clinics in Indiranagar to luxury pet hostels in Whitefield — find and book directly with Bangalore's top-rated PawsPal certified pet professionals.</p>
        <div style={{'display': 'flex', 'gap': '14px', 'marginTop': '30px'}}>
          <a href="#" className="btn btn-amber">Explore BLR Directory →</a>
        </div>
      </div>
      <div style={{'borderRadius': '20px', 'overflow': 'hidden', 'border': '1px solid rgba(26,58,42,.08)', 'boxShadow': '0 8px 40px rgba(26, 58, 42, .12)', 'display': 'flex', 'aspectRatio': '4/3'}}><img src="/assets/seo_bangalore.png" alt="PawsPal Module" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} /></div>
    </div>
  </header>

  {/*  FEATURES  */}
  <section className="section" id="features">
    <div className="wrap">
      <div style={{'textAlign': 'center', 'marginBottom': '56px'}}>
        <span className="feature-label">Locally Verified</span>
        <h2>Only the Best Providers in Bangalore</h2>
        <p style={{'margin': '0 auto'}}>Unlike random directory sites, every provider on PawsPal is rigorously audited, and fully integrated with your PAWID app for seamless data sharing and fast booking.</p>
      </div>

      <div className="g3">
        <div className="card">
          <div className="card-icon">🏥</div>
          <h3>Top-Rated Vet Clinics</h3>
          <p>Instantly book appointments with EMR-integrated clinics in Koramangala, Indiranagar, and HSR Layout. Your pet's records sync automatically.</p>
        </div>
        <div className="card">
          <div className="card-icon">🏨</div>
          <h3>Verified Pet Boarding & Hotels</h3>
          <p>Going out of town? Book luxury, cage-free pet hostels offering 24/7 video updates mapped exactly to your precise Bangalore location.</p>
        </div>
        <div className="card">
          <div className="card-icon">🚑</div>
          <h3>24/7 Emergency Hubs</h3>
          <p>Pinpoint the fastest route to Bangalore's open, fully-equipped animal hospitals covering severe trauma, poisoning, and overnight triage.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  FOOTER  */}
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
