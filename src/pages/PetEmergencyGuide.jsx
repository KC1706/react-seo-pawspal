import React from 'react';

export default function PetEmergencyGuide() {
  return (
    <>
      <div id="navbar"></div>
  
  <header className="hero">
    <div className="wrap g2">
      <div className="hero-content">
        <div className="hero-tag" style={{'background': 'rgba(255, 255, 255, .12)', 'padding': '6px 16px', 'borderRadius': '50px', 'fontSize': '.82rem', 'fontWeight': '600', 'color': 'var(--honey)', 'marginBottom': '14px', 'display': 'inline-block'}}>PET CARE GUIDE</div>
        <h1>Pet Emergency Guide: Triage and Action Steps</h1>
      </div>
      <div style={{'borderRadius': '20px', 'overflow': 'hidden', 'border': '1px solid rgba(26,58,42,.08)', 'boxShadow': '0 8px 40px rgba(26, 58, 42, .12)', 'display': 'flex', 'aspectRatio': '4/3'}}>
         <img src="/assets/blog_emergency.png" alt="PawsPal Essential Guide" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} />
      </div>
    </div>
  </header>

  <main>
    <div className="wrap"><div className="blog-container"><article>
      <span className="meta-tag" style={{'background': '#fecaca'}}>Emergency Protocol</span>
      
      
      <p>Every pet owner dreads the moment an emergency strikes. Whether it's the ingestion of toxic chocolate, a sudden collapse, or severe trauma, knowing exactly how to respond saves lives.</p>
      
      <h2>Step 1: AI Prompting for Immediate First Aid</h2>
      <p>When panic sets in, searching Google for answers is too slow. Instead, use <a href="/ai-vet">BharatPetGPT</a>. Type exactly what happened (e.g., "My 12kg Beagle just ate a blister pack of Ibuprofen"). Because BharatPetGPT is linked to your pet's EMR, it instantly factors in their precise weight and age, outputting critical first-aid instructions before you even reach the clinic.</p>

      <h2>Step 2: Emergency GPS Locator</h2>
      <p>Not all clinics are equipped for overnight emergencies. Use the <a href="/emergency-infrastructure">PAWID Emergency Infrastructure</a> to instantly reveal the nearest verified 24/7 veterinary hospital on your map.</p>

      <h2>Toxic Foods to Avoid</h2>
      <ul>
        <li>Grapes and Raisins (Severe kidney failure)</li>
        <li>Xylitol (Found in sugar-free gum, causes immediate hypoglycemia)</li>
        <li>Onions and Garlic (Red blood cell destruction)</li>
      </ul>

      <p>Don't wait for an emergency. Establish your pet's digital health record today so critical data is always available on-tap when the worst happens.</p>
    </article></div></div>
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
