import React from 'react';

export default function PetMarketplace() {
  return (
    <>
      {/*  NAV  */}
<div id="navbar"></div>

  {/*  HERO  */}
  <header className="hero">
    <div className="wrap g2">
      <div className="hero-content">
        <div className="hero-tag" style={{'background': 'rgba(255, 255, 255, .12)', 'padding': '6px 16px', 'borderRadius': '50px', 'fontSize': '.82rem', 'fontWeight': '600', 'color': 'var(--white)', 'borderColor': '#fef08a', 'marginBottom': '14px', 'display': 'inline-block'}}>PAWSPAL MARKETPLACE</div>
        <h1>The Curated Marketplace for the Global Pet Economy</h1>
        <p className="lead">Integrated with your pet's PAWID, our marketplace automatically filters and recommends verified pet nutrition, premium accessories, and medications suitable for your pet's specific breed and health state.</p>
        <div style={{'display': 'flex', 'gap': '14px', 'marginTop': '30px'}} className="btn-wrap">
          <a href="#" className="btn btn-amber">Enter Marketplace →</a>
          <a href="#features" className="btn btn-ghost-w">View PawsPal Perks</a>
        </div>
      </div>
      <div style={{'borderRadius': '20px', 'overflow': 'hidden', 'border': '1px solid rgba(26,58,42,.08)', 'boxShadow': '0 8px 40px rgba(26, 58, 42, .12)', 'display': 'flex', 'aspectRatio': '4/3'}}><img src="/assets/seo_marketplace.png" alt="PawsPal Module" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} /></div>
    </div>
  </header>

  {/*  FEATURES  */}
  <section className="section" id="features">
    <div className="wrap">
      <div style={{'textAlign': 'center', 'marginBottom': '56px'}}>
        <span className="feature-label">Smart Shopping</span>
        <h2>Health-Driven Commerce</h2>
        <p style={{'margin': '0 auto'}}>By mapping your pet's EMR records against our catalogue, we guarantee you only see products that are 100% safe and healthy for your companion.</p>
      </div>

      <div className="g3">
        <div className="card">
          <div className="card-icon">🥩</div>
          <h3>Premium Nutrition Network</h3>
          <p>Access high-quality, vet-approved kibbles, raw diets, and dietary supplements sourced strictly from authenticated D2C pet brands.</p>
        </div>
        <div className="card">
          <div className="card-icon">🛡️</div>
          <h3>Verified Seller Network</h3>
          <p>We eliminate counterfeit products. Every seller on the PawsPal connect marketplace undergoes rigorous business and inventory vetting.</p>
        </div>
        <div className="card">
          <div className="card-icon">🪙</div>
          <h3>PAWID-Linked Loyalty</h3>
          <p>Every purchase accrues PawsPal points directly into your pet's digital wallet, redeemable for AI Vet sessions or emergency consultations.</p>
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
