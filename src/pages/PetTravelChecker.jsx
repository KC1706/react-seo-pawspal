import React from 'react';

export default function PetTravelChecker() {
  return (
    <>
      {/*  NAV  */}
<section aria-label="Main navigation">
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
  </section>

{/*  BREADCRUMB  */}
<div className="breadcrumb">
  <div className="wrap">
    <ol className="bc">
      <li><a href="/">Home</a></li>
      <li><a href="/pet-passport">Pet Passport</a></li>
      <li>Travel Document Checker</li>
    </ol>
  </div>
</div>

{/*  HERO  */}
<section className="checker-hero">
  <div className="wrap checker-hero-inner">
    <div className="hero-badge">✈️ 190+ Countries — Live Pet Travel Rules</div>
    <h1>Pet Travel <em>Document Checker</em></h1>
    <p>Select your origin and destination country. Get the exact list of documents, vaccinations, and permits your pet needs — instantly. Updated for 2026.</p>

    {/*  CHECKER TOOL  */}
    <div className="checker-tool">
      <div className="checker-tool-header">
        <h2>🐾 Check Documents Required</h2>
        <p>Select source country, destination country, and pet type — we'll show you everything required.</p>
      </div>

      {/*  Pet type selector  */}
      <div style={{'marginBottom': '16px'}}>
        <div style={{'fontSize': '.8rem', 'fontWeight': '600', 'textTransform': 'uppercase', 'letterSpacing': '.07em', 'color': 'var(--slate)', 'marginBottom': '8px'}}>Pet Type</div>
        <div className="pet-type-row">
          <button className="pet-btn active" data-pet="dog" onClick="setPetType(this,'dog')">🐕 Dog</button>
          <button className="pet-btn" data-pet="cat" onClick="setPetType(this,'cat')">🐱 Cat</button>
          <button className="pet-btn" data-pet="bird" onClick="setPetType(this,'bird')">🐦 Bird</button>
          <button className="pet-btn" data-pet="rabbit" onClick="setPetType(this,'rabbit')">🐰 Rabbit</button>
          <button className="pet-btn" data-pet="other" onClick="setPetType(this,'other')">🐾 Other</button>
        </div>
      </div>

      <div className="checker-form">
        <div className="form-group">
          <label>From (Origin Country) <span id="src-flag" className="flag-preview"></span></label>
          <div className="select-wrap">
            <select id="src-country" onChange="updateFlag('src-flag', this.value)">
              <option value="">Select origin country…</option>
            </select>
          </div>
        </div>

        <button className="swap-btn" onClick="swapCountries()" title="Swap countries" aria-label="Swap origin and destination">⇄</button>

        <div className="form-group">
          <label>To (Destination Country) <span id="dst-flag" className="flag-preview"></span></label>
          <div className="select-wrap">
            <select id="dst-country" onChange="updateFlag('dst-flag', this.value)">
              <option value="">Select destination country…</option>
            </select>
          </div>
        </div>

        <button className="check-btn" onClick="checkDocs()" id="check-btn" disabled aria-label="Check required documents">
          🔍 Check Documents Required
        </button>
      </div>

      <div className="loading" id="loading">
        <span className="spinner"></span> Checking 2026 travel requirements…
      </div>

      {/*  RESULTS  */}
      <div className="results-panel" id="results"></div>
    </div>
  </div>
</section>

<div className="checker-note wrap" style={{'paddingTop': '16px'}}>
  ⚠ Requirements change. Always confirm with official government sources and your airline before travel.
  <a href="/pet-passport">Full Pet Passport Guide →</a>
</div>



{/*  BELOW THE FOLD — quick links + context  */}
<section className="section-sm" style={{'background': 'var(--white)'}}>
  <div className="wrap">
    <div style={{'textAlign': 'center', 'marginBottom': '32px'}}>
      <h2 style={{'color': 'var(--forest)'}}>Most Searched Routes from India</h2>
      <p className="mx">Quick-check the most common international pet travel destinations from India.</p>
    </div>
    <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(4,1fr)', 'gap': '14px'}} id="quick-routes">
      <button onClick="quickCheck('IN','GB')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇬🇧 India to UK</button>
      <button onClick="quickCheck('IN','US')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇺🇸 India to USA</button>
      <button onClick="quickCheck('IN','AU')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇦🇺 India to Australia</button>
      <button onClick="quickCheck('IN','DE')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇩🇪 India to Germany</button>
      <button onClick="quickCheck('IN','CA')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇨🇦 India to Canada</button>
      <button onClick="quickCheck('IN','AE')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇦🇪 India to UAE</button>
      <button onClick="quickCheck('IN','SG')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇸🇬 India to Singapore</button>
      <button onClick="quickCheck('IN','NZ')" style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}} onmouseover="this.style.background='var(--mist)'" onmouseout="this.style.background='var(--cream)'">🇮🇳→🇳🇿 India to New Zealand</button>
    </div>
  </div>
</section>



{/*  FOOTER NAV  */}
<section style={{'background': 'var(--forest)', 'padding': '40px 0'}}>
  <div className="wrap" style={{'textAlign': 'center'}}>
    <p style={{'color': 'rgba(255,255,255,.5)', 'fontSize': '.78rem', 'textTransform': 'uppercase', 'letterSpacing': '.09em', 'marginBottom': '16px'}}>Explore PAWID & Paws Pal Connect</p>
    <div style={{'display': 'flex', 'flexWrap': 'wrap', 'gap': '10px', 'justifyContent': 'center'}}>
      <a href="/" style={{'background': 'rgba(255,255,255,.08)', 'color': 'rgba(255,255,255,.8)', 'border': '1px solid rgba(255,255,255,.14)', 'padding': '8px 16px', 'borderRadius': '50px', 'fontSize': '.82rem'}}>🏠 Home</a>
      <a href="/petos" style={{'background': 'rgba(255,255,255,.08)', 'color': 'rgba(255,255,255,.8)', 'border': '1px solid rgba(255,255,255,.14)', 'padding': '8px 16px', 'borderRadius': '50px', 'fontSize': '.82rem'}}>🌐 PetOS</a>
      <a href="/pet-passport" style={{'background': 'rgba(255,255,255,.08)', 'color': 'rgba(255,255,255,.8)', 'border': '1px solid rgba(255,255,255,.14)', 'padding': '8px 16px', 'borderRadius': '50px', 'fontSize': '.82rem'}}>🛂 Pet Passport</a>
      <a href="/pet-digital-identity" style={{'background': 'rgba(255,255,255,.08)', 'color': 'rgba(255,255,255,.8)', 'border': '1px solid rgba(255,255,255,.14)', 'padding': '8px 16px', 'borderRadius': '50px', 'fontSize': '.82rem'}}>🪪 Pet Identity</a>
      <a href="/ai-vet" style={{'background': 'rgba(255,255,255,.08)', 'color': 'rgba(255,255,255,.8)', 'border': '1px solid rgba(255,255,255,.14)', 'padding': '8px 16px', 'borderRadius': '50px', 'fontSize': '.82rem'}}>🤖 AI Vet</a>
      <a href="/create-petid" style={{'background': 'rgba(245,200,122,.2)', 'color': 'var(--honey)', 'border': '1px solid rgba(245,200,122,.4)', 'padding': '8px 16px', 'borderRadius': '50px', 'fontSize': '.82rem', 'fontWeight': '600'}}>✨ Create PetID</a>
    </div>
  </div>
</section>

<nav className="links-section" aria-label="Site sections">
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
  </nav>

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
