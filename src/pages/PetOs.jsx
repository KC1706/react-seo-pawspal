import React from 'react';

export default function PetOs() {
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
        <span itemprop="name">PetOS — Pet Operating System</span>
        <meta itemprop="position" content="2" />
      </li>
    </ol>
  </div>
</div>

{/*  ══ HERO ══  */}
<header className="hero" role="banner">
  <div className="wrap hero-content">
    <div className="hero-badge">🌍 World's First Pet Operating System</div>
    <h1>
      <em>PetOS</em> — The Operating System<br />
      for <em>Every Pet on Earth</em>
    </h1>
    <p className="lead">
      Just like iOS powers iPhones, <strong style={{'color': 'var(--honey)'}}>PetOS by Paws Pal Connect</strong> powers your pet's entire life — permanent identity, complete health records, AI vet intelligence, global passport, and emergency care. One unified digital infrastructure. End to end. For life.
    </p>
    <div className="hero-actions">
      <a href="/create-petid" className="btn btn-amber">🐾 Create Your Pet's PetID →</a>
      <a href="#what-is-petos" className="btn btn-ghost">Explore PetOS Infrastructure</a>
    </div>
    <div className="hero-stats">
      <div><div className="stat-n">50K+</div><div className="stat-l">Pets on PetOS</div></div>
      <div><div className="stat-n">2,400+</div><div className="stat-l">Verified Vets</div></div>
      <div><div className="stat-n">12+</div><div className="stat-l">Features</div></div>
      <div><div className="stat-n">40+</div><div className="stat-l">Countries</div></div>
    </div>
  </div>
</header>

{/*  ══ TRUST ══  */}
<div className="trust">
  <div className="wrap trust-i">
    <div className="ti">🆔 Permanent Pet Identity</div>
    <div className="ti">🤖 AI Vet 24/7</div>
    <div className="ti">🛂 Global Pet Passport</div>
    <div className="ti">🚑 Emergency Network</div>
    <div className="ti">🏥 2,400+ Verified Vets</div>
    <div className="ti">🔐 Blockchain Secured</div>
  </div>
</div>

{/*  ══ 10-PAGE NAVIGATION ══  */}
<section className="pnav" aria-label="Platform pages">
  <div className="wrap">
    <div className="pgrid">
      <a href="/" className="ppill"><span className="pi">🏠</span>Home</a>
      <a href="/platform/platform" className="ppill"><span className="pi">⚙️</span>Platform</a>
      <a href="/petos" className="ppill act"><span className="pi">🌐</span>PetOS</a>
      <a href="/pet-digital-identity" className="ppill"><span className="pi">🪪</span>Pet Identity</a>
      <a href="/dashboard/dashboard" className="ppill"><span className="pi">📊</span>My Pet</a>
      <a href="/ai-vet" className="ppill"><span className="pi">🤖</span>AI Vet</a>
      <a href="/pet-passport" className="ppill"><span className="pi">🛂</span>Pet Passport</a>
      <a href="/blockchain-registry" className="ppill"><span className="pi">🔐</span>Blockchain</a>
      <a href="/partners" className="ppill"><span className="pi">🤝</span>Partners</a>
      <a href="/vision/vision" className="ppill"><span className="pi">🚀</span>Vision</a>
    </div>
  </div>
</section>

{/*  ══ WHAT IS PETOS ══  */}
<section className="section" style={{'background': 'var(--white)'}} id="what-is-petos" aria-labelledby="wip-h2">
  <div className="wrap">
    <div className="g2">
      <div>
        <span className="label">What is PetOS?</span>
        <h2 id="wip-h2">India's First Pet Operating System — Digital Infrastructure for Pet Lifecycle</h2>
        <p>
          <strong>PetOS (a complete Digital Pet Platform)</strong> is not an app. It is infrastructure — a unified digital layer that connects every aspect of a pet's life from birth to old age. Just as Android connects apps, sensors, and services on a smartphone, PetOS connects <strong>pet identity, health records, AI intelligence, emergency care, global travel, and the entire pet service ecosystem</strong> into one always-on digital backbone.
        </p>
        <p style={{'marginTop': '14px'}}>
          Built by <strong>Paws Pal Connect</strong>, PetOS is India's first and the world's most comprehensive pet life platform — powered by PAWID identity infrastructure, BharatPetGPT AI, VetOS clinic network, and a globally accepted Pet Passport system.
        </p>
        <ul className="fl" style={{'marginTop': '20px'}}>
          <li>Permanent Digital Pet Identity (PAWID) — like Aadhaar for pets</li>
          <li>Centralised health records accessible from any device, anywhere</li>
          <li>AI-powered vet consultation — no appointment, no waiting</li>
          <li>Global Pet Passport with QR verification in 40+ countries</li>
          <li>Emergency care coordination in under 2 minutes</li>
          <li>Connects 2,400+ verified veterinarians across India</li>
          <li>Open developer APIs — the platform every pet service builds on</li>
        </ul>
        <div style={{'marginTop': '28px', 'display': 'flex', 'gap': '14px', 'flexWrap': 'wrap'}}>
          <a href="/create-petid" className="btn btn-primary">Get Started on PetOS →</a>
          <a href="/vision/vision" className="btn btn-outline">Investor Vision →</a>
        </div>
      </div>
      <div className="fv" role="img" aria-label="PetOS platform illustration" style={{'background': 'linear-gradient(145deg,#e8f5f0,#d0ecde)'}}>🌐</div>
    </div>
  </div>
</section>

{/*  ══ THE MASTER NARRATIVE ══  */}
<section className="section ds" id="narrative" aria-labelledby="narr-h2">
  <div className="wrap">
    <div className="g2">
      <div>
        <span className="label label-d">The Problem We Solve</span>
        <h2 id="narr-h2" style={{'color': 'var(--white)'}}>Pet Care is Broken. PetOS Fixed It.</h2>
        <p style={{'color': 'rgba(255,255,255,.75)', 'marginBottom': '20px'}}>
          Today, pet care is fragmented across dozens of disconnected systems. Identity is scattered. Health records are lost between clinics. Emergency care is delayed because vets have no history. International travel requires paperwork chaos. Data is disconnected and useless.
        </p>
        <p style={{'color': 'rgba(255,255,255,.75)'}}>
          <strong style={{'color': 'var(--honey)'}}>PetOS</strong> is the unified answer. One platform. One identity. Every service connected. Once a pet joins PetOS, their entire digital life is structured, searchable, shareable, and always accessible — making every vet visit smarter, every emergency faster, and every moment of pet parenting less stressful.
        </p>
        <a href="/pet-digital-identity" className="btn btn-amber" style={{'marginTop': '24px', 'display': 'inline-flex'}}>Explore Pet Digital Identity →</a>
      </div>
      <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '16px'}}>
        <div className="dc"><div className="icon">📂</div><h3>Identity Fragmented</h3><p>78% of pet owners carry paper records that get lost, damaged, or left at the wrong clinic. PAWID creates one permanent identity.</p></div>
        <div className="dc"><div className="icon">🏥</div><h3>Records Lost</h3><p>Switching vets means starting over. PetOS makes every record available to any authorised vet, anywhere, instantly.</p></div>
        <div className="dc"><div className="icon">🚨</div><h3>Emergencies Delayed</h3><p>At 2am, with no records and no history, vets make blind decisions. PetOS puts the full health card in their hands in seconds.</p></div>
      </div>
    </div>
  </div>
</section>

{/*  ══ PETOS ARCHITECTURE — 5 LAYERS ══  */}
<section className="section" style={{'background': 'var(--cream)'}} id="architecture" aria-labelledby="arch-h2">
  <div className="wrap">
    <div className="g2">
      <div>
        <span className="label">System Architecture</span>
        <h2 id="arch-h2" style={{'color': 'var(--forest)'}}>PetOS Architecture — 5 Layers That Power Pet Life</h2>
        <p>
          PetOS is engineered like a FAANG-grade system — a layered infrastructure stack where each layer builds on the one below it, creating compounding value, defensible moats, and an unbreakable network effect.
        </p>
        <p style={{'marginTop': '12px'}}>
          Like the OSI network model or the Android software stack, PetOS layers are modular, independently scalable, and designed for global expansion.
        </p>
      </div>
      <div className="os-stack" role="list" aria-label="PetOS architecture layers">
        <div className="os-layer" role="listitem" style={{'background': 'rgba(245,200,122,.08)', 'borderColor': 'rgba(245,200,122,.25)'}}>
          <div className="os-layer-num" style={{'background': 'var(--amber)'}}>5</div>
          <div className="os-layer-body">
            <h4>🌍 Global Access Layer</h4>
            <p>Pet Passport · Travel compliance · QR verification · Airline integration · Government APIs</p>
            <div className="os-tags"><span className="otag">Pet Passport</span><span className="otag">40+ Countries</span><span className="otag">IATA Ready</span></div>
          </div>
        </div>
        <div style={{'textAlign': 'center', 'color': 'var(--sage)', 'padding': '3px 0', 'fontSize': '1.2rem'}}>↓</div>
        <div className="os-layer" role="listitem">
          <div className="os-layer-num">4</div>
          <div className="os-layer-body">
            <h4>🧠 AI Intelligence Layer</h4>
            <p>BharatPetGPT · Symptom analysis · Predictive health · Behaviour AI · Lab interpretation</p>
            <div className="os-tags"><span className="otag">BharatPetGPT</span><span className="otag">Predictive Health</span><span className="otag">24/7 AI Vet</span></div>
          </div>
        </div>
        <div style={{'textAlign': 'center', 'color': 'var(--sage)', 'padding': '3px 0', 'fontSize': '1.2rem'}}>↓</div>
        <div className="os-layer" role="listitem">
          <div className="os-layer-num">3</div>
          <div className="os-layer-body">
            <h4>🔌 Service Layer</h4>
            <p>VetOS network · Grooming · Boarding · Emergency · Marketplace · Community</p>
            <div className="os-tags"><span className="otag">2,400+ Vets</span><span className="otag">Emergency Network</span><span className="otag">Marketplace</span></div>
          </div>
        </div>
        <div style={{'textAlign': 'center', 'color': 'var(--sage)', 'padding': '3px 0', 'fontSize': '1.2rem'}}>↓</div>
        <div className="os-layer" role="listitem">
          <div className="os-layer-num">2</div>
          <div className="os-layer-body">
            <h4>📊 Data Layer</h4>
            <p>Health records · Vaccination history · Medical timeline · Analytics · Genomic data</p>
            <div className="os-tags"><span className="otag">Pet EMR</span><span className="otag">Health Timeline</span><span className="otag">AI Analytics</span></div>
          </div>
        </div>
        <div style={{'textAlign': 'center', 'color': 'var(--sage)', 'padding': '3px 0', 'fontSize': '1.2rem'}}>↓</div>
        <div className="os-layer" role="listitem" style={{'background': 'rgba(26,58,42,.04)', 'borderColor': 'rgba(26,58,42,.15)'}}>
          <div className="os-layer-num">1</div>
          <div className="os-layer-body">
            <h4>🆔 Identity Layer — PAWID (CORE FOUNDATION)</h4>
            <p>Unique PetID · Ownership verification · QR/NFC tags · Microchip linking · Blockchain registry</p>
            <div className="os-tags"><span className="otag">PAWID</span><span className="otag">PetID Standard</span><span className="otag">Blockchain</span><span className="otag">QR + NFC</span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="ib" style={{'marginTop': '40px'}}>
      <h3>Why Layers Create Unstoppable Moats</h3>
      <p>Each PetOS layer builds on the one below — identity creates data, data fuels AI, AI improves services, services drive global access. Every new pet registration makes the AI smarter. Every new vet makes the network more valuable. Every passport issued deepens the global standard. This is how infrastructure companies reach $1B+ valuations — not through features, but through compounding ecosystem lock-in.</p>
    </div>
  </div>
</section>

{/*  ══ HOW PETOS WORKS — 4 STEPS ══  */}
<section className="section" style={{'background': 'var(--white)'}} id="how-petos-works" aria-labelledby="how-h2">
  <div className="wrap">
    <div className="sh tc">
      <span className="label">How PetOS Works</span>
      <h2 id="how-h2" style={{'color': 'var(--forest)'}}>From First Pet Profile to Global Ecosystem — 4 Steps</h2>
      <p className="mx">PetOS onboarding takes 5 minutes. The value it delivers lasts a lifetime.</p>
    </div>
    <div className="g4" style={{'marginBottom': '48px'}}>
      <div className="card" style={{'textAlign': 'center'}}>
        <div style={{'width': '56px', 'height': '56px', 'borderRadius': '50%', 'background': 'var(--forest)', 'color': 'var(--white)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontFamily': '\'DM Serif Display\',serif', 'fontSize': '1.3rem', 'margin': '0 auto 18px'}}>1</div>
        <h3>Create PAWID</h3>
        <p style={{'fontSize': '.92rem'}}>Register your pet and generate a permanent global PetID (NPTS-IND-PPC-DOG-GR-XXXXXX) with ownership verification and QR tag.</p>
      </div>
      <div className="card" style={{'textAlign': 'center'}}>
        <div style={{'width': '56px', 'height': '56px', 'borderRadius': '50%', 'background': 'var(--moss)', 'color': 'var(--white)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontFamily': '\'DM Serif Display\',serif', 'fontSize': '1.3rem', 'margin': '0 auto 18px'}}>2</div>
        <h3>Connect Health & Records</h3>
        <p style={{'fontSize': '.92rem'}}>Add vaccination records, medical history, lab reports, vet visits, and current medications to your pet's Digital Health Card.</p>
      </div>
      <div className="card" style={{'textAlign': 'center'}}>
        <div style={{'width': '56px', 'height': '56px', 'borderRadius': '50%', 'background': 'var(--fern)', 'color': 'var(--white)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontFamily': '\'DM Serif Display\',serif', 'fontSize': '1.3rem', 'margin': '0 auto 18px'}}>3</div>
        <h3>Enable AI + Services</h3>
        <p style={{'fontSize': '.92rem'}}>BharatPetGPT analyses your pet's data and provides proactive health insights. Access 2,400+ vets, grooming, boarding, and emergency care instantly.</p>
      </div>
      <div className="card" style={{'textAlign': 'center'}}>
        <div style={{'width': '56px', 'height': '56px', 'borderRadius': '50%', 'background': 'var(--amber)', 'color': 'var(--white)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'fontFamily': '\'DM Serif Display\',serif', 'fontSize': '1.3rem', 'margin': '0 auto 18px'}}>4</div>
        <h3>Access Global Ecosystem</h3>
        <p style={{'fontSize': '.92rem'}}>Your pet's digital passport is accepted in 40+ countries. Vets worldwide can access records via QR. Your pet is globally mobile and perpetually connected.</p>
      </div>
    </div>
  </div>
</section>

{/*  ══ 14-MODULE FEATURE ARCHITECTURE ══  */}
<section className="section ds" id="features" aria-labelledby="feat-h2">
  <div className="wrap">
    <div className="sh dsh tc">
      <span className="label label-d">Complete Feature Architecture</span>
      <h2 id="feat-h2">PetOS — 14 Modules Powering the Entire Pet Life Cycle</h2>
      <p className="mx" style={{'color': 'rgba(255,255,255,.7)'}}>Every module is a standalone SEO page, a revenue stream, and a network node. Together they form an ecosystem that no single-feature app can compete with.</p>
    </div>
  </div>
</section>

{/*  Module grid — light bg for readability  */}
<section style={{'background': 'var(--cream)', 'padding': '0 0 88px'}} aria-labelledby="feat-h2">
  <div className="wrap">
    <div className="module-grid" style={{'paddingTop': '0'}}>

      {/*  1. Pet Identity  */}
      <article className="module" itemscope itemtype="https://schema.org/SoftwareApplication">
        <div className="module-head">
          <div className="m-icon">🪪</div>
          <h3 itemprop="name">Pet Digital Identity (PAWID)</h3>
          <div className="m-kw">pet digital identity · pet Aadhaar · PetID India</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Unique Pet Identification (PAWID)</li>
            <li>QR-based identity verification</li>
            <li>NFC-enabled smart identity</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Owner &amp; multi-owner mapping</li>
            <li>Pet profile — breed, age, traits</li>
            <li>Photo-based identity verification</li>
            <li>Lost &amp; found activation mode</li>
            <li>Verified identity badge</li>
          </ul>
          <a href="/pet-digital-identity" className="mod-link">Explore Pet Identity →</a>
        </div>
      </article>

      {/*  2. Health Records  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#1e4d35,#2d6b48)'}}>
          <div className="m-icon">📊</div>
          <h3>Pet Health Records</h3>
          <div className="m-kw">pet health records · dog medical history · vaccination tracker</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Centralised health records</li>
            <li>Vaccination tracking system</li>
            <li>Medical history timeline</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Upload prescriptions &amp; lab reports</li>
            <li>Vet visit logs</li>
            <li>Medication reminders</li>
            <li>Allergy &amp; surgery tracking</li>
          </ul>
          <a href="/dashboard/dashboard" className="mod-link">My Pet Dashboard →</a>
        </div>
      </article>

      {/*  3. AI Vet  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#1a3a50,#25536e)'}}>
          <div className="m-icon">🤖</div>
          <h3>AI Vet Consultation (BharatPetGPT)</h3>
          <div className="m-kw">AI vet India · pet health AI · dog symptom checker</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>AI vet consultation (PetGPT)</li>
            <li>Pet symptom checker</li>
            <li>Behaviour intelligence AI</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Instant diagnosis suggestions</li>
            <li>Emergency severity detection</li>
            <li>Diet recommendations</li>
            <li>Breed-specific insights</li>
            <li>Voice &amp; chat-based AI</li>
          </ul>
          <a href="/ai-vet" className="mod-link">Explore AI Vet →</a>
        </div>
      </article>

      {/*  4. Emergency  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#5a1a1a,#7a2525)'}}>
          <div className="m-icon">🚑</div>
          <h3>Pet Emergency Response System</h3>
          <div className="m-kw">emergency vet near me · pet emergency · 24x7 vet support</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>One-tap emergency alert</li>
            <li>Nearby vet discovery</li>
            <li>Instant health data sharing</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Location-based vet matching</li>
            <li>Auto-share medical records</li>
            <li>SOS alerts to family</li>
            <li>Emergency AI guidance</li>
            <li>Ambulance integration (future)</li>
          </ul>
          <a href="/pet-emergency" className="mod-link">Emergency Network →</a>
        </div>
      </article>

      {/*  5. Pet Passport  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#2a3a5a,#3a5080)'}}>
          <div className="m-icon">🛂</div>
          <h3>Global Pet Passport System</h3>
          <div className="m-kw">pet passport India · travel with pets · international pet travel</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Digital pet passport</li>
            <li>QR verification system</li>
            <li>Travel compliance engine</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Vaccination compliance tracking</li>
            <li>Country-specific travel rules</li>
            <li>Travel history logs</li>
            <li>Document uploads</li>
            <li>Airline-ready export</li>
          </ul>
          <a href="/pet-passport" className="mod-link">Pet Passport Details →</a>
        </div>
      </article>

      {/*  6. VetOS  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#1a3a2a,#2d5a40)'}}>
          <div className="m-icon">👨‍⚕️</div>
          <h3>Veterinary Network (VetOS)</h3>
          <div className="m-kw">online vet consultation · vet near me · veterinary platform India</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>2,400+ verified vet network</li>
            <li>VetOS clinic dashboard</li>
            <li>Teleconsultation system</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Vet discovery &amp; ratings</li>
            <li>Appointment booking</li>
            <li>Prescription generation</li>
            <li>Vet analytics dashboard</li>
          </ul>
          <a href="/partners" className="mod-link">VetOS for Clinics →</a>
        </div>
      </article>

      {/*  7. Marketplace  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#3a2a1a,#5a4025)'}}>
          <div className="m-icon">🛍️</div>
          <h3>Pet Services Marketplace</h3>
          <div className="m-kw">pet grooming near me · pet boarding · pet services app</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Grooming services booking</li>
            <li>Boarding services</li>
            <li>Training services</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Service provider listings</li>
            <li>Booking management</li>
            <li>Reviews &amp; ratings</li>
            <li>Subscription services</li>
            <li>Doorstep services</li>
          </ul>
          <a href="/platform/platform" className="mod-link">Marketplace →</a>
        </div>
      </article>

      {/*  8. Community  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#2a1a3a,#3f2858)'}}>
          <div className="m-icon">🐕</div>
          <h3>Pet Community &amp; Social Network</h3>
          <div className="m-kw">pet community app · dog social network · pet parent platform</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Pet social profiles</li>
            <li>Community feed</li>
            <li>Pet matching system</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Pet friend discovery</li>
            <li>Events &amp; meetups</li>
            <li>Pet posts &amp; reels</li>
            <li>Verified breeder connect</li>
          </ul>
          <a href="/platform/platform" className="mod-link">Community →</a>
        </div>
      </article>

      {/*  9. Blockchain  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#1a2a3a,#253850)'}}>
          <div className="m-icon">🔐</div>
          <h3>Blockchain Pet Registry</h3>
          <div className="m-kw">blockchain pet identity · pet ownership verification · tamper-proof pet records</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Immutable ownership ledger</li>
            <li>Adoption certificate registry</li>
            <li>Breeding lineage verification</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Tamper-proof medical records</li>
            <li>Decentralised verification API</li>
            <li>Legal ownership proof</li>
          </ul>
          <a href="/blockchain-registry" className="mod-link">Blockchain Registry →</a>
        </div>
      </article>

      {/*  10. Developer API  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#1a1a2a,#252538)'}}>
          <div className="m-icon">🔌</div>
          <h3>Developer APIs &amp; Ecosystem</h3>
          <div className="m-kw">pet platform API · PetOS API · pet tech developer</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Pet Identity API</li>
            <li>Health Data API</li>
            <li>Vet Integration API</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Clinic system integrations</li>
            <li>Insurance integrations</li>
            <li>IoT &amp; smart collar APIs</li>
            <li>Third-party app ecosystem</li>
          </ul>
          <a href="/partners" className="mod-link">Developer Docs →</a>
        </div>
      </article>

      {/*  11. Analytics  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#1a3a35,#25504a)'}}>
          <div className="m-icon">📈</div>
          <h3>Pet Data &amp; Health Analytics</h3>
          <div className="m-kw">pet health analytics · pet data insights · dog health AI</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>Health insights dashboard</li>
            <li>Behaviour analytics</li>
            <li>AI predictive alerts</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Activity tracking integration</li>
            <li>Health trend analysis</li>
            <li>Risk prediction models</li>
            <li>Vet-ready reports</li>
          </ul>
          <a href="/dashboard/dashboard" className="mod-link">My Pet Dashboard →</a>
        </div>
      </article>

      {/*  12. Security  */}
      <article className="module">
        <div className="module-head" style={{'background': 'linear-gradient(135deg,#2a1a1a,#3a2525)'}}>
          <div className="m-icon">🛡️</div>
          <h3>Security &amp; Privacy Layer</h3>
          <div className="m-kw">secure pet data · pet privacy · pet data protection</div>
        </div>
        <div className="module-body">
          <div className="core-label">Core Features</div>
          <ul className="core-list">
            <li>End-to-end data encryption</li>
            <li>Role-based access control</li>
            <li>ISO 27001 compliance</li>
          </ul>
          <div className="core-label">Sub Features</div>
          <ul className="sub-list">
            <li>Consent management</li>
            <li>Secure sharing links</li>
            <li>Blockchain-ready identity</li>
            <li>Zero third-party data sales</li>
          </ul>
          <a href="/privacy" className="mod-link">Privacy Policy →</a>
        </div>
      </article>

    </div>
  </div>
</section>

{/*  ══ PETOS vs TRADITIONAL ══  */}
<section className="section comp-section" id="comparison" aria-labelledby="comp-h2">
  <div className="wrap">
    <div className="sh tc">
      <span className="label">PetOS vs Traditional</span>
      <h2 id="comp-h2" style={{'color': 'var(--forest)'}}>PetOS vs Traditional Pet Apps — Why There Is No Comparison</h2>
      <p className="mx">Traditional pet apps solve one problem. PetOS is the infrastructure layer that makes every pet problem solvable.</p>
    </div>
    <div style={{'overflowX': 'auto'}}>
      <table className="comp" aria-label="PetOS vs traditional pet app comparison">
        <thead>
          <tr>
            <th>Feature</th>
            <th>PetOS (Paws Pal Connect)</th>
            <th>Traditional Pet App</th>
            <th>Vet Clinic System</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Digital Pet Identity</td><td className="ck">✓ Permanent global PetID</td><td className="cx">✗ None</td><td className="cx">✗ None</td></tr>
          <tr><td>Unified Health Records</td><td className="ck">✓ Complete EMR</td><td className="cp">⚠ Basic notes</td><td className="cp">⚠ Single clinic only</td></tr>
          <tr><td>AI Vet (24/7)</td><td className="ck">✓ BharatPetGPT</td><td className="cx">✗ Not available</td><td className="cx">✗ Not available</td></tr>
          <tr><td>Global Pet Passport</td><td className="ck">✓ 40+ countries</td><td className="cx">✗ None</td><td className="cx">✗ None</td></tr>
          <tr><td>Emergency Network</td><td className="ck">✓ 2-minute response</td><td className="cx">✗ None</td><td className="cp">⚠ Single clinic</td></tr>
          <tr><td>Blockchain Ownership</td><td className="ck">✓ Immutable ledger</td><td className="cx">✗ None</td><td className="cx">✗ None</td></tr>
          <tr><td>Developer API Ecosystem</td><td className="ck">✓ Open APIs</td><td className="cx">✗ Closed</td><td className="cp">⚠ Limited integrations</td></tr>
          <tr><td>Lost Pet Recovery</td><td className="ck">✓ QR reunification</td><td className="cp">⚠ Alerts only</td><td className="cx">✗ None</td></tr>
          <tr><td>Government Integration</td><td className="ck">✓ API-ready</td><td className="cx">✗ None</td><td className="cx">✗ None</td></tr>
          <tr><td>Multi-Vet Continuity</td><td className="ck">✓ Instant history sharing</td><td className="cx">✗ None</td><td className="cx">✗ Siloed per clinic</td></tr>
          <tr><td>Network Effect</td><td className="ck">✓ Compounding ecosystem</td><td className="cx">✗ Isolated users</td><td className="cx">✗ None</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

{/*  ══ REAL LIFE IMPACT ══  */}
<section className="section testi-section" id="real-impact" aria-labelledby="testi-h2">
  <div className="wrap">
    <div className="sh tc">
      <span className="label">Real Life Impact</span>
      <h2 id="testi-h2" style={{'color': 'var(--forest)'}}>Stories from the PetOS Community</h2>
      <p className="mx">Every feature in PetOS was designed because a real pet parent faced a real problem. These are their stories.</p>
    </div>

    {/*  Emergency story — rich SEO content  */}
    <div className="ib" style={{'maxWidth': '780px', 'margin': '0 auto 48px'}}>
      <h3>The Night PetOS Saved a Life</h3>
      <p style={{'fontStyle': 'italic', 'lineHeight': '1.8'}}>
        It was 2:13 AM. A Labrador collapsed — laboured breathing, unresponsive. No open clinic. No time to find records. The owner opened PetOS. Within 90 seconds, BharatPetGPT identified suspected acute allergic reaction, surfaced all medication history and known allergens, connected the owner to the nearest emergency vet, and transmitted the full health record via QR before they arrived. The dog survived. The vet later said: "Having the complete history the moment they walked in made all the difference."
      </p>
      <p style={{'color': 'rgba(255,255,255,.6)', 'marginTop': '12px', 'fontSize': '.88rem'}}>This is why PetOS exists. Not as an app. As infrastructure.</p>
    </div>

    <div className="g3">
      <div className="tcard">
        <p>My dog collapsed at night. PetOS connected me to a vet in 2 minutes and shared all his records automatically. No time wasted. No paperwork. The vet had everything before I arrived.</p>
        <div className="tname">Priya Nair</div>
        <div className="trole">Pet parent · Bengaluru · Golden Retriever owner</div>
      </div>
      <div className="tcard">
        <p>I travelled internationally with my cat for the first time. The PetOS Pet Passport had everything — vaccination, health cert, microchip — on one QR. No chaos. No delays at customs. Complete peace of mind.</p>
        <div className="tname">Arjun Mehta</div>
        <div className="trole">Pet parent · Mumbai · Relocated to Singapore</div>
      </div>
      <div className="tcard">
        <p>BharatPetGPT flagged a potential joint issue based on Bruno's weight trend before any symptoms appeared. We caught it early. Our vet said we would have missed it for another year without the AI alert.</p>
        <div className="tname">Dr. Suresh Kumar</div>
        <div className="trole">Veterinarian · Chennai · VetOS Partner Clinic</div>
      </div>
    </div>
  </div>
</section>

{/*  ══ DEVELOPER ECOSYSTEM ══  */}
<section className="section dev-section" id="developer" aria-labelledby="dev-h2">
  <div className="wrap">
    <div className="sh dsh tc">
      <span className="label label-d">Developer Ecosystem</span>
      <h2 id="dev-h2">PetOS APIs — The AWS of the Global Pet Economy</h2>
      <p className="mx" style={{'color': 'rgba(255,255,255,.7)'}}>PetOS provides open infrastructure APIs that enable clinics, insurers, IoT device makers, and third-party developers to build on top of the world's largest pet identity and health data network.</p>
    </div>
    <div className="api-grid" style={{'marginBottom': '40px'}}>
      <div className="api-card"><div className="api-icon">🆔</div><h4>Pet Identity API</h4><p>Create, query and verify PetIDs. Integrate PAWID into any veterinary system, government registry, or service platform.</p></div>
      <div className="api-card"><div className="api-icon">💊</div><h4>Health Data API</h4><p>Read and write structured health records, vaccination history, lab reports, and prescriptions linked to any PetID.</p></div>
      <div className="api-card"><div className="api-icon">🩺</div><h4>Vet Integration API</h4><p>Connect clinic management systems to PetOS — enabling instant patient history retrieval, teleconsultation, and prescription workflows.</p></div>
      <div className="api-card"><div className="api-icon">🚨</div><h4>Emergency API</h4><p>Build emergency response flows — triggering nearest vet alerts, record sharing, SOS notifications, and ambulance dispatch on the PetOS network.</p></div>
    </div>
    <div className="g2">
      <div className="dc" style={{'background': 'rgba(255,255,255,.08)'}}>
        <div className="icon">🏗️</div>
        <h3>Build on PetOS</h3>
        <p>Insurance companies integrate for fraud-free underwriting. Airlines verify passports. IoT collar makers stream health data. Governments build national pet registries. PetOS is the foundational layer every pet-economy business builds on.</p>
      </div>
      <div className="dc" style={{'background': 'rgba(255,255,255,.08)'}}>
        <div className="icon">🌐</div>
        <h3>Become the Standard</h3>
        <p>Like Stripe became the default for online payments, PetOS is positioning to become the default identity and data layer for every pet interaction on Earth — making Paws Pal Connect the infrastructure company of the global pet economy.</p>
        <a href="/partners" className="btn btn-amber" style={{'marginTop': '18px', 'display': 'inline-flex'}}>API &amp; Partner Docs →</a>
      </div>
    </div>
  </div>
</section>

{/*  ══ EXPANSION ROADMAP ══  */}
<section className="section roadmap-section" id="roadmap" aria-labelledby="rm-h2">
  <div className="wrap">
    <div className="sh tc">
      <span className="label">Implementation Roadmap</span>
      <h2 id="rm-h2" style={{'color': 'var(--forest)'}}>PetOS Global Expansion Roadmap</h2>
      <p className="mx">Three phases. Three years. One global standard.</p>
    </div>
    <div className="rm-grid">
      <div className="rm-card">
        <div className="rm-phase">Phase 1 — Now (2026)</div>
        <h3>Foundation &amp; India Leadership</h3>
        <ul className="rm-list">
          <li>PAWID digital identity — live</li>
          <li>VetOS clinic network — 2,400+ vets</li>
          <li>BharatPetGPT AI Vet — live</li>
          <li>Pet Passport — India + 40 countries</li>
          <li>Emergency Network — 12 cities</li>
          <li>My Pet Dashboard — complete EMR</li>
          <li>Blockchain registry — beta</li>
        </ul>
      </div>
      <div className="rm-card">
        <div className="rm-phase" style={{'background': 'var(--moss)'}}>Phase 2 — 2027</div>
        <h3>Platform &amp; Intelligence Scale</h3>
        <ul className="rm-list">
          <li>Pet insurance integration</li>
          <li>Smart collar IoT ecosystem</li>
          <li>DNA identity layer</li>
          <li>Behaviour AI v2</li>
          <li>Asia Pacific expansion</li>
          <li>Government registry APIs</li>
          <li>PetOS developer marketplace</li>
        </ul>
      </div>
      <div className="rm-card">
        <div className="rm-phase" style={{'background': 'var(--amber)'}}>Phase 3 — 2028</div>
        <h3>Global Infrastructure Standard</h3>
        <ul className="rm-list">
          <li>Global pet identity standard</li>
          <li>IATA airline integration</li>
          <li>EU pet passport compliance</li>
          <li>National registry partnerships</li>
          <li>Pet credit &amp; financing layer</li>
          <li>100M+ pets on PetOS</li>
          <li>$1B+ infrastructure valuation</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/*  ══ BENEFITS / WHY PETOS ══  */}
<section className="section ds" id="benefits" aria-labelledby="ben-h2">
  <div className="wrap">
    <div className="sh dsh tc">
      <span className="label label-d">Why PetOS</span>
      <h2 id="ben-h2">Why PetOS is Mandatory for Every Pet Owner</h2>
      <p className="mx" style={{'color': 'rgba(255,255,255,.7)'}}>PetOS removes every pain point from pet ownership — replacing anxiety with intelligence, chaos with structure, and reactive care with proactive wellness.</p>
    </div>
    <div className="g3">
      <div className="dc"><div className="icon">😌</div><h3>Stress-Free Pet Parenting</h3><p>Every record is secure, every reminder is automated, every emergency is prepared for. Pet parenting becomes joyful — not stressful.</p></div>
      <div className="dc"><div className="icon">🏥</div><h3>Better Healthcare Outcomes</h3><p>Complete health history + AI pattern detection = earlier diagnosis, fewer repeated tests, better treatment decisions, and healthier, longer-lived pets.</p></div>
      <div className="dc"><div className="icon">✈️</div><h3>Frictionless Pet Travel</h3><p>One QR code replaces all travel paperwork. Airlines, customs, and vets worldwide can verify your pet's passport in seconds.</p></div>
      <div className="dc"><div className="icon">🔍</div><h3>Lost Pet Recovery</h3><p>QR collar tag links directly to owner contact. Any person who finds your pet can reunite them with you instantly — even without a vet or scanner.</p></div>
      <div className="dc"><div className="icon">🔐</div><h3>Ownership Security</h3><p>Blockchain-backed PetID is tamper-proof legal proof of ownership — protecting you in theft cases, breeding disputes, and adoption records.</p></div>
      <div className="dc"><div className="icon">📡</div><h3>Future-Ready Platform</h3><p>Smart collar IoT, DNA identity, pet insurance, and government integrations are all built into the PetOS roadmap — your platform evolves without switching.</p></div>
    </div>
  </div>
</section>

{/*  ══ MOAT — UNFAIR ADVANTAGE ══  */}
<section className="section" style={{'background': 'var(--cream)'}} id="moat" aria-labelledby="moat-h2">
  <div className="wrap">
    <div className="sh tc">
      <span className="label">The Unfair Advantage</span>
      <h2 id="moat-h2" style={{'color': 'var(--forest)'}}>Why PetOS Cannot Be Copied — The Infrastructure Moat</h2>
      <p className="mx">Features can be copied. Infrastructure cannot. PetOS builds five compounding moats that make Paws Pal Connect the only platform that matters in the global pet economy.</p>
    </div>
    <div className="g4" style={{'marginBottom': '40px'}}>
      <div className="card" style={{'textAlign': 'center', 'borderTop': '4px solid var(--forest)'}}>
        <div style={{'fontSize': '2.2rem', 'marginBottom': '12px'}}>🆔</div>
        <h3>Identity Network</h3>
        <p style={{'fontSize': '.9rem'}}>Every PetID registered strengthens the global identity standard — making PAWID the universal reference point for every pet service.</p>
      </div>
      <div className="card" style={{'textAlign': 'center', 'borderTop': '4px solid var(--fern)'}}>
        <div style={{'fontSize': '2.2rem', 'marginBottom': '12px'}}>📊</div>
        <h3>Data Network</h3>
        <p style={{'fontSize': '.9rem'}}>Health data compounds in value with every record added — fuelling AI predictions that improve faster than any competitor can replicate.</p>
      </div>
      <div className="card" style={{'textAlign': 'center', 'borderTop': '4px solid var(--amber)'}}>
        <div style={{'fontSize': '2.2rem', 'marginBottom': '12px'}}>🧠</div>
        <h3>AI Intelligence</h3>
        <p style={{'fontSize': '.9rem'}}>BharatPetGPT is trained on the largest veterinary dataset in India — becoming more accurate and more personalised with every query.</p>
      </div>
      <div className="card" style={{'textAlign': 'center', 'borderTop': '4px solid var(--gold)'}}>
        <div style={{'fontSize': '2.2rem', 'marginBottom': '12px'}}>🌐</div>
        <h3>Ecosystem Network</h3>
        <p style={{'fontSize': '.9rem'}}>Every vet, insurer, airline, NGO, and government that integrates via API deepens the ecosystem — raising the switching cost for every participant to near-zero.</p>
      </div>
    </div>
    <div className="g2">
      <div className="hl">
        <h3 style={{'color': 'var(--forest)', 'marginBottom': '16px'}}>The CEO Insight (No Filter)</h3>
        <p style={{'color': 'var(--ink)', 'fontFamily': '\'DM Serif Display\',serif', 'fontStyle': 'italic', 'fontSize': '1.05rem', 'lineHeight': '1.7', 'maxWidth': 'none'}}>
          "We are not building a pet app. We are building the operating system for pets. From identity to healthcare, from AI to global travel — everything connected. PetOS is not a feature. It is a new category. And categories are not competed in. They are owned."
        </p>
        <p style={{'marginTop': '12px', 'fontSize': '.86rem', 'color': 'var(--slate)'}}>Rakesh Jha, Founder — Paws Pal Connect</p>
      </div>
      <div className="ib">
        <h3>Infrastructure vs App — Why It Matters</h3>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '10px', 'marginTop': '4px'}}>
          <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)'}}>
            <span style={{'color': 'rgba(255,255,255,.7)', 'fontSize': '.9rem'}}>Payment infrastructure</span>
            <span style={{'color': 'var(--honey)', 'fontWeight': '600', 'fontSize': '.9rem'}}>Stripe</span>
          </div>
          <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)'}}>
            <span style={{'color': 'rgba(255,255,255,.7)', 'fontSize': '.9rem'}}>Identity infrastructure</span>
            <span style={{'color': 'var(--honey)', 'fontWeight': '600', 'fontSize': '.9rem'}}>Okta</span>
          </div>
          <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px 0', 'borderBottom': '1px solid rgba(255,255,255,.1)'}}>
            <span style={{'color': 'rgba(255,255,255,.7)', 'fontSize': '.9rem'}}>Cloud infrastructure</span>
            <span style={{'color': 'var(--honey)', 'fontWeight': '600', 'fontSize': '.9rem'}}>AWS</span>
          </div>
          <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '10px 0'}}>
            <span style={{'color': 'var(--white)', 'fontSize': '.9rem', 'fontWeight': '600'}}>Pet life infrastructure</span>
            <span style={{'color': 'var(--honey)', 'fontWeight': '700', 'fontSize': '.9rem'}}>PetOS by Paws Pal Connect</span>
          </div>
        </div>
        <a href="/vision/vision" className="btn btn-amber" style={{'display': 'inline-flex', 'marginTop': '20px'}}>Investor Vision: $1B Infrastructure →</a>
      </div>
    </div>
  </div>
</section>

{/*  ══ FAQ ══  */}
<section className="section faq-section" id="faq" aria-labelledby="faq-h2">
  <div className="wrap">
    <div className="sh tc">
      <span className="label">FAQ</span>
      <h2 id="faq-h2" style={{'color': 'var(--forest)'}}>Frequently Asked Questions about PetOS</h2>
      <p className="mx">Everything ChatGPT, Gemini, Perplexity, and Google users ask about PetOS — answered completely.</p>
    </div>
    <div className="faq-list">
      <details className="faq"><summary>What is PetOS?</summary><div className="ans">PetOS (Pet Operating System) is the world's first unified digital infrastructure for pets, built by Paws Pal Connect. It connects pet identity (PAWID), health records, AI vet consultation (BharatPetGPT), global pet passport, emergency response, and a 2,400+ vet network into a single platform — like iOS for smartphones, but for your pet's entire life. It is not an app. It is infrastructure.</div></details>
      <details className="faq"><summary>How is PetOS different from other pet apps in India?</summary><div className="ans">Traditional pet apps solve one problem — grooming booking, or medication reminders. PetOS is an infrastructure layer: a permanent digital pet identity, complete medical EMR across all clinics, AI vet available 24/7, a globally accepted pet passport, a national emergency network, an open developer API ecosystem, and a blockchain ownership registry — all connected through a single PetID. Apps can be copied. Infrastructure cannot.</div></details>
      <details className="faq"><summary>What is PAWID inside PetOS?</summary><div className="ans">PAWID (Paw Identity Network) is the identity foundation of PetOS. Every pet receives a globally unique PetID in the format NPTS-IND-PPC-DOG-GR-784523. This ID connects the pet's complete health records, ownership history, vaccination status, AI health score, and global pet passport — making it the Aadhaar for pets, embedded as the core layer of PetOS.</div></details>
      <details className="faq"><summary>What is BharatPetGPT?</summary><div className="ans">BharatPetGPT is PetOS's AI veterinary layer — a 24/7 intelligent assistant trained on millions of veterinary case records and deeply integrated with each pet's individual health history stored in PAWID. It provides instant symptom analysis, emergency triage guidance, lab report interpretation, diet recommendations, breed-specific health insights, and predictive disease alerts — shifting pet care from reactive to proactive.</div></details>
      <details className="faq"><summary>How does PetOS handle pet emergencies?</summary><div className="ans">PetOS's Emergency Response module provides one-tap emergency alert to nearby verified vets, instant QR-share of the complete health record, AI-guided first-aid instructions via BharatPetGPT, location-based vet matching, SOS notifications to family members, and auto-transmission of medical records before the pet arrives at the clinic — all within 2 minutes of activation.</div></details>
      <details className="faq"><summary>Is PetOS free to use?</summary><div className="ans">Creating a PAWID Pet Digital Identity is free. The My Pet Dashboard with basic health records is free. Premium features — including AI Vet consultations, global Pet Passport, advanced analytics, and travel concierge — are available on subscription plans. VetOS for veterinary clinics is a monthly SaaS subscription.</div></details>
      <details className="faq"><summary>Can developers and businesses build on PetOS?</summary><div className="ans">Yes. PetOS provides open APIs — Pet Identity API, Health Data API, Vet Integration API, and Emergency API — enabling clinics, insurance companies, IoT device manufacturers, pet service providers, and third-party developers to build on top of the world's largest pet identity and health data infrastructure. PetOS is designed to become the AWS of the global pet ecosystem.</div></details>
      <details className="faq"><summary>What is PetOS's vision for global expansion?</summary><div className="ans">PetOS's Phase 1 (2026) focuses on India leadership with PAWID, VetOS, BharatPetGPT, Pet Passport for 40+ countries, and Emergency Network across 12 cities. Phase 2 (2027) adds pet insurance integration, smart collar IoT, DNA identity, and Asia Pacific expansion. Phase 3 (2028) targets a global pet identity standard — integrating with IATA airlines, EU pet passport frameworks, and national government registries worldwide.</div></details>
    </div>
  </div>
</section>

{/*  ══ CTA ══  */}
<section className="cta-section" id="get-started" aria-labelledby="cta-h2">
  <div className="wrap">
    <h2 id="cta-h2">Your Pet Deserves the World's Best Digital Infrastructure — Free</h2>
    <p>Join 50,000+ pet owners. Create your pet's permanent PetID on PetOS in under 5 minutes.</p>
    <div className="cta-row">
      <a href="/create-petid" className="btn btn-white">🐾 Create PetID Free →</a>
      <a href="/pet-passport" className="btn btn-ghost">✈️ Get Pet Passport</a>
      <a href="/partners" className="btn btn-ghost">🩺 Join as a Vet</a>
    </div>
  </div>
</section>

{/*  ══ SILO LINKS ══  */}
<nav className="silo" aria-label="PetOS platform sitemap">
  <div className="wrap">
    <p className="silo-lbl">Explore the Complete PetOS &amp; Paws Pal Connect Ecosystem</p>
    <div className="silo-links">
      <a href="/" className="sl">🏠 Home</a>
      <a href="/platform/platform" className="sl">⚙️ Platform Overview</a>
      <a href="/petos" className="sl">🌐 PetOS</a>
      <a href="/pet-digital-identity" className="sl">🪪 Pet Digital Identity</a>
      <a href="/dashboard/dashboard" className="sl">📊 My Pet Dashboard</a>
      <a href="/ai-vet" className="sl">🤖 AI Vet — BharatPetGPT</a>
      <a href="/pet-passport" className="sl">🛂 Pet Passport India</a>
      <a href="/blockchain-registry" className="sl">🔐 Blockchain Registry</a>
      <a href="/smart-collar" className="sl">📡 Smart Collar IoT</a>
      <a href="/partners" className="sl">🤝 VetOS &amp; Partners</a>
      <a href="/vision/vision" className="sl">🚀 Investor Vision</a>
      <a href="/create-petid" className="sl">✨ Create PetID</a>
      <a href="/city/bangalore" className="sl">📍 Bangalore</a>
      
      
      
      <a href="/blog/what-is-petos" className="sl">📖 What is PetOS?</a>
      <a href="/blog/petos-vs-pet-apps" className="sl">📖 PetOS vs Pet Apps</a>
      <a href="/blog/how-pet-digital-identity-works" className="sl">📖 How Pet Identity Works</a>
      <a href="/blog/best-pet-care-app-india" className="sl">📖 Best Pet Apps India 2026</a>
      <a href="/blog/pet-emergency-guide" className="sl">📖 Pet Emergency Guide</a>
      <a href="/blog/ai-vet-vs-physical-vet" className="sl">📖 AI Vet vs Physical Vet</a>
    </div>
  </div>
</nav>

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
