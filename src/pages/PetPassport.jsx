import React from 'react';

export default function PetPassport() {
  return (
    <>
      {/*  ══ NAV ══  */}
  <div id="navbar"></div>
  {/*  ══ BREADCRUMB ══  */}
  <div className="breadcrumb">
    <div className="wrap">
      <ol className="bc" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
          <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a href="/pawid/pawid" itemprop="item"><span itemprop="name">PAWID</span></a>
          <meta itemprop="position" content="2" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <span itemprop="name">Pet Passport — Digital Pet Travel Document</span>
          <meta itemprop="position" content="3" />
        </li>
      </ol>
    </div>
  </div>

  {/*  ══ HERO ══  */}
  <header className="hero" role="banner">
    <div className="wrap hero-content">
      <div className="hero-badge">🌍 Travel Without Borders — For Every Pet</div>
      <h1>
        <em>Pet Passport</em> — One Digital Document.<br />
        Every Airline. Every Country. <em>For Life.</em>
      </h1>
      <p className="lead">
        The world's first <strong style={{'color': 'var(--honey)'}}>universal digital pet passport</strong> — built on PAWID.
        Replace paper chaos with a single QR code that combines identity, vaccination records, health certificate, and
        country-specific compliance. Accepted in 40+ countries. Auto-updated. Vet-verified.
      </p>
      <div className="hero-actions">
        <a href="/create-petid" className="btn btn-amber">✈️ Get Pet Passport →</a>
        <a href="#how-it-works" className="btn btn-ghost">How It Works</a>
      </div>
      <div className="hero-stats">
        <div>
          <div className="stat-n">40+</div>
          <div className="stat-l">Countries Accepted</div>
        </div>
        <div>
          <div className="stat-n">24h</div>
          <div className="stat-l">Vet Verification</div>
        </div>
        <div>
          <div className="stat-n">1 QR</div>
          <div className="stat-l">All Documents</div>
        </div>
        <div>
          <div className="stat-n">0</div>
          <div className="stat-l">Paper Required</div>
        </div>
      </div>
    </div>
  </header>

  {/*  ══ TRUST ══  */}
  <div className="trust">
    <div className="wrap trust-i">
      <div className="ti">🛂 QR Airport Verification</div>
      <div className="ti">💉 Vaccination Compliance Engine</div>
      <div className="ti">🔬 Microchip Linked</div>
      <div className="ti">🩺 Vet Digital Signature</div>
      <div className="ti">🔄 Auto-Updated Records</div>
      <div className="ti">✈️ Airline-Ready Export</div>
    </div>
  </div>

  {/*  ══ PAGE NAV ══  */}
  <section className="pnav" aria-label="Platform pages">
    {/*  <div className="wrap">  */}

    {/*  <div className="pgrid">
        <a href="/" className="ppill"><span className="pi">🏠</span>Home</a>
        <a href="/petos" className="ppill"><span className="pi">🌐</span>PetOS</a>
        <a href="/pet-digital-identity" className="ppill"><span className="pi">🪪</span>Pet Identity</a>
        <a href="/dashboard/dashboard" className="ppill"><span className="pi">📊</span>My Pet</a>
        <a href="/ai-vet" className="ppill"><span className="pi">🤖</span>AI Vet</a>
        <a href="/pet-passport" className="ppill act"><span className="pi">🛂</span>Pet Passport</a>
        <a href="/blockchain-registry" className="ppill"><span className="pi">🔐</span>Blockchain</a>
        <a href="/partners" className="ppill"><span className="pi">🤝</span>Partners</a>
        <a href="/vision/vision" className="ppill"><span className="pi">🚀</span>Vision</a>
        <a href="/create-petid" className="ppill"><span className="pi">✨</span>Create PetID</a>
      </div>  */}
    <section className="checker-hero">
      <div className="wrap checker-hero-inner">
        <div className="hero-badge">✈️ 190+ Countries — Live Pet Travel Rules</div>
        <h1>Pet Travel <em>Document Checker</em></h1>
        <p>Select your origin and destination country. Get the exact list of documents, vaccinations, and permits your
          pet
          needs — instantly. Updated for 2026.</p>

        {/*  CHECKER TOOL  */}
        <div className="checker-tool">
          <div className="checker-tool-header">
            <h2>🐾 Check Documents Required</h2>
            <p>Select source country, destination country, and pet type — we'll show you everything required.</p>
          </div>

          {/*  Pet type selector  */}
          <div style={{'marginBottom': '16px'}}>
            <div
              style={{'fontSize': '.8rem', 'fontWeight': '600', 'textTransform': 'uppercase', 'letterSpacing': '.07em', 'color': 'var(--slate)', 'marginBottom': '8px'}}>
              Pet Type</div>
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

            <button className="swap-btn" onClick="swapCountries()" title="Swap countries"
              aria-label="Swap origin and destination">
              <span className="swap-icon">⇄</span>
            </button>

            <div className="form-group">
              <label>To (Destination Country) <span id="dst-flag" className="flag-preview"></span></label>
              <div className="select-wrap">
                <select id="dst-country" onChange="updateFlag('dst-flag', this.value)">
                  <option value="">Select destination country…</option>
                </select>
              </div>
            </div>

            <button className="check-btn" onClick="checkDocs()" id="check-btn" disabled
              aria-label="Check required documents">
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
    {/*  </div>  */}

    {/*  BELOW THE FOLD — quick links + context  */}
    <section className="section-sm" style={{'background': 'var(--white)'}}>
      <div className="wrap">
        <div style={{'textAlign': 'center', 'marginBottom': '32px'}}>
          <h2 style={{'color': 'var(--forest)'}}>Most Searched Routes from India</h2>
          <p className="mx">Quick-check the most common international pet travel destinations from India.</p>
        </div>
        <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(4,1fr)', 'gap': '14px'}} id="quick-routes">
          <button onClick="quickCheck('IN','GB')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇬🇧
            India to UK</button>
          <button onClick="quickCheck('IN','US')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇺🇸
            India to USA</button>
          <button onClick="quickCheck('IN','AU')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇦🇺
            India to Australia</button>
          <button onClick="quickCheck('IN','DE')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇩🇪
            India to Germany</button>
          <button onClick="quickCheck('IN','CA')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇨🇦
            India to Canada</button>
          <button onClick="quickCheck('IN','AE')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇦🇪
            India to UAE</button>
          <button onClick="quickCheck('IN','SG')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇸🇬
            India to Singapore</button>
          <button onClick="quickCheck('IN','NZ')"
            style={{'padding': '14px', 'borderRadius': '10px', 'border': '1px solid rgba(26,58,42,.1)', 'background': 'var(--cream)', 'cursor': 'pointer', 'fontFamily': '\'DM Sans\',sans-serif', 'fontSize': '.88rem', 'color': 'var(--forest)', 'fontWeight': '500', 'transition': 'all .2s'}}
            onmouseover="this.style.background='var(--mist)'"
            onmouseout="this.style.background='var(--cream)'">🇮🇳→🇳🇿
            India to New Zealand</button>
        </div>
      </div>
    </section>
  </section>
  
  {/*  ══ WHAT IS PET PASSPORT ══  */}
  <section className="section" style={{'background': 'var(--white)'}} id="what-is-pet-passport" aria-labelledby="wip-h2">
    <div className="wrap">
      <div className="g2">
        <div>
          <span className="label">What is a Pet Passport?</span>
          <h2 id="wip-h2">Pet Passport India — The Complete Digital Travel Document for Your Pet</h2>
          <p>
            A <strong>pet passport</strong> is an official collection of documents that verifies your pet's identity,
            health status, vaccination history, and compliance with a destination country's import requirements. It is
            the single most important document for international pet travel — without it, your pet cannot board a flight
            or clear customs.
          </p>
          <p style={{'marginTop': '14px'}}>
            Unlike the EU Pet Passport (a standardised government booklet), <strong>India has no official national pet
              passport system</strong>. Pet owners must manually collect and coordinate a health certificate,
            vaccination records, microchip documentation, AQCS clearance, and country-specific permits — from different
            sources, with different timelines, in different formats.
          </p>
          <p style={{'marginTop': '14px'}}>
            <strong>PAWID Pet Passport</strong> by Paws Pal Connect is India's answer — the country's first
            <strong>unified digital pet passport</strong> that consolidates all these documents into one QR-verified
            digital file, auto-checks compliance for each destination, and is accepted by airlines and customs
            authorities in 40+ countries.
          </p>
          <div style={{'marginTop': '28px', 'display': 'flex', 'gap': '14px', 'flexWrap': 'wrap'}}>
            <a href="/create-petid" className="btn btn-primary">Get Pet Passport →</a>
            <a href="#how-it-works" className="btn btn-outline">See How It Works →</a>
          </div>
        </div>
        {/*  Live Passport Card  */}
        <div>
          <div className="passport-card" role="img" aria-label="Sample PAWID Digital Pet Passport for Bruno">
            <div className="pc-content">
              <div className="pc-header">
                <div>
                  <div className="pc-brand">PAWID · PET PASSPORT</div>
                  <div className="pc-type"> Digital Global Pet Travel Document</div>
                </div>
                <div className="pc-globe">🌍</div>
              </div>
              <div className="pc-pet">
                <div className="pc-avatar">🐕</div>
                <div>
                  <div className="pc-name">Bruno</div>
                  <div className="pc-breed">Golden Retriever · Male · 4 yrs</div>
                  <div className="pc-id">NPTS-IND-PPC-DOG-GR-845739</div>
                </div>
              </div>
              <div className="pc-fields">
                <div className="pc-field">
                  <div className="pc-f-label">Microchip</div>
                  <div className="pc-f-val">900182001234567</div>
                </div>
                <div className="pc-field">
                  <div className="pc-f-label">Rabies Vaccine</div>
                  <div className="pc-f-val"><span className="verified">✓</span> Valid</div>
                </div>
                <div className="pc-field">
                  <div className="pc-f-label">Owner</div>
                  <div className="pc-f-val"><span className="verified">✓</span> Rahul Sharma</div>
                </div>
                <div className="pc-field">
                  <div className="pc-f-label">Last Vet Check</div>
                  <div className="pc-f-val">01 Mar 2026</div>
                </div>
                <div className="pc-field">
                  <div className="pc-f-label">DHPP Vaccine</div>
                  <div className="pc-f-val"><span className="verified">✓</span> Valid</div>
                </div>
                <div className="pc-field">
                  <div className="pc-f-label">Health Cert</div>
                  <div className="pc-f-val"><span className="verified">✓</span> Signed</div>
                </div>
              </div>
              <div className="pc-footer">
                <div className="pc-status">
                  <div className="pc-status-label">Travel Status</div>
                  <div className="pc-status-val">✓ CLEARED</div>
                </div>
                <div style={{'textAlign': 'center'}} className="footer-left">
                  <div className="pc-qr">SCAN<br />QR</div>
                  <div className="pc-issued" style={{'marginTop': '6px', 'fontSize': '.65rem'}}>Airlines & customs verify instantly
                  </div>
                </div>
                <div className="pc-footer-right">
                  <div className="pc-issued">Issued by</div>
                  <div style={{'color': 'var(--honey)', 'fontSize': '.82rem', 'fontWeight': '600'}}>PAWID System</div>
                  <div className="pc-issued" style={{'marginTop': '3px'}}>Powered by Paws Pal Connect</div>
                </div>
              </div>
            </div>
          </div>
          <p style={{'textAlign': 'center', 'fontSize': '.78rem', 'marginTop': '12px', 'color': 'var(--sage)'}}>Sample PAWID Digital Pet
            Passport — scan at airport, customs, or boarding facility.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  ══ PROBLEM vs SOLUTION ══  */}
  <section className="section pvs-section" id="problem-solution" aria-labelledby="pvs-h2">
    <div className="wrap">
      <div className="sh tc">
        <span className="label">The Problem We Solve</span>
        <h2 id="pvs-h2" style={{'color': 'var(--forest)'}}>International Pet Travel is Broken. PAWID Fixed It.</h2>
        <p className="mx">Every year, thousands of pets are denied boarding, placed in quarantine, or returned from airports
          because of documentation errors that a digital system could have prevented in seconds.</p>
      </div>
      <div className="pvs-grid">
        <div className="problem-box">
          <h3>❌ What Pet Parents Face Today</h3>
          <ul className="pvs-list">
            <li><span className="icon">📂</span>Multiple paper certificates from different vets — vaccination, health cert,
              microchip — each from a different source</li>
            <li><span className="icon">⏰</span>Different timing requirements per country — 21-day wait, 10-day health cert,
              1-5 day tapeworm treatment — impossible to track manually</li>
            <li><span className="icon">✈️</span>Risk of lost, expired, or incorrectly formatted documents at the airport —
              leading to denied boarding</li>
            <li><span className="icon">🗺️</span>No single source for country-specific requirements — owners spend hours
              researching USDA, EU, AQCS, DGFT rules separately</li>
            <li><span className="icon">💰</span>Re-doing tests and certifications when documents expire — costs
              ₹5,000–₹25,000 per international trip</li>
            <li><span className="icon">🚫</span>No digital verification option — airlines and customs cannot scan paper
              documents remotely or at high-speed check-in</li>
          </ul>
        </div>
        <div className="solution-box">
          <h3>✓ What PAWID Pet Passport Does</h3>
          <ul className="pvs-list">
            <li><span className="icon">📱</span>One QR code — all documents verified instantly by airline staff, customs,
              and veterinary authorities</li>
            <li><span className="icon">🔄</span>Auto-updated when vet records change — rabies booster added at clinic
              automatically reflects in the passport</li>
            <li><span className="icon">🌍</span>Country-specific compliance engine built-in — shows exact requirements,
              timelines, and missing items for each destination</li>
            <li><span className="icon">⚡</span>Vet digital signature within 24 hours — no waiting weeks for paper health
              certificates</li>
            <li><span className="icon">🛡️</span>Tamper-proof and blockchain-backed — impossible to forge, accepted as
              legally verified documentation</li>
            <li><span className="icon">🔗</span>Future: Direct airline API integration — Lufthansa, Emirates, Air India
              verify pets at booking, not at gate</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/*  ══ HOW PAWID PET PASSPORT WORKS ══  */}
  <section className="section steps-section" id="how-it-works" aria-labelledby="how-h2" style={{'background': 'var(--cream)'}}>
    <div className="wrap">
      <div className="sh tc">
        <span className="label">Step-by-Step Guide</span>
        <h2 id="how-h2" style={{'color': 'var(--forest)'}}>How to Get a Digital Pet Passport — 5 Steps, 24 Hours</h2>
        <p className="mx">From zero documentation to a globally accepted digital pet passport in under 24 hours. Here is the
          complete PAWID Pet Passport issuance workflow.</p>
      </div>
      <div className="step-flow" role="list" aria-label="Pet passport creation steps">
        <div className="step-item" role="listitem">
          <div className="step-circle">🪪</div>
          <div className="step-label">Create PAWID Profile</div>
          <div className="step-sub">Add pet details, microchip, photo, breed</div>
        </div>
        <div className="step-arrow" aria-hidden="true">→</div>
        <div className="step-item" role="listitem">
          <div className="step-circle">💉</div>
          <div className="step-label">Upload Vaccinations</div>
          <div className="step-sub">Rabies, DHPP, leptospirosis with batch numbers</div>
        </div>
        <div className="step-arrow" aria-hidden="true">→</div>
        <div className="step-item" role="listitem">
          <div className="step-circle">🩺</div>
          <div className="step-label">Vet Digital Sign</div>
          <div className="step-sub">PAWID-certified vet signs within 24 hours</div>
        </div>
        <div className="step-arrow" aria-hidden="true">→</div>
        <div className="step-item" role="listitem">
          <div className="step-circle">✅</div>
          <div className="step-label">Compliance Check</div>
          <div className="step-sub">Engine verifies all destination requirements</div>
        </div>
        <div className="step-arrow" aria-hidden="true">→</div>
        <div className="step-item" role="listitem">
          <div className="step-circle final">🛂</div>
          <div className="step-label">Passport Issued</div>
          <div className="step-sub">QR-enabled digital passport — ready to travel</div>
        </div>
      </div>

      <div className="g2" style={{'marginTop': '48px'}}>
        <div className="ib">
          <h3>What's Inside the PAWID Pet Passport</h3>
          <p style={{'marginBottom': '14px'}}>Every PAWID Pet Passport is a structured digital document containing all
            internationally required pet travel information in one scannable file:</p>
          <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '8px'}}>
            <div
              style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '8px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)', 'fontSize': '.88rem'}}>
              <span style={{'color': 'rgba(255,255,255,.7)'}}>Pet identity & PetID</span><span
                style={{'color': 'var(--honey)'}}>NPTS-IND-PPC-DOG-GR-XXXXXX</span>
            </div>
            <div
              style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '8px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)', 'fontSize': '.88rem'}}>
              <span style={{'color': 'rgba(255,255,255,.7)'}}>Microchip number</span><span style={{'color': 'var(--honey)'}}>ISO
                11784/85 compliant</span>
            </div>
            <div
              style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '8px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)', 'fontSize': '.88rem'}}>
              <span style={{'color': 'rgba(255,255,255,.7)'}}>Rabies vaccination</span><span style={{'color': 'var(--honey)'}}>Date,
                batch, validity</span>
            </div>
            <div
              style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '8px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)', 'fontSize': '.88rem'}}>
              <span style={{'color': 'rgba(255,255,255,.7)'}}>All core vaccines</span><span style={{'color': 'var(--honey)'}}>DHPP,
                Lepto, Bordetella</span>
            </div>
            <div
              style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '8px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)', 'fontSize': '.88rem'}}>
              <span style={{'color': 'rgba(255,255,255,.7)'}}>Vet health certificate</span><span
                style={{'color': 'var(--honey)'}}>Digitally signed, 10-day valid</span>
            </div>
            <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '8px 0', 'fontSize': '.88rem'}}>
              <span style={{'color': 'rgba(255,255,255,.7)'}}>Owner verification</span><span
                style={{'color': 'var(--honey)'}}>KYC-validated ownership</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{'color': 'var(--forest)', 'marginBottom': '16px'}}>Before You Travel — Critical Checklist</h3>
          <ul className="fl">
            <li>Microchip implanted <strong>before</strong> rabies vaccination (not after)</li>
            <li>Rabies vaccine administered at least <strong>21 days</strong> before travel if first dose</li>
            <li>Health certificate issued within <strong>10 days</strong> of departure</li>
            <li>Check transit country requirements — not just the final destination</li>
            <li>Confirm airline pet policy, cabin vs. cargo rules, and crate size</li>
            <li>For UK, Ireland, Finland, Norway, Malta: tapeworm treatment 1–5 days before arrival</li>
            <li>For Australia, New Zealand, Japan: start planning at least 6 months ahead</li>
            <li>Carry <strong>both</strong> digital (QR) and printed backup copies</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/*  ══ VACCINATION REQUIREMENTS TABLE ══  */}
  <section className="section vacc-section" id="vaccination-requirements" aria-labelledby="vacc-h2">
    <div className="wrap">
      <div className="sh tc">
        <span className="label">Vaccination Requirements</span>
        <h2 id="vacc-h2" style={{'color': 'var(--forest)'}}>International Pet Travel — Vaccination Requirements Guide</h2>
        <p className="mx">Vaccination requirements for international pet travel — based on 2026 regulations. PAWID tracks
          all of these automatically for every registered pet.</p>
      </div>
      <div style={{'overflowX': 'auto'}}>
        <table className="vacc-table" aria-label="Vaccination requirements for international pet travel">
          <thead>
            <tr>
              <th>Vaccine</th>
              <th>Required For</th>
              <th>Timing Requirement</th>
              <th>PAWID Tracking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Rabies</strong></td>
              <td><span className="req-badge rb-must">All international travel</span></td>
              <td>21+ days before travel (first dose). Boosters usually valid immediately if not lapsed.</td>
              <td>✓ Auto reminder 30 days before expiry</td>
            </tr>
            <tr>
              <td><strong>DHPP</strong> (Distemper, Hepatitis, Parvovirus, Parainfluenza)</td>
              <td><span className="req-badge rb-most">Most destinations</span></td>
              <td>Annual booster recommended. Some countries require within 12 months of travel.</td>
              <td>✓ Tracked with annual reminder</td>
            </tr>
            <tr>
              <td><strong>Leptospirosis</strong></td>
              <td><span className="req-badge rb-most">Most EU countries, India AQCS</span></td>
              <td>Annual vaccination. Must be current at time of health certificate issue.</td>
              <td>✓ Tracked per AQCS India requirements</td>
            </tr>
            <tr>
              <td><strong>Bordetella</strong> (Kennel Cough)</td>
              <td><span className="req-badge rb-some">Some airlines, boarding facilities</span></td>
              <td>Every 6–12 months. Required by Lufthansa cargo and some kennels.</td>
              <td>✓ Optional tracking module</td>
            </tr>
            <tr>
              <td><strong>Tapeworm Treatment</strong> (Echinococcus)</td>
              <td><span className="req-badge rb-some">UK, Ireland, Finland, Norway, Malta</span></td>
              <td>Must be administered 24–120 hours <em>before arrival</em>. Vet records date and time.</td>
              <td>✓ Country-specific alert triggered</td>
            </tr>
            <tr>
              <td><strong>Rabies Titre Test</strong></td>
              <td><span className="req-badge rb-some">Australia, NZ, Japan, Hawaii, Singapore</span></td>
              <td>Blood test 30 days after rabies vaccination. Results processed in approved lab.</td>
              <td>✓ Lab upload + reminder system</td>
            </tr>
            <tr>
              <td><strong>Feline Enteritis + Panleukopaenia</strong> (Cats)</td>
              <td><span className="req-badge rb-most">EU, UK, most international</span></td>
              <td>Annual booster. Must be current at health certificate date.</td>
              <td>✓ Cat-specific tracking module</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="hl" style={{'marginTop': '28px', 'maxWidth': '780px', 'marginLeft': 'auto', 'marginRight': 'auto'}}>
        <p style={{'fontSize': '1rem', 'color': 'var(--forest)', 'maxWidth': 'none'}}><strong>Critical microchip rule:</strong> The
          microchip must be implanted <em>before</em> the rabies vaccination. If the microchip is implanted after, the
          rabies vaccination is legally invalid for international travel — regardless of when it was given. PAWID flags
          this sequencing issue automatically during registration.</p>
      </div>
    </div>
  </section>

  {/*  ══ INDIA-SPECIFIC: DGFT + AQCS ══  */}
  <section className="section india-section" id="india-pet-travel" aria-labelledby="india-h2">
    <div className="wrap">
      <div className="g2">
        <div>
          <span className="label">India-Specific Requirements</span>
          <h2 id="india-h2">Travelling with Pets To and From India — DGFT, AQCS & NOC Guide</h2>
          <p>
            India has some of the most complex pet import and export requirements in the world. The process involves
            multiple government bodies — the <strong>Directorate General of Foreign Trade (DGFT)</strong>, the
            <strong>Animal Quarantine and Certification Service (AQCS)</strong>, and the <strong>Department of Animal
              Husbandry, Dairying and Fisheries (DAHD)</strong>.
          </p>
          <p style={{'marginTop': '12px'}}>
            PAWID's compliance engine maps every India-specific requirement and guides pet owners through the exact
            documentation sequence — preventing the most common errors that lead to airport rejection.
          </p>
          <div className="ib" style={{'marginTop': '28px'}}>
            <h3>Key India Import Rules (2026)</h3>
            <ul style={{'listStyle': 'none', 'display': 'flex', 'flexDirection': 'column', 'gap': '8px', 'marginTop': '4px'}}>
              <li style={{'fontSize': '.88rem', 'color': 'rgba(255,255,255,.8)'}}>✓ Only dogs and cats classified as pets for
                import — other species require DGFT license + CITES clearance</li>
              <li style={{'fontSize': '.88rem', 'color': 'rgba(255,255,255,.8)'}}>✓ Maximum 2 pets per passenger under baggage
                rules</li>
              <li style={{'fontSize': '.88rem', 'color': 'rgba(255,255,255,.8)'}}>✓ India's rabies vaccine validity requirement:
                vaccine must not be more than 1 year old (even if US 3-year certificate)</li>
              <li style={{'fontSize': '.88rem', 'color': 'rgba(255,255,255,.8)'}}>✓ AQCS officers present at Mumbai, Delhi,
                Bengaluru, Chennai, Kolkata airports</li>
              <li style={{'fontSize': '.88rem', 'color': 'rgba(255,255,255,.8)'}}>✓ Puppies and kittens must be minimum 3 months
                old, microchipped, and rabies-vaccinated 30 days before entry</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 style={{'color': 'var(--forest)', 'marginBottom': '24px'}}>India Pet Travel Timeline — Start 8 Weeks Before You Fly
          </h3>
          <div className="india-timeline" role="list">
            <div className="itl-item" role="listitem">
              <div className="itl-dot">8W</div>
              <div className="itl-time">8 Weeks Before Travel</div>
              <div className="itl-title">Apply for DGFT License (if needed)</div>
              <div className="itl-desc">Temporary visitors need Form ANF-2M submitted to DGFT. Processing takes up to 30
                days. Residents transferring after 2+ years abroad may qualify under baggage rules — no DGFT license
                required.</div>
            </div>
            <div className="itl-item" role="listitem">
              <div className="itl-dot">4W</div>
              <div className="itl-time">4 Weeks Before Travel</div>
              <div className="itl-title">Confirm Vaccinations Are Current</div>
              <div className="itl-desc">Rabies must be valid and not more than 1 year old. DHPP and leptospirosis must be
                current. If any vaccine has lapsed, administer now — rabies requires 21-day wait before travel.</div>
            </div>
            <div className="itl-item" role="listitem">
              <div className="itl-dot">7D</div>
              <div className="itl-time">7 Days Before Travel</div>
              <div className="itl-title">Apply for AQCS Advance NOC</div>
              <div className="itl-desc">Submit DGFT license copy and veterinary health certificate to the Animal Quarantine
                and Certification Station (AQCS). NOC is typically issued within 5 working days. Relaxable to 3 days in
                specific circumstances.</div>
            </div>
            <div className="itl-item" role="listitem">
              <div className="itl-dot">10D</div>
              <div className="itl-time">Within 10 Days of Departure</div>
              <div className="itl-title">Official Veterinary Health Certificate</div>
              <div className="itl-desc">A government-registered or PAWID-certified vet issues the official health
                certificate — declaring the pet free from rabies, distemper, parvovirus, leptospirosis, and other
                notifiable diseases. This has a 10-day validity.</div>
            </div>
            <div className="itl-item" role="listitem">
              <div className="itl-dot">✓</div>
              <div className="itl-time">Travel Day</div>
              <div className="itl-title">PAWID QR Scan at Airport</div>
              <div className="itl-desc">Present PAWID Pet Passport QR at airline check-in. AQCS officer at the airport
                verifies documents. Original health certificate retained by AQCS — PAWID digital copy remains with
                owner. Proceed to departure.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ══ COUNTRY REQUIREMENTS ══  */}
  <section className="section country-section" id="country-requirements" aria-labelledby="country-h2">
    <div className="wrap">
      <div className="sh tc">
        <span className="label">Country-by-Country Guide</span>
        <h2 id="country-h2" style={{'color': 'var(--forest)'}}>International Pet Travel Requirements — Country Guide 2026</h2>
        <p className="mx">Every country has different requirements. PAWID's compliance engine tracks all of these
          automatically. Here is what you need to know for the most common destinations from India.</p>
      </div>
      <div className="country-cards">

        <div className="ccard">
          <div className="ccard-head">
            <div className="ccard-flag">🇪🇺</div>
            <div>
              <div className="ccard-name">European Union (27 countries)</div>
              <span className="ccard-difficulty diff-mod">Moderate</span>
            </div>
          </div>
          <ul className="req-list">
            <li><span className="ricon">🔬</span>ISO-compliant microchip (implanted before rabies vaccine)</li>
            <li><span className="ricon">💉</span>Valid rabies vaccination (21-day wait if first dose)</li>
            <li><span className="ricon">📄</span>Animal Health Certificate (AHC) — issued by official vet, valid 10 days for
              entry, 4 months onward</li>
            <li><span className="ricon">🐛</span>Tapeworm treatment for UK, Ireland, Finland, Norway, Malta (1–5 days before
              arrival)</li>
          </ul>
          <div className="timing-badge">⏱ Start 4 weeks ahead</div>
        </div>

        <div className="ccard">
          <div className="ccard-head">
            <div className="ccard-flag">🇬🇧</div>
            <div>
              <div className="ccard-name">United Kingdom</div>
              <span className="ccard-difficulty diff-mod">Moderate</span>
            </div>
          </div>
          <ul className="req-list">
            <li><span className="ricon">🔬</span>Microchip (ISO 11784/85)</li>
            <li><span className="ricon">💉</span>Rabies vaccine — 21-day wait for first dose</li>
            <li><span className="ricon">📄</span>AHC issued within 10 days of travel (EU Pet Passport not accepted
              post-Brexit)</li>
            <li><span className="ricon">🐛</span>Tapeworm treatment 24–120 hours before arrival — must be recorded by vet
            </li>
            <li><span className="ricon">✈️</span>Must arrive through approved UK ports (Heathrow, Gatwick)</li>
          </ul>
          <div className="timing-badge">⏱ Start 6 weeks ahead</div>
        </div>

        <div className="ccard">
          <div className="ccard-head">
            <div className="ccard-flag">🇺🇸</div>
            <div>
              <div className="ccard-name">United States</div>
              <span className="ccard-difficulty diff-mod">Moderate</span>
            </div>
          </div>
          <ul className="req-list">
            <li><span className="ricon">🔬</span>Microchip required for dogs</li>
            <li><span className="ricon">💉</span>Rabies vaccination (India is classified as a high-risk country)</li>
            <li><span className="ricon">📋</span>CDC Dog Import Form — completed online before travel</li>
            <li><span className="ricon">📄</span>USDA-endorsed health certificate</li>
            <li><span className="ricon">🏥</span>Arrive at CDC-approved airports</li>
          </ul>
          <div className="timing-badge">⏱ Start 8 weeks ahead</div>
        </div>

        <div className="ccard">
          <div className="ccard-head">
            <div className="ccard-flag">🇦🇺</div>
            <div>
              <div className="ccard-name">Australia</div>
              <span className="ccard-difficulty diff-hard">Strict</span>
            </div>
          </div>
          <ul className="req-list">
            <li><span className="ricon">🔬</span>Microchip + rabies titre blood test (30 days after vaccine)</li>
            <li><span className="ricon">⏳</span>Rabies titre test result + waiting period</li>
            <li><span className="ricon">🏥</span>Minimum 10-day quarantine on arrival at Melbourne facility</li>
            <li><span className="ricon">📄</span>Import permit from Australian Government Dept. of Agriculture</li>
            <li><span className="ricon">✈️</span>Approved airlines and routes only</li>
          </ul>
          <div className="timing-badge">⏱ Start 6–8 months ahead</div>
        </div>

        <div className="ccard">
          <div className="ccard-head">
            <div className="ccard-flag">🇸🇬</div>
            <div>
              <div className="ccard-name">Singapore</div>
              <span className="ccard-difficulty diff-mod">Moderate</span>
            </div>
          </div>
          <ul className="req-list">
            <li><span className="ricon">🔬</span>Microchip (ISO 11784/85)</li>
            <li><span className="ricon">💉</span>Rabies vaccination within 30 days of travel</li>
            <li><span className="ricon">📄</span>Health certificate from accredited vet</li>
            <li><span className="ricon">🏥</span>30-day quarantine for dogs from non-approved countries</li>
            <li><span className="ricon">📋</span>Import permit from Singapore AVS required</li>
          </ul>
          <div className="timing-badge">⏱ Start 3–4 months ahead</div>
        </div>

        <div className="ccard">
          <div className="ccard-head">
            <div className="ccard-flag">🇦🇪</div>
            <div>
              <div className="ccard-name">UAE (Dubai / Abu Dhabi)</div>
              <span className="ccard-difficulty diff-mod">Moderate</span>
            </div>
          </div>
          <ul className="req-list">
            <li><span className="ricon">🔬</span>Microchip (ISO 11784/85)</li>
            <li><span className="ricon">💉</span>Rabies vaccine + additional vaccines up to date</li>
            <li><span className="ricon">📄</span>Official health certificate endorsed by origin country authority</li>
            <li><span className="ricon">📋</span>Import permit from UAE Ministry of Climate Change</li>
            <li><span className="ricon">✈️</span>Pets fly in cargo only — no in-cabin permitted on most UAE routes</li>
          </ul>
          <div className="timing-badge">⏱ Start 6 weeks ahead</div>
        </div>

      </div>
    </div>
  </section>

  {/*  ══ AIRLINE GUIDE ══  */}
  <section className="section" style={{'background': 'var(--cream)'}} id="airline-guide" aria-labelledby="airline-h2">
    <div className="wrap">
      <div className="sh tc">
        <span className="label">Airline Pet Policies 2026</span>
        <h2 id="airline-h2" style={{'color': 'var(--forest)'}}>Which Airlines Accept Pets — Cabin & Cargo Guide</h2>
        <p className="mx">Airline pet policies change frequently. These are the most important rules for 2026. Always
          confirm directly with the airline before booking.</p>
      </div>
      <div className="airline-grid">
        <div className="airline-card">
          <div className="al-name">Lufthansa</div>
          <span className="al-cabin al-yes">✓ In-Cabin (up to 8kg incl. carrier)</span>
          <ul className="al-details">
            <li>Small dogs and cats in cabin — EU routes</li>
            <li>Larger pets in cargo hold — IATA Live Animal compliant crate</li>
            <li>Brachycephalic (snub-nosed) breeds: cargo only or restricted</li>
            <li>PAWID passport accepted at check-in</li>
          </ul>
        </div>
        <div className="airline-card">
          <div className="al-name">Air India</div>
          <span className="al-cabin al-yes">✓ In-Cabin + Cargo</span>
          <ul className="al-details">
            <li>Small pets in cabin on domestic routes</li>
            <li>International: cargo for most destinations</li>
            <li>Advance booking required — limited spaces</li>
            <li>AQCS clearance mandatory for international travel</li>
          </ul>
        </div>
        <div className="airline-card">
          <div className="al-name">Emirates</div>
          <span className="al-cabin al-cargo">⚠ Cargo Only (most routes)</span>
          <ul className="al-details">
            <li>No in-cabin pets except service animals</li>
            <li>SkyCargo handles pet transport</li>
            <li>Temperature-controlled holds available</li>
            <li>India → UAE: MOCA import permit required</li>
          </ul>
        </div>
        <div className="airline-card">
          <div className="al-name">Singapore Airlines</div>
          <span className="al-cabin al-cargo">⚠ Cargo Only</span>
          <ul className="al-details">
            <li>Pets as cargo through registered shippers</li>
            <li>Does not accept pets as checked baggage</li>
            <li>Singapore 30-day quarantine applies on arrival</li>
            <li>PAWID health records shareable with shipper</li>
          </ul>
        </div>
        <div className="airline-card">
          <div className="al-name">IndiGo</div>
          <span className="al-cabin al-cargo">⚠ Cargo Only (domestic)</span>
          <ul className="al-details">
            <li>Domestic India routes — cargo section only</li>
            <li>No international pet transport services</li>
            <li>Advance booking required — 48 hours minimum</li>
            <li>Kennel must meet IATA standard</li>
          </ul>
        </div>
        <div className="airline-card">
          <div className="al-name">British Airways</div>
          <span className="al-cabin al-no">✗ No in-cabin (London routes)</span>
          <ul className="al-details">
            <li>Pets only as cargo — World Cargo division</li>
            <li>UK tapeworm treatment mandatory pre-arrival</li>
            <li>AHC required (EU Pet Passport not valid)</li>
            <li>Approved Heathrow / Gatwick entry only</li>
          </ul>
        </div>
      </div>
      <div className="hl" style={{'maxWidth': '780px', 'margin': '32px auto 0'}}>
        <p style={{'fontSize': '.95rem', 'color': 'var(--forest)', 'maxWidth': 'none'}}><strong>Important:</strong> Even if all
          documentation is correct and the airline permits pets, the destination country can still refuse entry if its
          specific import rules are not met. Both airline AND country requirements must be satisfied simultaneously.
          PAWID's compliance engine checks both in parallel before issuing your pet's passport.</p>
      </div>
    </div>
  </section>

  {/*  ══ COMPLIANCE ENGINE — WHAT MAKES PAWID DIFFERENT ══  */}
  <section className="section ds" id="compliance-engine" aria-labelledby="ce-h2">
    <div className="wrap">
      <div className="sh dsh tc">
        <span className="label label-d">The Compliance Engine</span>
        <h2 id="ce-h2">Why PAWID's Travel Compliance Engine is a Category First</h2>
        <p className="mx" style={{'color': 'rgba(255,255,255,.7)'}}>No other platform in India — or globally — has built an
          automated pet travel compliance engine linked to real-time country regulations, vaccination records, and
          microchip verification. This is PAWID's deepest technological moat.</p>
      </div>
      <div className="g3" style={{'marginBottom': '40px'}}>
        <div className="dc">
          <div className="icon">🌍</div>
          <h3>Country Intelligence Database</h3>
          <p>Real-time data on pet import requirements for 40+ countries — microchip standards, vaccination timelines,
            quarantine rules, permit requirements, and airline restrictions — all stored and continuously updated.</p>
        </div>
        <div className="dc">
          <div className="icon">⏱️</div>
          <h3>Timeline Calculation Engine</h3>
          <p>Enter your travel date and destination — PAWID calculates exactly when each vaccination, test, and
            certificate must be done, working backwards from your departure. Never miss a critical window again.</p>
        </div>
        <div className="dc">
          <div className="icon">🔄</div>
          <h3>Auto-Sync with Health Records</h3>
          <p>When a vet updates a vaccination or signs a health certificate through VetOS, the Pet Passport
            automatically reflects the change — no manual updates, no expiry surprises at the airport.</p>
        </div>
        <div className="dc">
          <div className="icon">🚨</div>
          <h3>Missing Document Alerts</h3>
          <p>The engine flags every missing or expiring document — 90 days, 30 days, and 7 days before travel. Pet
            owners get notified with exactly what is needed, where to get it, and how long it takes.</p>
        </div>
        <div className="dc">
          <div className="icon">📡</div>
          <h3>Future: Live Airline API</h3>
          <p>PAWID is building direct API integrations with Lufthansa, Emirates, Air India, and Singapore Airlines —
            enabling real-time pet travel verification at booking, not at the gate.</p>
        </div>
        <div className="dc">
          <div className="icon">🏛️</div>
          <h3>Future: Government Registry Link</h3>
          <p>PAWID will integrate directly with AQCS India, Australian Department of Agriculture, US USDA/APHIS, and EU
            TRACES system — making PAWID the authoritative source for all border authorities.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  ══ FAQ ══  */}
  <section className="section faq-section" id="faq" aria-labelledby="faq-h2">
    <div className="wrap">
      <div className="sh tc">
        <span className="label">FAQ</span>
        <h2 id="faq-h2" style={{'color': 'var(--forest)'}}>Frequently Asked Questions — Pet Passport India & International Pet
          Travel</h2>
        <p className="mx">Real questions from pet parents planning international travel — answered with 2026 accuracy.</p>
      </div>
      <div className="faq-list">
        <details className="faq">
          <summary>What is a pet passport in India?</summary>
          <div className="ans">A pet passport in India is an official collection of documents that verifies your pet's
            identity, vaccination status, microchip, and health clearance for international travel. Unlike the EU, India
            does not issue a standardised government pet passport booklet. Pet owners must collect a health certificate,
            vaccination records, microchip documentation, AQCS clearance, and DGFT license (if applicable) from
            different sources. PAWID by Paws Pal Connect creates India's first unified digital equivalent — combining
            all these into one QR-verified document accepted in 40+ countries.</div>
        </details>
        <details className="faq">
          <summary>What documents do I need to travel internationally with my pet from India?</summary>
          <div className="ans">For international pet travel from India you need: (1) Animal Health Certificate (AHC) issued
            by an accredited vet within 10 days of travel, (2) Valid rabies vaccination certificate — India requires
            vaccine not more than 1 year old, (3) ISO-compliant microchip implanted before the rabies vaccination, (4)
            AQCS (Animal Quarantine and Certification Service) NOC — obtained 7 days before travel, (5) DGFT license if
            visiting temporarily (process takes up to 1 month), (6) Country-specific permits for Australia, Singapore,
            UAE, USA. PAWID consolidates and pre-fills all of these.</div>
        </details>
        <details className="faq">
          <summary>How early should I start planning international pet travel?</summary>
          <div className="ans">For most destinations (EU, UK, Canada, USA): start 6–8 weeks before travel. For strict
            quarantine countries (Australia, New Zealand, Japan): start 6–8 months before travel — these countries
            require rabies titre tests, specific quarantine periods, and multiple pre-approved certifications with long
            processing windows. For travel from India: apply for the DGFT license at least 8 weeks in advance as it
            takes up to 30 days to process. PAWID's timeline calculator shows the exact start date for each destination
            the moment you enter your travel country.</div>
        </details>
        <details className="faq">
          <summary>Do I need a DGFT license to travel from India with my pet?</summary>
          <div className="ans">A DGFT license is required if you are temporarily visiting India with your pet (not
            transferring residence). If you have lived abroad continuously for more than 2 years and are returning to
            India permanently, your pet may enter as accompanied baggage without a DGFT license. The DGFT license (Form
            ANF-2M) processing takes up to 1 month. All pets — regardless of category — also require a No Objection
            Certificate (NOC) from the AQCS, obtained 7 days before arrival. PAWID explains which category applies to
            you and prepares the document checklist accordingly.</div>
        </details>
        <details className="faq">
          <summary>What vaccinations does my dog need for international travel?</summary>
          <div className="ans">Core vaccinations for international pet travel include: Rabies (mandatory, minimum 21-day
            wait if first dose — microchip must be implanted before this vaccine), DHPP (Distemper, Hepatitis,
            Parvovirus, Parainfluenza), and Leptospirosis. Additional requirements include tapeworm treatment (1–5 days
            before arrival in UK, Ireland, Finland, Norway, Malta), Bordetella for some airlines and boarding
            facilities, and rabies titre blood test for Australia, New Zealand, Japan, and Hawaii. India specifically
            requires the rabies vaccine to not be more than 1 year old, even if a 3-year certificate was issued abroad.
          </div>
        </details>
        <details className="faq">
          <summary>How does PAWID's Digital Pet Passport work at the airport?</summary>
          <div className="ans">At airline check-in, the staff scans your PAWID Pet Passport QR code — surfacing all required
            travel documents in a structured, verified digital format: microchip number, vaccination dates and validity,
            health certificate with vet digital signature, owner identity, and travel compliance status. At customs in
            most countries, border officers can verify the same QR. The system shows a green "CLEARED" status when all
            requirements for the specific destination are met. Original paper certificates are retained by AQCS at
            Indian airports — the PAWID digital record remains your permanent reference.</div>
        </details>
        <details className="faq">
          <summary>Can cats travel internationally with the same requirements as dogs?</summary>
          <div className="ans">Mostly yes, with some key differences. Cats do not require CDC Dog Import Form for US entry.
            Cats are exempt from federal rabies vaccination requirements for US domestic travel, though many states
            require it and it is strongly recommended. For EU travel, cats follow the same AHC and microchip
            requirements as dogs, but do not need tapeworm treatment. Australia and New Zealand have strict quarantine
            requirements for cats as well as dogs. India only classifies dogs and cats as pets for import purposes —
            other animals require separate DGFT and CITES clearance. PAWID has species-specific compliance tracking for
            dogs, cats, and other pets.</div>
        </details>
        <details className="faq">
          <summary>What happens if my pet's documents are rejected at the airport?</summary>
          <div className="ans">If pet travel documents are rejected at the airport, outcomes range from: (1) Denied boarding
            — you and your pet must return home and restart the process, (2) Quarantine at your own cost at the
            destination country, (3) Deportation of the pet back to the origin country. These situations cost
            ₹15,000–₹2,00,000+ and are highly stressful for the animal. The most common causes are: incorrect
            microchip-vaccine sequencing, expired health certificate, missing country-specific permit, or documents not
            issued by an approved authority. PAWID's compliance engine is specifically designed to prevent every one of
            these scenarios before you reach the airport.</div>
        </details>
      </div>
    </div>
  </section>

  {/*  ══ CTA ══  */}
  <section className="cta-section" id="get-passport" aria-labelledby="cta-h2">
    <div className="wrap">
      <h2 id="cta-h2">Ready to Travel the World With Your Pet? Start Here.</h2>
      <p>Create your pet's PAWID profile in 5 minutes. Your digital pet passport — accepted in 40+ countries — is issued
        within 24 hours of vet verification.</p>
      <div className="cta-row">
        <a href="/create-petid" className="btn btn-white">✈️ Get Pet Passport →</a>
        <a href="/pet-digital-identity" className="btn btn-ghost">🪪 Create PetID First</a>
        <a href="/partners" className="btn btn-ghost">🩺 I'm a Vet Partner</a>
      </div>
    </div>
  </section>

  {/*  ══ SILO ══  */}
  {/*  <nav className="silo" aria-label="PAWID platform sitemap">
  <div className="wrap">
    <p className="silo-lbl">Explore the Complete PAWID & Paws Pal Connect Ecosystem</p>
    <div className="silo-links">
      <a href="/" className="sl">🏠 Home</a>
      <a href="/petos" className="sl">🌐 PetOS Overview</a>
      <a href="/pawid/pawid" className="sl">🆔 PAWID Hub</a>
      <a href="/pet-digital-identity" className="sl">🪪 Pet Digital Identity</a>
      <a href="/pet-passport" className="sl">🛂 Pet Passport India</a>
      <a href="/dashboard/dashboard" className="sl">📊 My Pet Dashboard</a>
      <a href="/ai-vet" className="sl">🤖 AI Vet BharatPetGPT</a>
      <a href="/blockchain-registry" className="sl">🔐 Blockchain Registry</a>
      <a href="/partners" className="sl">🤝 VetOS & Partners</a>
      <a href="/vision/vision" className="sl">🚀 Investor Vision</a>
      <a href="/create-petid" className="sl">✨ Create PetID Free</a>
      <a href="/city/bangalore" className="sl">📍 Bangalore Pet Services</a>
      
      
      <a href="/blog/pet-passport-india-guide" className="sl">📖 Pet Passport India Guide</a>
      <a href="/blog/how-to-travel-internationally-with-dog-india" className="sl">📖 Dog International Travel India</a>
      <a href="/blog/dgft-license-pet-india" className="sl">📖 DGFT License for Pets</a>
      <a href="/blog/pet-vaccination-international-travel" className="sl">📖 Vaccination Requirements Guide</a>
      <a href="/blog/best-airlines-pet-travel-india" className="sl">📖 Best Airlines for Pet Travel</a>
      <a href="/blog/australia-new-zealand-pet-travel" className="sl">📖 Australia & NZ Pet Travel</a>
    </div>
  </div>
</nav>  */}

  {/*  ══ FOOTER ══  */}
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
