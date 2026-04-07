import React from 'react';
import PetIDWizard from '../components/PetIDWizard';
import './PetDigitalIdentity.css';

export default function PetDigitalIdentity() {
  return (
    <>
      {/*  ══════════════════════════════════════════
     NAVIGATION
══════════════════════════════════════════  */}

  <div id="navbar"></div>


  {/*  ══════════════════════════════════════════
     BREADCRUMB
══════════════════════════════════════════  */}
  <div className="breadcrumb" aria-label="Breadcrumb">
    <div className="wrap">
      <ol className="bc-list" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
          <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a href="/pawid/pawid" itemprop="item"><span itemprop="name">PAWID</span></a>
          <meta itemprop="position" content="2" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <span itemprop="name">Pet Digital Identity Infrastructure</span>
          <meta itemprop="position" content="3" />
        </li>
      </ol>
    </div>
  </div>

  {/*  ══════════════════════════════════════════
     HERO
══════════════════════════════════════════  */}
  <header className="hero" role="banner" id="hero">
    <div className="wrap hero-content">
      <div className="hero-badge"> Global Pet Identity Infrastructure</div>
      <h1>
        <em>Pet Digital Identity</em> —<br />
        One Pet. One Identity. <em>One Lifelong Record.</em>
      </h1>
      <p className="lead">
        PAWID by Paws Pal Connect is the world's first <strong style={{'color': 'var(--honey)'}}>Global Pet Identity
          Infrastructure</strong> —
        giving every pet on Earth a permanent, verifiable digital identity that travels with them for life.
        Like Aadhaar for humans, but built for the global pet economy.
      </p>
      <div className="hero-actions">
        <a href="#create-pawid" className="btn btn-amber">Create Your Pet's PetID →</a>
        <a href="#what-is-petid" className="btn btn-ghost-w">Explore PAWID Infrastructure</a>
      </div>
      <div className="hero-stats">
        <div>
          <div className="stat-num">50K+</div>
          <div className="stat-lbl">Pets with PetID</div>
        </div>
        <div>
          <div className="stat-num">2,400+</div>
          <div className="stat-lbl">Verified Vets</div>
        </div>
        <div>
          <div className="stat-num">40+</div>
          <div className="stat-lbl">Countries Supported</div>
        </div>
        <div>
          <div className="stat-num">6</div>
          <div className="stat-lbl">Infrastructure Layers</div>
        </div>
      </div>
    </div>
  </header>

  {/*  ══════════════════════════════════════════
     TRUST BAR
══════════════════════════════════════════  */}
  <div className="trust" role="complementary" aria-label="Trust signals">
    <div className="wrap trust-inner">
      <div className="trust-item"> Globally Unique PetID</div>
      <div className="trust-item"> Blockchain-Secured Records</div>
      <div className="trust-item"> Vet-Verified Identity</div>
      <div className="trust-item"> 40+ Countries Recognised</div>
      <div className="trust-item"> AI-Powered Health Card</div>
      <div className="trust-item"> Lifelong — Never Expires</div>
    </div>
  </div>

  {/*  ══════════════════════════════════════════
     SITE NAVIGATION PILLS (All 10 Pages)
══════════════════════════════════════════  */}
  <section className="pages-nav" aria-label="Platform pages navigation">
    <div className="wrap">
      <div className="pages-grid">
        <a href="/" className="page-pill"><span className="pill-icon"></span>Home</a>
        <a href="/platform/platform" className="page-pill"><span className="pill-icon"></span>Platform</a>
        <a href="/pawid/pawid" className="page-pill"><span className="pill-icon"></span>PAWID</a>
        <a href="/pet-digital-identity" className="page-pill active-page"><span className="pill-icon"></span>Pet
          Identity</a>
        <a href="/dashboard/dashboard" className="page-pill"><span className="pill-icon"></span>My Pet</a>
        <a href="/ai-vet" className="page-pill"><span className="pill-icon"></span>AI Vet</a>
        <a href="/pet-passport" className="page-pill"><span className="pill-icon"></span>Pet Passport</a>
        <a href="/blockchain-registry" className="page-pill"><span className="pill-icon"></span>Blockchain</a>
        <a href="/partners" className="page-pill"><span className="pill-icon"></span>Partners</a>
        <a href="/vision/vision" className="page-pill"><span className="pill-icon"></span>Vision</a>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     WHAT IS PET DIGITAL IDENTITY (H2 anchor)
══════════════════════════════════════════  */}
  <section className="section" style={{'background': 'var(--white)'}} id="what-is-petid" aria-labelledby="identity-h2">
    <div className="wrap">
      <div className="g2">
        <div>
          <span className="label">Pet Digital Identity</span>
          <h2 id="identity-h2">What is Pet Digital Identity — and Why Every Pet Needs One</h2>
          <p>
            <strong>Pet digital identity</strong> is a permanent, globally unique, cryptographically verified profile
            assigned to every pet — storing their complete biological, medical, ownership, and travel data in a single
            secure digital record.
          </p>
          <p className="mt-4">
            Think of it as the <strong>Aadhaar card for your pet</strong>, but designed for the global pet economy. Just
            as Aadhaar created a universal identity layer for India's 1.4 billion citizens, <strong>PAWID</strong> is
            building the same universal identity layer for the world's 1 billion+ pets.
          </p>
          <p className="mt-4">
            Without a digital identity, a pet's medical history is scattered across clinics, vaccination certificates
            get lost, ownership disputes have no resolution mechanism, and emergency care is delayed because vets can't
            access records. <strong>PAWID solves every one of these problems in a single infrastructure layer.</strong>
          </p>
          <ul className="flist mt-6">
            <li>Permanent and unique — never reassigned, never expires</li>
            <li>Globally recognised across 40+ countries and territories</li>
            <li>Cryptographically secured — tamper-proof and immutable</li>
            <li>Linked to microchip, QR tag, and NFC for multi-modal verification</li>
            <li>AI-powered health card that evolves with every vet visit</li>
            <li>Instantly shareable with any vet, shelter, airline, or authority</li>
          </ul>
          <div className="mt-8" style={{'display': 'flex', 'gap': '14px', 'flexWrap': 'wrap'}}>
            <a href="#create-pawid" className="btn btn-primary">Create Free PetID →</a>
            <a href="/pawid/pawid" className="btn btn-outline">PAWID Overview →</a>
          </div>
        </div>
        {/*  Live PetID card demo  */}
        <div>
          <div className="petid-card" role="img" aria-label="Sample PAWID Pet Identity Card for Bruno">
            <div className="petid-content">
              <div className="petid-badge"> PAWID · Verified Pet Identity</div>
              <div className="petid-pet">
                <div className="petid-avatar"></div>
                <div>
                  <div className="petid-name">Bruno</div>
                  <div className="petid-breed">Golden Retriever · Male · 5 yrs</div>
                </div>
              </div>
              <div className="petid-id-box">
                <div className="petid-id-label">Unique PetID — Global Standard</div>
                <div className="petid-id-value">NPTS-IND-PPC-DOG-GR-845739</div>
                <div className="petid-id-sub">NPTS · India · PawsPal · Dog · Golden Retriever · 845739</div>
              </div>
              <div className="petid-grid">
                <div className="petid-field">
                  <div className="petid-field-label">Owner</div>
                  <div className="petid-field-val"><span className="verified-dot"></span>Verified</div>
                </div>
                <div className="petid-field">
                  <div className="petid-field-label">Microchip</div>
                  <div className="petid-field-val">900182001234567</div>
                </div>
                <div className="petid-field">
                  <div className="petid-field-label">Vaccination</div>
                  <div className="petid-field-val"><span className="verified-dot"></span>Up to date</div>
                </div>
                <div className="petid-field">
                  <div className="petid-field-label">Pet Passport</div>
                  <div className="petid-field-val"><span className="verified-dot"></span>Issued</div>
                </div>
                <div className="petid-field">
                  <div className="petid-field-label">AI Health Score</div>
                  <div className="petid-field-val" style={{'color': 'var(--honey)'}}>92 / 100 ✦</div>
                </div>
                <div className="petid-field">
                  <div className="petid-field-label">Travel Status</div>
                  <div className="petid-field-val"><span className="verified-dot"></span>Eligible</div>
                </div>
              </div>
              <div className="petid-footer">
                <div className="petid-tags">
                  <div className="ptag"> <strong>Blockchain</strong> Secured</div>
                  <div className="ptag"> <strong>40+</strong> Countries</div>
                  <div className="ptag"> <strong>Lifelong</strong> Identity</div>
                </div>
                <div className="petid-qr">QR<br />CODE</div>
              </div>
            </div>
          </div>
          <p style={{'textAlign': 'center', 'fontSize': '.8rem', 'marginTop': '12px', 'color': 'var(--sage)'}}>Sample PAWID Pet Identity Card
            — yours looks exactly like this.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     THE PROBLEM PET DIGITAL IDENTITY SOLVES
══════════════════════════════════════════  */}
  <section className="section" style={{'background': 'var(--cream)'}} aria-labelledby="problem-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">The Problem We Solve</span>
        <h2 id="problem-h2" style={{'color': 'var(--forest)'}}>Why the Global Pet Economy Needs an Identity Layer</h2>
        <p className="mx-auto">Today, the $300B+ global pet economy operates without a unified identity standard. Here is
          what that costs pets, owners, and the industry every day.</p>
      </div>
      <div className="g3" style={{'marginBottom': '48px'}}>
        <div className="card" style={{'borderLeft': '4px solid #ef4444'}}>
          <div className="card-icon"><img src="/assets/seo_health_record.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Records" /></div>
          <h3>Fragmented Medical Records</h3>
          <p>78% of pet owners in India rely on paper records that get lost, damaged, or left at the wrong clinic. When
            a pet is seen by a new vet, the entire history starts from scratch — leading to repeated tests,
            misdiagnosis, and preventable complications.</p>
        </div>
        <div className="card" style={{'borderLeft': '4px solid #ef4444'}}>
          <div className="card-icon"><img src="/assets/seo_pet_travel.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Travel" /></div>
          <h3>Complex Pet Travel</h3>
          <p>International pet travel requires vaccination certificates, health certificates, microchip verification,
            and import permits — all in paper format, from different sources. A missing document means the pet cannot
            board. PAWID digitises and unifies all of it.</p>
        </div>
        <div className="card" style={{'borderLeft': '4px solid #ef4444'}}>
          <div className="card-icon"><img src="/assets/blog_emergency.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Emergency" /></div>
          <h3>Emergency Information Blackout</h3>
          <p>In a pet emergency, the treating vet often has zero history — no known allergies, no current medications,
            no vaccination status. This delays critical decisions and increases risk. PAWID makes the full record
            available in seconds via QR scan.</p>
        </div>
        <div className="card" style={{'borderLeft': '4px solid #f59e0b'}}>
          <div className="card-icon"><img src="/assets/blog_tracking.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="Ownership" /></div>
          <h3>No Ownership Verification Standard</h3>
          <p>Pet theft and ownership disputes have no resolution mechanism. Shelters, vets, and authorities cannot
            verify who legally owns a pet. PAWID's blockchain-backed ownership registry creates an immutable,
            tamper-proof proof of ownership.</p>
        </div>
        <div className="card" style={{'borderLeft': '4px solid #f59e0b'}}>
          <div className="card-icon"><img src="/assets/seo_adoption.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="Lost Pets" /></div>
          <h3>Lost Pets Without Identity</h3>
          <p>30% of pets go missing at some point. Without a digital identity linked to QR or NFC, a Good Samaritan who
            finds the pet has no way to contact the owner. PAWID's QR tag instantly surfaces owner contact details to
            anyone who scans it.</p>
        </div>
        <div className="card" style={{'borderLeft': '4px solid #f59e0b'}}>
          <div className="card-icon"><img src="/assets/seo_ai_vet.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="Genetics" /></div>
          <h3>No Breeding Lineage Transparency</h3>
          <p>Fake pedigree certificates, undisclosed genetic disease risks, and fraudulent breeding practices harm both
            pets and buyers. PAWID's DNA identity layer and blockchain breeding registry create a transparent, verified
            lineage record for every registered pet.</p>
        </div>
      </div>
      <div className="highlight-box" style={{'maxWidth': '780px', 'margin': '0 auto', 'textAlign': 'center'}}>
        <p
          style={{'fontSize': '1.05rem', 'maxWidth': 'none', 'color': 'var(--forest)', 'fontFamily': '\'DM Serif Display\',serif', 'fontStyle': 'italic', 'lineHeight': '1.6'}}>
          "Every one of these problems traces back to the same root cause: pets don't have a digital identity. PAWID is
          the infrastructure that fixes this — not just for India, but for every pet on Earth."
        </p>
        <p style={{'marginTop': '10px', 'fontSize': '.88rem', 'color': 'var(--slate)'}}>Rakesh Jha, Founder — Paws Pal Connect</p>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     PETID FORMAT — THE GLOBAL STANDARD
══════════════════════════════════════════  */}
  <section className="section petid-format-section" id="petid-format" aria-labelledby="format-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">PetID Standard</span>
        <h2 id="format-h2" style={{'color': 'var(--forest)'}}>The PAWID PetID Format — A Global Pet Identity Standard</h2>
        <p className="mx-auto">Every PetID generated by PAWID follows a structured, machine-readable, globally scalable
          format — similar to how IBAN codes identify bank accounts or how VIN numbers identify vehicles worldwide.</p>
      </div>
      <div className="format-box">
        <p
          style={{'color': 'rgba(255,255,255,.65)', 'fontSize': '.85rem', 'textTransform': 'uppercase', 'letterSpacing': '.1em', 'marginBottom': '8px'}}>
          Standard PetID Format</p>
        <div className="format-string">NPTS – IND – PPC – DOG – GR – 784523</div>
        <div className="format-parts">
          <div className="format-part">
            <div className="fp-code">NPTS</div>
            <div className="fp-label">Parent Platform<br />Network Pet Tech Systems</div>
          </div>
          <div className="format-part">
            <div className="fp-code">IND</div>
            <div className="fp-label">Country Code<br />ISO 3166-1</div>
          </div>
          <div className="format-part">
            <div className="fp-code">PPC</div>
            <div className="fp-label">App Code<br />Paws Pal Connect</div>
          </div>
          <div className="format-part">
            <div className="fp-code">DOG</div>
            <div className="fp-label">Species Code<br />Dog / Cat / HRS / etc.</div>
          </div>
          <div className="format-part">
            <div className="fp-code">GR</div>
            <div className="fp-label">Breed Code<br />Golden Retriever</div>
          </div>
          <div className="format-part">
            <div className="fp-code">784523</div>
            <div className="fp-label">Unique Identifier<br />Cryptographically Generated</div>
          </div>
        </div>
        <div className="format-examples" style={{'marginTop': '36px'}}>
          <div className="fe-item">
            <div className="icon"></div>
            <div className="id">NPTS-IND-PPC-DOG-GS-349812</div>
            <div className="desc">German Shepherd · India · PPC</div>
          </div>
          <div className="fe-item">
            <div className="icon"></div>
            <div className="id">NPTS-USA-PPC-CAT-PER-983421</div>
            <div className="desc">Persian Cat · United States · PPC</div>
          </div>
          <div className="fe-item">
            <div className="icon"></div>
            <div className="id">NPTS-AUS-PPC-HRS-THB-238941</div>
            <div className="desc">Thoroughbred Horse · Australia · PPC</div>
          </div>
          <div className="fe-item">
            <div className="icon"></div>
            <div className="id">NPTS-GBR-PPC-RBT-HOL-728341</div>
            <div className="desc">Holland Lop Rabbit · United Kingdom · PPC</div>
          </div>
          <div className="fe-item">
            <div className="icon"></div>
            <div className="id">NPTS-SGP-PPC-BRD-MAC-193847</div>
            <div className="desc">Macaw · Singapore · PPC</div>
          </div>
          <div className="fe-item">
            <div className="icon"></div>
            <div className="id">NPTS-ARE-PPC-CML-ARA-827123</div>
            <div className="desc">Arabian Camel · UAE · PPC</div>
          </div>
        </div>
      </div>
      <div className="g2 mt-8">
        <div className="highlight-box">
          <h3 style={{'color': 'var(--forest)', 'marginBottom': '12px'}}>Why This Format Becomes a Global Standard</h3>
          <ul className="flist">
            <li>Machine-readable by any global vet system, airline, or authority</li>
            <li>Supports every country via ISO 3166-1 country codes</li>
            <li>Multi-platform — tomorrow's PetPal uses PP, not PPC</li>
            <li>Multi-species — dog, cat, horse, camel, bird, rabbit, and more</li>
            <li>Breed-specific — enabling genetic and health clustering</li>
            <li>QR-encodable — fits on any collar tag or passport document</li>
          </ul>
        </div>
        <div className="insight-box">
          <h3>Infrastructure Over Features</h3>
          <p>Apps can be copied. Infrastructure cannot. PAWID's PetID format is designed to become the global standard
            that every pet service, government registry, airline, and insurance company integrates with — creating an
            unassailable network moat similar to how card networks like Visa operate in payments.</p>
          <a href="/vision/vision" className="btn btn-amber mt-6" style={{'display': 'inline-flex'}}>Investor Vision →</a>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     6-LAYER ARCHITECTURE
══════════════════════════════════════════  */}
  <section className="section arch-section" id="architecture" aria-labelledby="arch-h2">
    <div className="wrap">
      <div className="sh ne-center">
        <span className="label label-dark">Infrastructure Architecture</span>
        <h2 id="arch-h2">PAWID Global Pet Identity Infrastructure — 6 Core Layers</h2>
        <p style={{'color': 'rgba(255,255,255,.7)', 'margin': '0 auto'}}>Just as the internet is built on layers — physical,
          network, transport, application — PAWID's pet identity infrastructure is built on six specialised layers that
          together create an unbreakable global standard.</p>
      </div>
      <div className="arch-layers" role="list">
        <div className="arch-layer" role="listitem">
          <div className="arch-layer-num">1</div>
          <div className="arch-layer-body" style={{'flex': '1'}}>
            <h4>Identity Layer — PetID Generation & Ownership Verification</h4>
            <p>The foundation of PAWID. Every pet receives a globally unique PetID in the NPTS format. Ownership is
              cryptographically verified and linked to the owner's KYC-validated profile. QR codes and NFC tags are
              issued for physical world integration.</p>
            <div className="arch-layer-tags">
              <span className="atag">PetID Generation</span>
              <span className="atag">Ownership Verification</span>
              <span className="atag">QR / NFC Tags</span>
              <span className="atag">Microchip Linking</span>
              <span className="atag">Owner KYC</span>
            </div>
          </div>
        </div>
        <div className="arch-connector">↓</div>
        <div className="arch-layer" role="listitem">
          <div className="arch-layer-num">2</div>
          <div className="arch-layer-body" style={{'flex': '1'}}>
            <h4>Data Layer — Digital Health Card & Medical Records</h4>
            <p>Every PetID is connected to a comprehensive Electronic Medical Record (EMR) — vaccination history, lab
              reports, prescriptions, surgical records, allergy data, and vet consultation notes. Records are structured
              for AI processing and globally shareable.</p>
            <div className="arch-layer-tags">
              <span className="atag">Pet EMR</span>
              <span className="atag">Vaccination Records</span>
              <span className="atag">Lab Reports</span>
              <span className="atag">Breed & Genetic Data</span>
              <span className="atag">Health Timeline</span>
            </div>
          </div>
        </div>
        <div className="arch-connector">↓</div>
        <div className="arch-layer" role="listitem">
          <div className="arch-layer-num">3</div>
          <div className="arch-layer-body" style={{'flex': '1'}}>
            <h4>AI Layer — BharatPetGPT Intelligence & Predictive Health</h4>
            <p>BharatPetGPT — PAWID's AI veterinary layer — analyses the pet's health records, breed traits, and
              behaviour patterns to generate real-time health insights, disease predictions, emergency triage guidance,
              and personalised preventive care recommendations.</p>
            <div className="arch-layer-tags">
              <span className="atag">Symptom Analysis</span>
              <span className="atag">Disease Prediction</span>
              <span className="atag">Emergency Triage</span>
              <span className="atag">Lab Interpretation</span>
              <span className="atag">Preventive Care AI</span>
            </div>
          </div>
        </div>
        <div className="arch-connector">↓</div>
        <div className="arch-layer" role="listitem">
          <div className="arch-layer-num">4</div>
          <div className="arch-layer-body" style={{'flex': '1'}}>
            <h4>Network Layer — Vets, NGOs, Governments & Services</h4>
            <p>PAWID connects every stakeholder in the pet ecosystem — 2,400+ verified vets, animal welfare NGOs,
              government registries, pet insurers, groomers, trainers, shelters, and airlines — all authenticated
              through the identity infrastructure.</p>
            <div className="arch-layer-tags">
              <span className="atag">Vet Network</span>
              <span className="atag">NGO Integration</span>
              <span className="atag">Government APIs</span>
              <span className="atag">Insurance Gateway</span>
              <span className="atag">Airline Verification</span>
            </div>
          </div>
        </div>
        <div className="arch-connector">↓</div>
        <div className="arch-layer" role="listitem">
          <div className="arch-layer-num">5</div>
          <div className="arch-layer-body" style={{'flex': '1'}}>
            <h4>Security Layer — Blockchain Registry & Encryption</h4>
            <p>Every identity event — registration, ownership transfer, vaccination, adoption, breeding certification —
              is written as an immutable block on a distributed ledger. End-to-end encryption and role-based access
              control ensure data sovereignty for owners.</p>
            <div className="arch-layer-tags">
              <span className="atag">Blockchain Ledger</span>
              <span className="atag">End-to-End Encryption</span>
              <span className="atag">Role-Based Access</span>
              <span className="atag">Tamper-Proof Records</span>
              <span className="atag">ISO 27001 Compliant</span>
            </div>
          </div>
        </div>
        <div className="arch-connector">↓</div>
        <div className="arch-layer" role="listitem">
          <div className="arch-layer-num">6</div>
          <div className="arch-layer-body" style={{'flex': '1'}}>
            <h4>Application Layer — PawsPal App, VetOS Dashboard & Pet Passport</h4>
            <p>The visible face of PAWID. Pet owners manage everything through the Paws Pal Connect app and My Pet
              dashboard. Vets use VetOS for clinic management. Airlines and customs verify through the digital Pet
              Passport QR. Developers access via public API.</p>
            <div className="arch-layer-tags">
              <span className="atag">Paws Pal Connect App</span>
              <span className="atag">VetOS Dashboard</span>
              <span className="atag">Pet Passport Portal</span>
              <span className="atag">Emergency Network</span>
              <span className="atag">Developer API</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     HOW TO CREATE A PETID — STEP BY STEP
══════════════════════════════════════════  */}
  <section className="section flow-section" id="how-to-create-petid" aria-labelledby="flow-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">Step-by-Step Guide</span>
        <h2 id="flow-h2" style={{'color': 'var(--forest)'}}>How to Create a Pet Digital Identity in 6 Steps</h2>
        <p className="mx-auto">From first download to globally verified PetID — the entire process takes under 5 minutes.
          Here is the complete Pet Digital Identity creation workflow.</p>
      </div>
      <div className="flow-steps" role="list" aria-label="PetID creation workflow"
        style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <div className="flow-step" role="listitem">
          <div className="flow-step-circle"><img src="/assets/seo_vet_software.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="App" /></div>
          <div className="flow-step-label">Download App</div>
          <div className="flow-step-sub">iOS & Android — free signup in 60 seconds</div>
        </div>
        <div className="flow-arrow" aria-hidden="true">→</div>
        <div className="flow-step" role="listitem">
          <div className="flow-step-circle"><img src="/assets/seo_health_record.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Profile" /></div>
          <div className="flow-step-label">Create Pet Profile</div>
          <div className="flow-step-sub">Name, species, breed, photo, DOB, microchip</div>
        </div>
        <div className="flow-arrow" aria-hidden="true">→</div>
        <div className="flow-step" role="listitem">
          <div className="flow-step-circle"><img src="/assets/blog_app.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="User" /></div>
          <div className="flow-step-label">Owner Verification</div>
          <div className="flow-step-sub">WhatsApp, email, address, emergency contact</div>
        </div>
        <div className="flow-arrow" aria-hidden="true">→</div>
        <div className="flow-step" role="listitem">
          <div className="flow-step-circle"><img src="/assets/blog_health.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Data" /></div>
          <div className="flow-step-label">Upload Health Data</div>
          <div className="flow-step-sub">Vaccinations, records, allergies, medications</div>
        </div>
        <div className="flow-arrow" aria-hidden="true">→</div>
        <div className="flow-step" role="listitem">
          <div className="flow-step-circle"><img src="/assets/seo_ai_vet.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Vet" /></div>
          <div className="flow-step-label">Vet Verification</div>
          <div className="flow-step-sub">PAWID-certified vet digitally signs within 24h</div>
        </div>
        <div className="flow-arrow" aria-hidden="true">→</div>
        <div className="flow-step" role="listitem">
          <div className="flow-step-circle"><img src="/assets/seo_adoption.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="ID" /></div>
          <div className="flow-step-label">PetID Issued</div>
          <div className="flow-step-sub">Global PetID + QR tag + health card + passport</div>
        </div>
      </div>
      <div className="g2 mt-8">
        <div>
          <h3 style={{'color': 'var(--forest)', 'marginBottom': '16px'}}>What Information Is Required for PetID Registration</h3>
          <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '16px'}}>
            <div className="hc-item">
              <h4> Pet Identity</h4>
              <p>Name, species, breed, DOB, gender, colour, markings, photo, microchip number</p>
            </div>
            <div className="hc-item">
              <h4> Owner Details</h4>
              <p>Full name, WhatsApp, email, complete address, emergency contact, country</p>
            </div>
            <div className="hc-item">
              <h4> Health Records</h4>
              <p>Vaccination dates, certificates, known allergies, current medications, vet clinic</p>
            </div>
            <div className="hc-item">
              <h4> Travel Data</h4>
              <p>Rabies certificate, health clearance, vet licence number, travel eligibility</p>
            </div>
          </div>
        </div>
        <div className="insight-box">
          <h3>Global PetID — Species Supported</h3>
          <p style={{'marginBottom': '16px'}}>PAWID supports every pet species under a unified identity standard:</p>
          <div style={{'display': 'flex', 'flexWrap': 'wrap', 'gap': '10px'}}>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Dogs (all breeds)</span>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Cats (all breeds)</span>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Horses</span>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Camels</span>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Rabbits</span>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Birds</span>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Reptiles</span>
            <span className="atag" style={{'background': 'rgba(255,255,255,.12)', 'color': 'var(--white)'}}> Fish</span>
          </div>
          <a href="#create-pawid" className="btn btn-amber mt-6" style={{'display': 'inline-flex'}}>Start PetID Registration →</a>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     DIGITAL HEALTH CARD — DEEP DIVE
══════════════════════════════════════════  */}
  <section className="section hc-section" id="digital-health-card" aria-labelledby="hc-h2">
    <div className="wrap">
      <div className="g2">
        <div>
          <span className="label">Digital Health Card</span>
          <h2 id="hc-h2">The PAWID Digital Health Card — Your Pet's Complete Medical Identity</h2>
          <p>
            The <strong>Digital Health Card</strong> is the medical intelligence layer of every PetID. It is a
            structured Electronic Medical Record (EMR) that accumulates every health event in your pet's life — creating
            a permanent, AI-analysable health timeline that makes every vet visit smarter and every emergency safer.
          </p>
          <p className="mt-4">
            Unlike a paper record that gets lost or a clinic system that is inaccessible from other clinics, the PAWID
            Health Card is always online, always current, and instantly shareable with any authorised healthcare
            provider anywhere in the world.
          </p>
          <div className="hc-grid mt-6">
            <div className="hc-item">
              <h4> Vaccination History</h4>
              <p>Complete log of all core and non-core vaccines with dates, batch numbers, and due-date reminders.</p>
            </div>
            <div className="hc-item">
              <h4> Lab Reports</h4>
              <p>Blood work, urinalysis, imaging, pathology — all stored, searchable, and AI-interpreted.</p>
            </div>
            <div className="hc-item">
              <h4> Prescriptions</h4>
              <p>All medications with dosage, duration, prescribing vet, and refill history in one searchable log.</p>
            </div>
            <div className="hc-item">
              <h4> Vet Consultation Notes</h4>
              <p>Structured SOAP notes from every visit, linked to the attending vet's verified PAWID profile.</p>
            </div>
            <div className="hc-item">
              <h4> Weight & Growth</h4>
              <p>Growth milestones tracked against breed-specific benchmarks with AI-flagged anomalies.</p>
            </div>
            <div className="hc-item">
              <h4> Dental & Preventive</h4>
              <p>Dental cleaning history, deworming schedule, and breed-specific preventive care protocols.</p>
            </div>
            <div className="hc-item">
              <h4> Genetic Profile</h4>
              <p>DNA identity layer — breed composition, hereditary disease risk, and biological lineage data.</p>
            </div>
            <div className="hc-item">
              <h4> Allergy & Alert Registry</h4>
              <p>Life-critical allergy flags, medication sensitivities, and emergency contact protocols
                front-and-centre.</p>
            </div>
          </div>
        </div>
        <div className="fv" role="img" aria-label="PAWID Digital Health Card illustration"
          style={{'background': 'linear-gradient(145deg,#e8f5f0,#d0ecde)', 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
          <img src="/assets/seo_health_record.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
            alt="Digital Health Card" />
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     IDENTITY VERIFICATION METHODS
══════════════════════════════════════════  */}
  <section className="section verify-section" id="verification" aria-labelledby="verify-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">Verification Methods</span>
        <h2 id="verify-h2" style={{'color': 'var(--forest)'}}>3 Ways to Verify a Pet's Digital Identity</h2>
        <p className="mx-auto">PAWID supports three complementary verification methods — each optimised for a different
          real-world context, from emergency rooms to airport terminals.</p>
      </div>
      <div className="vm-grid">
        <div className="vm-card">
          <div className="vm-icon"><img src="/assets/blog_app.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="QR Code" /></div>
          <h3>QR Code Collar Tag</h3>
          <p>Every registered pet receives a durable, weatherproof QR tag for their collar. Any smartphone camera scans
            it instantly — no app required — to open the pet's full PAWID profile, including owner contact and emergency
            health alerts.</p>
          <div className="vm-badge">No app required to scan</div>
        </div>
        <div className="vm-card">
          <div className="vm-icon"><img src="/assets/blog_tracking.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="Network" /></div>
          <h3>NFC Smart Tag</h3>
          <p>Tap any NFC-enabled phone to the pet's collar tag and instantly receive the pet's identity card. Supported
            by all modern Android and Apple devices. Ideal for shelters, veterinary clinics, and customs authorities
            with NFC-reader infrastructure.</p>
          <div className="vm-badge">Tap-to-verify in 0.3s</div>
        </div>
        <div className="vm-card">
          <div className="vm-icon"><img src="/assets/seo_health_record.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Lab" /></div>
          <h3>Microchip Integration</h3>
          <p>PAWID links directly to the pet's implanted microchip. When a vet clinic or shelter scans the chip with an
            ISO 11784/85 compliant reader, the PetID is automatically retrieved from the PAWID network — even offline in
            areas with cached data.</p>
          <div className="vm-badge">ISO 11784/85 compliant</div>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     BENEFITS — WHY PET DIGITAL IDENTITY
══════════════════════════════════════════  */}
  <section className="section dc-section" id="benefits" aria-labelledby="benefits-h2">
    <div className="wrap">
      <div className="sh ne-center">
        <span className="label label-dark">Why It Matters</span>
        <h2 id="benefits-h2">What Pet Digital Identity Enables — for Every Stakeholder</h2>
        <p style={{'color': 'rgba(255,255,255,.7)', 'margin': '0 auto'}}>PAWID doesn't just benefit pet owners. It creates value
          across the entire pet economy — from individual families to government bodies and global corporations.</p>
      </div>
      <div className="g3" style={{'marginBottom': '28px'}}>
        <div className="dc">
          <div className="icon"></div>
          <h3>For Pet Owners</h3>
          <p>Peace of mind that every health record is secure, accessible, and current. No paperwork anxiety during
            travel. Instant emergency support. Lost pet recovery. AI health guidance at 3am.</p>
        </div>
        <div className="dc">
          <div className="icon"></div>
          <h3>For Veterinarians</h3>
          <p>Complete patient history from the first visit. No repeated tests. Accurate allergy and medication records.
            Digital prescriptions. PAWID's VetOS transforms clinic efficiency and patient outcomes.</p>
        </div>
        <div className="dc">
          <div className="icon"></div>
          <h3>For Airlines & Travel</h3>
          <p>Verified, standardised pet travel documentation via QR scan. No manual document checking. Reduces denied
            boarding for pets with compliant health records. Instant customs verification.</p>
        </div>
        <div className="dc">
          <div className="icon"></div>
          <h3>For Governments</h3>
          <p>A digital national pet registry — tracking vaccination coverage, managing stray populations, preventing
            illegal breeding, and enabling data-driven animal welfare policy. PAWID can power municipal registration
            systems.</p>
        </div>
        <div className="dc">
          <div className="icon"></div>
          <h3>For Pet Insurers</h3>
          <p>Verified identity and tamper-proof health records eliminate fraud. Pre-existing condition verification
            becomes instant. Claims processing accelerates. PAWID becomes the identity gateway for the pet insurance
            sector.</p>
        </div>
        <div className="dc">
          <div className="icon"></div>
          <h3>For Animal Welfare NGOs</h3>
          <p>Verified adoption certificates on blockchain. Transparent rescue and rehoming records. Lost and found
            network integration. Donor transparency. PAWID enables NGOs to operate at unprecedented scale and
            credibility.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     GLOBAL REACH — COUNTRIES & REGIONS
══════════════════════════════════════════  */}
  <section className="section globe-section" id="global-coverage" aria-labelledby="globe-h2">
    <div className="wrap">
      <div className="g2-3">
        <div>
          <span className="label">Global Infrastructure</span>
          <h2 id="globe-h2">PAWID PetID — Global Country Coverage</h2>
          <p>PAWID is built for the world, not just one market. Every PetID carries a country-specific ISO code, making
            the identity instantly recognisable by any system globally.</p>
          <p className="mt-4">The global pet passport generated from a PAWID is currently accepted in 40+ countries, with
            active expansion to cover every IATA-member airline route by 2027.</p>
          <a href="/pet-passport" className="btn btn-primary mt-6" style={{'display': 'inline-flex'}}>Pet Passport Details
            →</a>
        </div>
        <div className="country-grid">
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">India</div>
              <div className="code">IND</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">United States</div>
              <div className="code">USA</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">Australia</div>
              <div className="code">AUS</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">United Kingdom</div>
              <div className="code">GBR</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">Canada</div>
              <div className="code">CAN</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">Singapore</div>
              <div className="code">SGP</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">UAE</div>
              <div className="code">ARE</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">Germany</div>
              <div className="code">DEU</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">France</div>
              <div className="code">FRA</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">New Zealand</div>
              <div className="code">NZL</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">Japan</div>
              <div className="code">JPN</div>
            </div>
          </div>
          <div className="country-item">
            <div className="country-flag"></div>
            <div className="country-info">
              <div className="name">South Africa</div>
              <div className="code">ZAF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     COMPARISON TABLE
══════════════════════════════════════════  */}
  <section className="section comp-section" id="comparison" aria-labelledby="comp-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">PAWID vs Alternatives</span>
        <h2 id="comp-h2" style={{'color': 'var(--forest)'}}>How PAWID Pet Digital Identity Compares</h2>
        <p className="mx-auto">No other system today provides a complete, globally portable pet digital identity. See how
          PAWID stands apart from existing alternatives.</p>
      </div>
      <div style={{'overflowX': 'auto'}}>
        <table className="comp-table" role="table" aria-label="PAWID comparison with alternatives">
          <thead>
            <tr>
              <th>Feature</th>
              <th>PAWID</th>
              <th>Microchip Only</th>
              <th>Paper Records</th>
              <th>Generic Pet App</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Permanent Unique Pet ID</td>
              <td className="tick">✓ Global standard</td>
              <td className="partial">⚠ Number only</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Complete Medical Records</td>
              <td className="tick">✓ Full EMR</td>
              <td className="cross">✗</td>
              <td className="partial">⚠ Paper, losable</td>
              <td className="partial">⚠ Basic notes</td>
            </tr>
            <tr>
              <td>AI Health Intelligence</td>
              <td className="tick">✓ BharatPetGPT</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Global Pet Passport</td>
              <td className="tick">✓ 40+ countries</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Blockchain Ownership Proof</td>
              <td className="tick">✓ Immutable</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>QR / NFC Verification</td>
              <td className="tick">✓ Both modes</td>
              <td className="partial">⚠ Chip scanner only</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Emergency Network</td>
              <td className="tick">✓ India-wide</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Lost Pet Recovery</td>
              <td className="tick">✓ QR reunification</td>
              <td className="partial">⚠ Vet scanner required</td>
              <td className="cross">✗</td>
              <td className="partial">⚠ Alerts only</td>
            </tr>
            <tr>
              <td>Government / Airline Ready</td>
              <td className="tick">✓ API available</td>
              <td className="partial">⚠ Fragmented</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
            <tr>
              <td>Globally Accessible</td>
              <td className="tick">✓ 40+ countries</td>
              <td className="partial">⚠ Some clinics</td>
              <td className="cross">✗</td>
              <td className="cross">✗</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     NETWORK EFFECT
══════════════════════════════════════════  */}
  <section className="section network-section" id="network-effect" aria-labelledby="ne-h2">
    <div className="wrap">
      <div className="ne-center">
        <span className="label label-dark">The Network Effect</span>
        <h2 id="ne-h2">PAWID's Self-Reinforcing Pet Identity Network</h2>
        <p>The more pets that join PAWID, the more valuable the network becomes for every participant — creating a
          powerful, defensible infrastructure moat.</p>
      </div>
      <div className="g2" style={{'alignItems': 'start'}}>
        <div className="ne-flow" role="list">
          <div className="ne-node ne-node-primary" role="listitem"><strong>PAWID Pet Identity Layer</strong><span>Core
              infrastructure — the network hub</span></div>
          <div className="ne-arrow">↓</div>
          <div className="ne-node" role="listitem"><strong>Pet Parents</strong><span>Register pets, use AI vet, access
              passport</span></div>
          <div className="ne-arrow">↓</div>
          <div className="ne-node" role="listitem"><strong>Veterinary Clinics (VetOS)</strong><span>Access patient records,
              join verified network</span></div>
          <div className="ne-arrow">↓</div>
          <div className="ne-node" role="listitem"><strong>Pet Insurance Companies</strong><span>Verified identity =
              fraud-free underwriting</span></div>
          <div className="ne-arrow">↓</div>
          <div className="ne-node" role="listitem"><strong>Airlines & Travel Services</strong><span>Instant pet passport
              verification at check-in</span></div>
          <div className="ne-arrow">↓</div>
          <div className="ne-node" role="listitem"><strong>Government Registries</strong><span>National pet database powered
              by PAWID</span></div>
          <div className="ne-arrow">↓</div>
          <div className="ne-node ne-node-primary" role="listitem"><strong>Stronger Network → More Value → More
              Pets</strong><span>Self-reinforcing growth loop</span></div>
        </div>
        <div>
          <h3 style={{'color': 'var(--white)', 'marginBottom': '20px'}}>Why Network Effects Make PAWID Unstoppable</h3>
          <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '16px'}}>
            <div className="dc">
              <div className="icon"></div>
              <h3>More Pets → Better AI</h3>
              <p>Every new PetID adds anonymised health data to BharatPetGPT's training — making disease predictions
                more accurate for all pets on the network.</p>
            </div>
            <div className="dc">
              <div className="icon"></div>
              <h3>More Vets → Better Care</h3>
              <p>As more clinics join VetOS, every pet owner gains access to a larger verified vet network — with
                complete record sharing across any clinic visit, anywhere.</p>
            </div>
            <div className="dc">
              <div className="icon"></div>
              <h3>More Data → Stronger Moat</h3>
              <p>The identity, health, and behavioural dataset that PAWID accumulates is a proprietary asset that cannot
                be replicated — it grows in value with every registration.</p>
            </div>
          </div>
          <a href="/vision/vision" className="btn btn-amber mt-6" style={{'display': 'inline-flex'}}>See the $1B Vision →</a>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     FOUR PILLARS LINKS
══════════════════════════════════════════  */}
  <section className="section" style={{'background': 'var(--cream)'}} id="four-pillars" aria-labelledby="pillars-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">PAWID Ecosystem</span>
        <h2 id="pillars-h2" style={{'color': 'var(--forest)'}}>The Four Pillars of PAWID — Beyond Identity</h2>
        <p className="mx-auto">Pet digital identity is just the foundation. PAWID's four-pillar architecture delivers a
          complete pet lifecycle ecosystem built on that identity layer.</p>
      </div>
      <div className="g4">
        <div className="card">
          <div className="card-icon"><img src="/assets/blog_app.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="ID" /></div>
          <h3>Pet Digital Identity</h3>
          <p>A permanent unique PetID — storing breed, ownership, microchip, and verified health data. The foundation of
            everything.</p>
          <a href="/pet-digital-identity"
            style={{'display': 'inline-block', 'marginTop': '14px', 'fontWeight': '600', 'fontSize': '.88rem', 'color': 'var(--fern)'}}>Current
            Page ✦</a>
        </div>
        <div className="card">
          <div className="card-icon"><img src="/assets/seo_health_record.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Health" /></div>
          <h3>Pet Health Records</h3>
          <p>Complete digital EMR — vaccinations, lab reports, prescriptions, deworming schedules, surgical history, and
            AI-powered health insights.</p>
          <a href="/dashboard/dashboard"
            style={{'display': 'inline-block', 'marginTop': '14px', 'fontWeight': '600', 'fontSize': '.88rem'}}>My Pet Dashboard →</a>
        </div>
        <div className="card">
          <div className="card-icon"><img src="/assets/seo_ai_vet.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="AI" /></div>
          <h3>AI Vet (BharatPetGPT)</h3>
          <p>24/7 intelligent veterinary support — symptom analysis, emergency guidance, lab report interpretation, and
            preventive care AI.</p>
          <a href="/ai-vet" style={{'display': 'inline-block', 'marginTop': '14px', 'fontWeight': '600', 'fontSize': '.88rem'}}>AI Vet
            Details →</a>
        </div>
        <div className="card">
          <div className="card-icon"><img src="/assets/seo_pet_travel.png"
              style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}} alt="Passport" /></div>
          <h3>Global Pet Passport</h3>
          <p>A vet-verified, QR-enabled travel document accepted in 40+ countries — the world's first digital global pet
            passport infrastructure.</p>
          <a href="/pet-passport"
            style={{'display': 'inline-block', 'marginTop': '14px', 'fontWeight': '600', 'fontSize': '.88rem'}}>Pet Passport →</a>
        </div>
      </div>
      <div className="g2 mt-8">
        <a href="/blockchain-registry" className="card" style={{'textDecoration': 'none'}}>
          <div className="card-icon"><img src="/assets/seo_adoption.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="Security" /></div>
          <h3>Blockchain Pet Registry</h3>
          <p>Immutable ownership verification, adoption certificates, breeding lineage, and tamper-proof veterinary
            records — secured on a distributed ledger.</p>
          <span
            style={{'display': 'inline-block', 'marginTop': '14px', 'fontWeight': '600', 'fontSize': '.88rem', 'color': 'var(--fern)'}}>Blockchain
            Registry →</span>
        </a>
        <a href="/smart-collar" className="card" style={{'textDecoration': 'none'}}>
          <div className="card-icon"><img src="/assets/blog_tracking.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover'}}
              alt="Tracking" /></div>
          <h3>Smart Collar & IoT Network</h3>
          <p>GPS tracking, activity monitoring, temperature alerts, and lost pet notification — all linked to the pet's
            PetID for instant identity resolution.</p>
          <span style={{'display': 'inline-block', 'marginTop': '14px', 'fontWeight': '600', 'fontSize': '.88rem', 'color': 'var(--fern)'}}>Smart
            Collar →</span>
        </a>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     FAQ — SCHEMA MARKED UP
══════════════════════════════════════════  */}
  <section className="section faq-section" id="faq" aria-labelledby="faq-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">FAQ</span>
        <h2 id="faq-h2" style={{'color': 'var(--forest)'}}>Frequently Asked Questions about Pet Digital Identity & PAWID</h2>
        <p className="mx-auto">Everything you need to know about creating a PetID, how PAWID works, and what makes it the
          world's first Global Pet Identity Infrastructure.</p>
      </div>
      <div className="faq-list">
        <details className="faq">
          <summary>What is Pet Digital Identity?</summary>
          <div className="ans">Pet digital identity is a permanent, globally unique, cryptographically verified digital
            profile assigned to every pet. PAWID by Paws Pal Connect creates this identity — storing the pet's breed,
            medical history, vaccination records, ownership verification, microchip data, and travel eligibility in one
            secure global profile, similar to an Aadhaar card for humans but for pets worldwide.</div>
        </details>
        <details className="faq">
          <summary>What is PAWID — the Global Pet Identity Network?</summary>
          <div className="ans">PAWID (Paw Identity Network) is a Global Pet Identity Infrastructure built by Paws Pal
            Connect. It is the world's first system to give every pet a permanent digital identity using the NPTS PetID
            format — connecting pet parents, veterinarians, insurers, governments, and airlines through a single
            verified identity layer. PAWID is to pets what Aadhaar is to Indian citizens, or what Stripe is to online
            payments — essential infrastructure for the entire ecosystem.</div>
        </details>
        <details className="faq">
          <summary>What is a PetID and how is it formatted?</summary>
          <div className="ans">A PetID is a globally unique identifier for every registered pet. The PAWID standard format
            is: NPTS (Network Pet Tech Systems, the parent infrastructure) – Country Code (ISO 3166-1, e.g., IND for
            India) – Platform Code (e.g., PPC for Paws Pal Connect) – Species (DOG, CAT, HRS, etc.) – Breed Code (e.g.,
            GR for Golden Retriever) – Unique Number (cryptographically generated). Example: NPTS-IND-PPC-DOG-GR-784523.
          </div>
        </details>
        <details className="faq">
          <summary>How is PAWID different from a microchip?</summary>
          <div className="ans">A microchip is a passive physical implant storing only a static ID number, readable only by
            specialised veterinary scanners. PAWID is an active digital identity ecosystem — accessible via QR code by
            any smartphone, or NFC tap, or microchip — containing the pet's complete health records, vaccination status,
            ownership verification, AI health insights, global pet passport, and emergency protocols. The microchip is a
            verification method within PAWID, not a replacement for it.</div>
        </details>
        <details className="faq">
          <summary>What is the Global Pet Identity Infrastructure?</summary>
          <div className="ans">Global Pet Identity Infrastructure is the digital backbone that enables every pet in the
            world to have a verified, permanent, and universally recognised identity. PAWID is building this
            infrastructure — connecting pet identity, health records, AI intelligence, travel passports, and emergency
            networks into a single unified system. It is similar to how SWIFT connects global banking, how DNS connects
            the internet, or how Aadhaar connects India's identity ecosystem — but purpose-built for the $300B+ global
            pet economy.</div>
        </details>
        <details className="faq">
          <summary>How does PAWID help during a pet emergency?</summary>
          <div className="ans">In a pet emergency, any vet anywhere in the world can scan the pet's QR collar tag or
            microchip to instantly access the complete health history — medications, allergies, vaccination status,
            surgical history, and owner contact details — without phone calls or paperwork. PAWID's emergency module
            also surfaces the nearest emergency vet clinic, triggers AI-guided first-aid instructions via BharatPetGPT,
            and notifies the owner in real time.</div>
        </details>
        <details className="faq">
          <summary>Is PAWID available outside India?</summary>
          <div className="ans">Yes. PAWID is architected as a global infrastructure from day one. The PetID format includes
            ISO country codes for India (IND), USA, Australia (AUS), UK (GBR), UAE (ARE), New Zealand (NZL), Singapore
            (SGP), Canada (CAN), Germany (DEU), France (FRA), and 30+ more. The global pet passport generated by PAWID
            is accepted in 40+ countries, with active expansion targeting every IATA-member airline route by 2027.</div>
        </details>
        <details className="faq">
          <summary>What does the PAWID Digital Health Card contain?</summary>
          <div className="ans">The PAWID Digital Health Card is a comprehensive Electronic Medical Record (EMR) containing:
            complete vaccination history with due-date reminders, lab reports (blood work, urinalysis, imaging,
            pathology), all prescriptions with dosage and prescribing vet details, vet consultation notes (SOAP format),
            weight and growth milestones, dental and grooming history, allergy and medication sensitivity flags, genetic
            profile (if DNA registered), and AI-powered health trend analysis. Every record is linked to the treating
            vet's verified PAWID profile for authenticity.</div>
        </details>
        <details className="faq">
          <summary>How does PAWID's Blockchain Pet Registry work?</summary>
          <div className="ans">Every identity event on PAWID — registration, ownership transfer, vaccination verification,
            adoption certificate, breeding certification — is written as an immutable entry on a distributed blockchain
            ledger. Once written, records cannot be altered or deleted. This creates tamper-proof proof of ownership for
            legal disputes, verifiable breeding lineage for pedigree pets, trusted adoption records for NGOs, and
            unforgeable vaccination certificates for international travel. See the full Blockchain Registry page for
            technical architecture details.</div>
        </details>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     CTA
══════════════════════════════════════════  */}
  {/*  ══════════════════════════════════════════
     CREATE PAWID FORM & INTEGRATION
══════════════════════════════════════════  */}
  <section className="section" id="create-pawid" style={{'background': 'var(--cream)'}} aria-labelledby="form-h2">
    <div className="wrap">
      <div className="sh text-center">
        <span className="label">PAWID GENERATOR</span>
        <h2 id="form-h2" style={{'color': 'var(--forest)'}}>Create Your Pet's Digital Identity</h2>
        <p className="mx-auto">Generate a verified, lifelong 12-digit global identity for your pet securely on the registry
          in under 60 seconds.</p>
      </div>

      {/*  The Form  */}

      {/*  Multi-step Sliding Form (Replaced with Custom Modal UI)  */}
      
      {/*  CREATE PETID MODAL  */}

      <PetIDWizard />
      {/*  VERIFY EMAIL POPUP  */}
      {/*  <div id="verifyEmailPopup"
        style={{'display': 'none', 'position': 'fixed', 'inset': '0', 'background': 'rgba(0,0,0,0.8)', 'backdropFilter': 'blur(4px)', 'zIndex': '100', 'alignItems': 'center', 'justifyContent': 'center', 'padding': '16px', 'fontFamily': '\'DM Sans\', sans-serif'}}>
        <div
          style={{'background': '#14100e', 'border': '1px solid rgba(239, 167, 94, 0.3)', 'borderRadius': '2rem', 'padding': '32px', 'textAlign': 'center', 'maxWidth': '400px', 'width': '100%', 'boxShadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
          <div
            style={{'width': '80px', 'height': '80px', 'background': 'rgba(239, 167, 94, 0.1)', 'borderRadius': '50%', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'margin': '0 auto 24px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
              stroke="#efa75e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 style={{'fontSize': '1.6rem', 'fontWeight': 'bold', 'color': '#fff', 'marginBottom': '12px', 'marginTop': '0'}}>Check Your
            Inbox</h2>
          <p style={{'fontSize': '0.95rem', 'color': '#9ca3af', 'marginBottom': '32px', 'lineHeight': '1.6'}}>
            We've sent a verification link to <br /><span id="verifyPopupEmail"
              style={{'color': '#fff', 'fontWeight': '500'}}></span>.<br /><br />
            Please verify your email to activate your account.
          </p>
          <a href="https://dev.pawspalconnect.com/login"
            style={{'display': 'block', 'width': '100%', 'padding': '16px', 'borderRadius': '1rem', 'background': '#efa75e', 'color': '#000', 'fontWeight': 'bold', 'textDecoration': 'none', 'fontSize': '1rem', 'transition': 'background 0.2s', 'boxSizing': 'border-box'}}>
            Back to Login
          </a>
        </div>
      </div>  */}
      <div id="verifyModal" className="vm-overlay">
        <div className="vm-modal">
          <h2>Before continuing</h2>
          <p>
            Please confirm that you have verified your email before going to your dashboard.
          </p>

          <button onClick="handleVerifiedClick()" className="vm-btn">
            I have verified
          </button>
        </div>
      </div>
    </div>
  </section>

  {/*  ══════════════════════════════════════════
     INTERNAL LINK SILO (SEO Authority Network)
══════════════════════════════════════════  */}
  {/*  <nav className="silo" aria-label="PAWID platform sitemap">
    <div className="wrap">
      <p className="silo-label">Explore the Complete PAWID & Paws Pal Connect Ecosystem</p>
      <div className="silo-links">
        <a href="/" className="silo-link"> Home — PawsPal Connect</a>
        <a href="/platform/platform" className="silo-link"> Platform — PetOS Overview</a>
        <a href="/pawid/pawid" className="silo-link"> PAWID — Pet Identity Hub</a>
        <a href="/pet-digital-identity" className="silo-link"> Pet Digital Identity</a>
        <a href="/dashboard/dashboard" className="silo-link"> My Pet Dashboard</a>
        <a href="/ai-vet" className="silo-link"> AI Vet — BharatPetGPT</a>
        <a href="/pet-passport" className="silo-link"> Pet Passport India</a>
        <a href="/blockchain-registry" className="silo-link"> Blockchain Pet Registry</a>
        <a href="/smart-collar" className="silo-link"> Smart Collar IoT</a>
        <a href="/partners" className="silo-link"> Vets & Partners</a>
        <a href="/vision/vision" className="silo-link"> Investor Vision — $1B Infrastructure</a>
        <a href="#create-pawid" className="silo-link"> Create PetID Free</a>
        <a href="/city/bangalore" className="silo-link"> Pet Services Bangalore</a>
        
        
        
        <a href="/blog/how-to-store-pet-health-records" className="silo-link"> Pet Health Records Guide</a>
        <a href="/blog/best-pet-care-app-india" className="silo-link"> Best Pet Apps India 2026</a>
        <a href="/blog/pet-emergency-guide" className="silo-link"> Pet Emergency Guide</a>
        <a href="/blog/dog-health-tracking" className="silo-link"> Dog Health Tracking</a>
        <a href="/blog/pet-digital-identity-guide" className="silo-link"> Complete Pet Digital Identity Guide</a>
        <a href="/blog/what-is-pawid" className="silo-link"> What is PAWID?</a>
      </div>
    </div>
  </nav>  */}

  {/*  ══════════════════════════════════════════
     FOOTER
══════════════════════════════════════════  */}
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

  {/*   FOOTER  */}
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
        <span>Built with for India's 50 million pets</span>
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
