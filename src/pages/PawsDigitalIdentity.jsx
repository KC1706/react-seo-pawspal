import React from 'react';

export default function PawsDigitalIdentity() {
  return (
    <>
      {/*  TopAppBar  */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl flex justify-between items-center px-6 py-4 w-full">
        <div className="text-2xl font-black italic text-[#f3ffca] tracking-tighter font-headline">
          NeonPet ID
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="text-[#cafd00] font-bold border-b-2 border-[#cafd00] font-headline tracking-tight hover:scale-105 transition-transform"
            href="#"
          >
            Identity
          </a>
          <a
            className="text-[#adaaab] font-medium font-headline tracking-tight hover:scale-105 hover:text-[#f3ffca] transition-transform"
            href="#"
          >
            Verify
          </a>
          <a
            className="text-[#adaaab] font-medium font-headline tracking-tight hover:scale-105 hover:text-[#f3ffca] transition-transform"
            href="#"
          >
            Assets
          </a>
          <a
            className="text-[#adaaab] font-medium font-headline tracking-tight hover:scale-105 hover:text-[#f3ffca] transition-transform"
            href="#"
          >
            Profile
          </a>
        </div>
        <div className="flex gap-4">
          <span
            className="material-symbols-outlined text-on-surface cursor-pointer hover:scale-105 transition-transform"
            data-icon="qr_code_scanner"
          >
            qr_code_scanner
          </span>
          <span
            className="material-symbols-outlined text-on-surface cursor-pointer hover:scale-105 transition-transform"
            data-icon="account_circle"
          >
            account_circle
          </span>
        </div>
      </nav>
      <main className="pt-24 pb-32 kinetic-gradient">
        {/*  Hero Section  */}
        <section className="px-6 lg:px-24 py-12 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left z-10">
              <span className="text-primary-fixed font-headline font-bold tracking-widest uppercase text-sm mb-4 block">
                Future of Pet Ownership
              </span>
              <h1 className="text-5xl lg:text-8xl font-black italic tracking-tighter font-headline leading-none mb-8">
                GLOBAL PET <br />
                <span className="text-primary-fixed">IDENTITY</span> <br />
                INFRA
              </h1>
              <p className="text-on-surface-variant text-lg lg:text-xl max-w-xl mb-10 leading-relaxed">
                Secure, decentralized, and universally recognized. NeonPet ID is
                the kinetic foundation for the next generation of companion
                animal management.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                  Register Pet
                  <span
                    className="material-symbols-outlined"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </button>
                <button className="bg-surface-variant/20 backdrop-blur-md text-on-surface font-bold px-8 py-4 rounded-full border border-outline-variant/15 hover:scale-105 transition-transform">
                  View Whitepaper
                </button>
              </div>
            </div>
            {/*  3D PetID Card Visualization  */}
            <div className="flex-1 relative perspective-1000">
              <div className="glass-card p-8 rounded-xl border border-primary-fixed/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transform rotate-3 hover:rotate-0 transition-all duration-700 max-w-md mx-auto">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-fixed to-secondary p-1">
                    <div className="w-full h-full bg-surface rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="High quality 3D render style French Bulldog portrait"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLSRReh3-r2SijMWgaP8SpsmrKKkzPuskHLon61xuV_8m_Ki9QoALVAevZPQl7Uw4F2AUM8B6SB4pypcB6xHopsNRTbOTVFixb5V6VtqOuFLy-s8I_xqhUm_TW9EDPbFLO1EQtxaaoiquFQEy57Jj8jdYlMtQ-hZN3KP0yP73c9qBu2mo2w6qNT9FlZISbUDzUHLZ2BHlFXwpGxiUoWcSSnkR8L1P_FLgUc9e6qwwnxScU4eQ2_RQ2Qnt3QH2Og4emxvrMG2Z-OY4R"
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary-fixed font-headline font-black italic">
                      NPID-77291
                    </div>
                    <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                      Global Status: Active
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline font-black text-3xl uppercase tracking-tighter">
                      APOLLO
                    </h3>
                    <p className="text-secondary font-bold text-sm tracking-widest">
                      CERTIFIED CANINE / FRENCHIE
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-6">
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold">
                        Owner Hash
                      </p>
                      <p className="text-xs font-mono">0x71C...3e92</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-on-surface-variant uppercase font-bold">
                        Birth Block
                      </p>
                      <p className="text-xs font-mono">#18,293,001</p>
                    </div>
                  </div>
                  <div className="bg-primary-fixed/10 p-4 rounded-lg flex items-center justify-between">
                    <span
                      className="material-symbols-outlined text-primary-fixed"
                      data-icon="fingerprint"
                    >
                      fingerprint
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-primary-fixed/40 rounded-full"></div>
                      <div className="w-1 h-6 bg-primary-fixed rounded-full"></div>
                      <div className="w-1 h-3 bg-primary-fixed/60 rounded-full"></div>
                      <div className="w-1 h-5 bg-primary-fixed rounded-full"></div>
                      <div className="w-1 h-2 bg-primary-fixed/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Architecture Layered Visualization  */}
        <section className="px-6 py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black italic tracking-tighter font-headline mb-4">
                6-LAYER ECOSYSTEM
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                The world's most robust digital identity architecture for
                domestic animals.
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              {/*  Dynamic Layer Stacking  */}
              <div className="w-full max-w-4xl space-y-4">
                {/*  Layer 6  */}
                <div className="glass-card p-6 rounded-lg border-l-4 border-secondary flex items-center gap-6 transform hover:translate-x-4 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline font-black">
                    06
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg">
                      Cross-Border Compliance
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Automated travel permits and regulatory alignment for 120+
                      countries.
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:text-secondary transition-colors"
                    data-icon="public"
                  >
                    public
                  </span>
                </div>
                {/*  Layer 5  */}
                <div className="glass-card p-6 rounded-lg border-l-4 border-primary-fixed flex items-center gap-6 transform hover:translate-x-4 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-headline font-black">
                    05
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg">
                      Vitality Ledger
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Immutable medical records and genomic data verified by
                      certified vets.
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:text-primary-fixed transition-colors"
                    data-icon="ecg_heart"
                  >
                    ecg_heart
                  </span>
                </div>
                {/*  Layer 4  */}
                <div className="glass-card p-6 rounded-lg border-l-4 border-secondary flex items-center gap-6 transform hover:translate-x-4 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline font-black">
                    04
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg">
                      The Asset Vault
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Secure management of pet ownership, insurance, and
                      pedigree titles.
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:text-secondary transition-colors"
                    data-icon="database"
                  >
                    database
                  </span>
                </div>
                {/*  Layer 3  */}
                <div className="glass-card p-6 rounded-lg border-l-4 border-primary-fixed flex items-center gap-6 transform hover:translate-x-4 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-headline font-black">
                    03
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg">
                      Biometric Anchor
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      High-fidelity nose-print and retinal scan verification.
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined ml-auto text-on-surface-variant group-hover:text-primary-fixed transition-colors"
                    data-icon="sensors"
                  >
                    sensors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Comparison Table  */}
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-outline-variant/15 glass-card">
            <div className="p-8 border-b border-outline-variant/15">
              <h2 className="text-3xl font-headline font-black italic tracking-tighter">
                NETWORK COMPARISON
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-highest">
                    <th className="p-6 text-on-surface-variant font-bold text-xs tracking-widest uppercase">
                      Feature
                    </th>
                    <th className="p-6 text-primary-fixed font-bold text-xs tracking-widest uppercase">
                      NeonPet ID
                    </th>
                    <th className="p-6 text-on-surface-variant font-bold text-xs tracking-widest uppercase">
                      Legacy Microchip
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/15">
                  <tr className="hover:bg-primary-fixed/5 transition-colors">
                    <td className="p-6 font-bold">Data Sovereignty</td>
                    <td className="p-6 text-primary-fixed">
                      <span
                        className="material-symbols-outlined"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      Full Control
                    </td>
                    <td className="p-6 text-on-surface-variant">
                      Centralized Registry
                    </td>
                  </tr>
                  <tr className="hover:bg-primary-fixed/5 transition-colors">
                    <td className="p-6 font-bold">Global Utility</td>
                    <td className="p-6 text-primary-fixed">
                      <span
                        className="material-symbols-outlined"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      Universal
                    </td>
                    <td className="p-6 text-on-surface-variant">
                      Database Silos
                    </td>
                  </tr>
                  <tr className="hover:bg-primary-fixed/5 transition-colors">
                    <td className="p-6 font-bold">Medical Logs</td>
                    <td className="p-6 text-primary-fixed">
                      <span
                        className="material-symbols-outlined"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                      Real-time Sync
                    </td>
                    <td className="p-6 text-on-surface-variant">
                      Manual Transfer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/*  Registration Form  */}
        <section className="px-6 py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <h2 className="text-4xl font-headline font-black italic tracking-tighter mb-8">
              SECURE REGISTRATION
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                    Pet Legal Name
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed text-on-surface"
                    placeholder="e.g., Luna Star"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                    Species/Breed
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed text-on-surface"
                    placeholder="e.g., Golden Retriever"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">
                  Microchip Number (Optional)
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-fixed text-on-surface"
                  placeholder="15-digit ISO number"
                  type="text"
                />
              </div>
              <div className="p-6 bg-surface-container-highest rounded-xl border border-outline-variant/15 flex items-center gap-4 cursor-pointer hover:border-primary-fixed/50 transition-colors">
                <span
                  className="material-symbols-outlined text-4xl text-primary-fixed"
                  data-icon="upload_file"
                >
                  upload_file
                </span>
                <div>
                  <p className="font-bold">Upload Biometric Photo</p>
                  <p className="text-xs text-on-surface-variant">
                    Front-facing clear portrait of your pet's face
                  </p>
                </div>
              </div>
              <button
                className="w-full bg-primary-container text-on-primary-container font-headline font-black text-lg py-5 rounded-full hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(202,253,0,0.3)]"
                type="submit"
              >
                MINT DIGITAL IDENTITY
              </button>
            </form>
          </div>
        </section>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end pb-6 px-8 bg-[#0e0e0f]/80 backdrop-blur-2xl z-50 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#f3ffca] to-[#cafd00] text-[#4a5e00] rounded-full p-3 scale-110 -translate-y-2 shadow-[0_0_20px_rgba(202,253,0,0.4)] transition-all duration-300 ease-out">
          <span
            className="material-symbols-outlined"
            data-icon="fingerprint"
            style={{ fontVariationSettings: "&quot" }}
          >
            fingerprint
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">
            Identity
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#adaaab] opacity-60 p-3 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined" data-icon="sensors">
            sensors
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">
            Verify
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#adaaab] opacity-60 p-3 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined" data-icon="database">
            database
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">
            Assets
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#adaaab] opacity-60 p-3 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined" data-icon="settings">
            settings
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">
            Profile
          </span>
        </div>
      </nav>
      {/*  Footer Content  */}
      <footer className="bg-surface-container-lowest py-12 px-6 border-t border-outline-variant/15 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-xl font-black italic text-[#f3ffca] tracking-tighter font-headline">
            NeonPet ID
          </div>
          <div className="flex justify-center gap-8 text-sm text-on-surface-variant">
            <a className="hover:text-primary-fixed transition-colors" href="#">
              Legal Framework
            </a>
            <a className="hover:text-primary-fixed transition-colors" href="#">
              Privacy Nodes
            </a>
            <a className="hover:text-primary-fixed transition-colors" href="#">
              API Docs
            </a>
          </div>
          <p className="text-[10px] text-outline tracking-widest uppercase">
            © 2024 Kinetic Pet Identity Infrastructure. All Pet Hashes Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
