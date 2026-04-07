import React from 'react';

export default function Experiment() {
  return (
    <>
      {/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
<div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
<div className="text-2xl font-black text-[#f3ffca] tracking-tighter font-headline">PAWID</div>
<div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight text-sm">
<a className="text-[#cafd00] border-b-2 border-[#cafd00] pb-1 hover:scale-105 transition-transform duration-200" href="#">Identity</a>
<a className="text-[#adaaab] hover:text-[#f3ffca] transition-colors hover:scale-105 transition-transform duration-200" href="#">Health</a>
<a className="text-[#adaaab] hover:text-[#f3ffca] transition-colors hover:scale-105 transition-transform duration-200" href="#">AI Vet</a>
<a className="text-[#adaaab] hover:text-[#f3ffca] transition-colors hover:scale-105 transition-transform duration-200" href="#">Passport</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-[#adaaab] font-headline font-bold text-sm hover:text-white transition-colors">Login</button>
<button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-headline font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-200">Join Now</button>
</div>
</div>
</nav>
<main className="pt-24">
{/*  Hero Section  */}
<section className="relative min-h-[921px] flex items-center px-8 md:px-16 overflow-hidden">
<div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="z-10">
<span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">India's First Pet OS</span>
<h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter mb-8">
                        The Future of <span className="text-primary-fixed">Pet Care</span> is Digital.
                    </h1>
<p className="text-on-surface-variant text-lg md:text-xl max-w-md mb-10 leading-relaxed">
                        Secure your pet's identity, health records, and global passport in one unified operating system.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-headline font-extrabold text-lg hover:scale-105 transition-transform">Create Free PetID</button>
<button className="glass-card text-white px-8 py-4 rounded-full font-headline font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                            See How It Works
                            <span className="material-symbols-outlined">play_circle</span>
</button>
</div>
</div>
<div className="relative flex justify-center lg:justify-end">
<div className="relative w-full aspect-square max-w-xl">
<div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
<img alt="Premium Pet Portrait" className="relative z-10 w-full h-full object-cover rounded-xl border-4 border-surface-variant shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700" data-alt="High quality studio portrait of a futuristic looking French Bulldog" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMDLQXFo0b5aLnW7mUqQS8vISx1gf61zWR7H8ROTI1s5khA2DiLbUn1VxwbWGu_DUrL-K1eRp8XvOK_znp2mkgnbebyQ4s4uv0xcAo_6b7Gl8FELzJfgx_V-VaTn6VpC3gGxDTuAqJ8wgx9nsVEQ2bECSvgW-zO48RSMTlcc5aKmx6iCtdON0prQOFS3OnCaOcTEOcglSi3dLuaV3R2ZpF4t9HzpKnqs4QMJWRfTY8m_ifq-zjoUQI_djMS5l2jUOwrbjlFYfOPIlK"/>
{/*  Floating Pill  */}
<div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-xl border border-outline-variant/20 shadow-xl">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{'fontVariationSettings': '\'FILL\' 1'}}>verified</span>
</div>
<div>
<div className="text-white font-bold">Bruno's Passport</div>
<div className="text-xs text-on-surface-variant">Verified by PAWID</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Trust Bar  */}
<section className="py-12 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-8 flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
<div className="flex flex-col items-center">
<span className="text-3xl font-black font-headline">50K+</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Pets Registered</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-black font-headline">1.2K+</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Verified Vets</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-black font-headline">100%</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Data Encrypted</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-black font-headline">24/7</span>
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant">AI Monitoring</span>
</div>
</div>
</section>
{/*  The 4 Pillars (Bento Grid)  */}
<section className="py-32 px-8 max-w-screen-2xl mx-auto">
<div className="mb-20">
<h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-4">The Four Pillars of PAWID.</h2>
<p className="text-on-surface-variant max-w-xl text-lg">A complete ecosystem designed to make pet parenting as seamless as your favorite tech products.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
{/*  Pillar 1: Identity  */}
<div className="md:col-span-8 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between overflow-hidden group">
<div>
<span className="text-primary-fixed text-sm font-bold tracking-widest uppercase mb-4 block">01. Identity</span>
<h3 className="text-4xl font-black font-headline mb-4">Unified PetID</h3>
<p className="text-on-surface-variant max-w-sm">One digital profile for life. Scanable tags that store medical data, owner info, and insurance.</p>
</div>
<div className="relative mt-8 h-64 bg-surface-container-highest rounded-lg flex items-center justify-center">
<div className="w-48 h-64 bg-primary-container rounded-lg rotate-12 shadow-2xl flex items-center justify-center p-6 text-on-primary-container overflow-hidden group-hover:rotate-6 transition-transform">
<div className="border-2 border-on-primary-container/20 w-full h-full rounded flex flex-col items-center justify-center gap-2">
<span className="material-symbols-outlined text-4xl">qr_code_2</span>
<span className="text-[10px] font-bold">SCAN FOR INFO</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
</div>
</div>
{/*  Pillar 2: Health Records  */}
<div className="md:col-span-4 bg-secondary-container rounded-xl p-10 flex flex-col justify-between group">
<div>
<span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">02. Records</span>
<h3 className="text-4xl font-black font-headline mb-4 text-on-secondary-container">Health Ledger</h3>
<p className="text-on-secondary-container/80">Automated vault for vaccines, prescriptions, and lab reports.</p>
</div>
<div className="flex justify-center py-8">
<span className="material-symbols-outlined text-8xl text-secondary opacity-40 group-hover:scale-110 transition-transform">history_edu</span>
</div>
</div>
{/*  Pillar 3: AI Vet  */}
<div className="md:col-span-5 bg-surface-container-highest rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10 group">
<div>
<span className="text-tertiary text-sm font-bold tracking-widest uppercase mb-4 block">03. Support</span>
<h3 className="text-4xl font-black font-headline mb-4">BharatPetGPT</h3>
<p className="text-on-surface-variant">Localized AI that speaks 12+ Indian languages. Instant symptom check and triage.</p>
</div>
<div className="mt-8 flex gap-2">
<div className="bg-surface-bright px-4 py-2 rounded-full text-xs text-on-surface-variant">Hindi</div>
<div className="bg-surface-bright px-4 py-2 rounded-full text-xs text-on-surface-variant">Tamil</div>
<div className="bg-surface-bright px-4 py-2 rounded-full text-xs text-on-surface-variant">Bengali</div>
</div>
</div>
{/*  Pillar 4: Passport  */}
<div className="md:col-span-7 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between overflow-hidden group">
<div className="flex justify-between items-start">
<div>
<span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">04. Mobility</span>
<h3 className="text-4xl font-black font-headline mb-4">Pet Passport</h3>
<p className="text-on-surface-variant max-w-sm">Travel internationally with ease. All certifications pre-validated for major airlines.</p>
</div>
<div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center group-hover:rotate-90 transition-transform">
<span className="material-symbols-outlined text-on-primary-container text-3xl">flight_takeoff</span>
</div>
</div>
<div className="mt-8 flex gap-4 overflow-hidden">
<div className="min-w-[200px] h-32 bg-surface-container-highest rounded-lg p-4 border border-outline-variant/20">
<div className="flex justify-between mb-2">
<span className="text-[10px] text-on-surface-variant uppercase">Destination</span>
<span className="text-[10px] text-primary">Ready</span>
</div>
<div className="text-lg font-bold">DUBAI (DXB)</div>
</div>
<div className="min-w-[200px] h-32 bg-surface-container-highest rounded-lg p-4 border border-outline-variant/20">
<div className="flex justify-between mb-2">
<span className="text-[10px] text-on-surface-variant uppercase">Destination</span>
<span className="text-[10px] text-primary">Ready</span>
</div>
<div className="text-lg font-bold">LONDON (LHR)</div>
</div>
</div>
</div>
</div>
</section>
{/*  AI Vet Focus Section  */}
<section className="py-32 px-8 bg-[#131314]">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="absolute -inset-10 bg-secondary/10 blur-[100px] rounded-full"></div>
<div className="glass-card rounded-xl p-8 border border-outline-variant/20 relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary" style={{'fontVariationSettings': '\'FILL\' 1'}}>smart_toy</span>
</div>
<div>
<h4 className="font-bold text-xl">BharatPetGPT</h4>
<p className="text-xs text-on-surface-variant">Active Now • Response in &lt;1s</p>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="bg-surface-variant p-4 rounded-lg rounded-tl-none max-w-[80%] text-sm">
                                Hello! I'm your PAWID AI assistant. How is your pet feeling today?
                            </div>
<div className="bg-secondary-container p-4 rounded-lg rounded-tr-none ml-auto max-w-[80%] text-sm text-on-secondary-container">
                                My Golden Retriever hasn't eaten since morning and seems a bit lethargic.
                            </div>
<div className="bg-surface-variant p-4 rounded-lg rounded-tl-none max-w-[80%] text-sm">
<div className="flex items-center gap-2 mb-2 text-primary">
<span className="material-symbols-outlined text-sm">analytics</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Analyzing Symptoms</span>
</div>
                                Lethargy in Golden Retrievers can be due to heat or dietary changes. Since it's 34°C in Mumbai, try offering water. I've noted this in his health ledger. Should I notify Dr. Sharma?
                            </div>
</div>
<div className="bg-surface-container-highest p-4 rounded-full flex items-center justify-between border border-outline-variant/20">
<span className="text-on-surface-variant text-sm px-4">Type a symptom...</span>
<button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
<div>
<span className="bg-primary/10 text-primary-fixed px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">24/7 Virtual Care</span>
<h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8">The Vet in Your Pocket.</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
<div>
<span className="font-bold block text-xl">Instant Triage</span>
<p className="text-on-surface-variant">Determine if it's an emergency or something that can be handled at home.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
<div>
<span className="font-bold block text-xl">Multilingual Support</span>
<p className="text-on-surface-variant">Available in Hindi, Marathi, Bengali, and 10+ other languages.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
<div>
<span className="font-bold block text-xl">History Sync</span>
<p className="text-on-surface-variant">Every conversation is saved and synced with your pet's medical record for vet review.</p>
</div>
</li>
</ul>
</div>
</div>
</section>
{/*  How It Works  */}
<section className="py-32 px-8 max-w-screen-2xl mx-auto">
<div className="text-center mb-24">
<h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-4">Simple as 1-2-3-4.</h2>
<p className="text-on-surface-variant text-lg">Onboarding your pet takes less than 60 seconds.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="relative">
<div className="text-9xl font-black text-surface-container-highest absolute -top-12 -left-4 z-0">1</div>
<div className="relative z-10">
<h4 className="text-2xl font-bold font-headline mb-4">Download App</h4>
<p className="text-on-surface-variant">Available on iOS and Android. Create your guardian profile.</p>
</div>
</div>
<div className="relative">
<div className="text-9xl font-black text-surface-container-highest absolute -top-12 -left-4 z-0">2</div>
<div className="relative z-10">
<h4 className="text-2xl font-bold font-headline mb-4">Create PetID</h4>
<p className="text-on-surface-variant">Add your pet's details and generate their unique digital identity.</p>
</div>
</div>
<div className="relative">
<div className="text-9xl font-black text-surface-container-highest absolute -top-12 -left-4 z-0">3</div>
<div className="relative z-10">
<h4 className="text-2xl font-bold font-headline mb-4">Sync Records</h4>
<p className="text-on-surface-variant">Upload past medical history. Our AI automatically extracts data.</p>
</div>
</div>
<div className="relative">
<div className="text-9xl font-black text-surface-container-highest absolute -top-12 -left-4 z-0">4</div>
<div className="relative z-10">
<h4 className="text-2xl font-bold font-headline mb-4">Order Tag</h4>
<p className="text-on-surface-variant">Get a physical PAWID tag linked to your digital account.</p>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="px-8 mb-20">
<div className="max-w-screen-2xl mx-auto bg-primary-container rounded-xl py-20 px-12 text-on-primary-container text-center relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 pointer-events-none" style={{'backgroundImage': 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', 'backgroundSize': '24px 24px'}}></div>
<h2 className="text-5xl md:text-8xl font-black font-headline tracking-tighter mb-8 leading-tight">Ready to Upgrade<br/>Your Pet's Life?</h2>
<div className="flex flex-wrap justify-center gap-6 relative z-10">
<button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform group">
<span className="material-symbols-outlined text-4xl">phone_iphone</span>
<div className="text-left">
<div className="text-[10px] uppercase font-bold opacity-60">Download on</div>
<div className="text-xl font-bold font-headline">App Store</div>
</div>
</button>
<button className="bg-black text-white px-8 py-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform group">
<span className="material-symbols-outlined text-4xl">play_arrow</span>
<div className="text-left">
<div className="text-[10px] uppercase font-bold opacity-60">Get it on</div>
<div className="text-xl font-bold font-headline">Google Play</div>
</div>
</button>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full rounded-t-[3rem] mt-20 bg-[#131314]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-screen-2xl mx-auto">
<div className="md:col-span-1">
<div className="text-xl font-black text-[#f3ffca] mb-4 font-headline">PAWID</div>
<p className="text-on-surface-variant text-xs leading-relaxed mb-6">
                    Redefining pet care for the modern digital age. Built with love in Bengaluru.
                </p>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
<span className="material-symbols-outlined text-sm">share</span>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<span className="font-headline font-bold text-xs uppercase tracking-widest text-[#cafd00]">Ecosystem</span>
<a className="text-[#adaaab] hover:text-white text-xs uppercase tracking-widest hover:translate-x-1 transition-all" href="#">Identity</a>
<a className="text-[#adaaab] hover:text-white text-xs uppercase tracking-widest hover:translate-x-1 transition-all" href="#">Health</a>
<a className="text-[#adaaab] hover:text-white text-xs uppercase tracking-widest hover:translate-x-1 transition-all" href="#">AI Vet</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-headline font-bold text-xs uppercase tracking-widest text-[#cafd00]">Company</span>
<a className="text-[#adaaab] hover:text-white text-xs uppercase tracking-widest hover:translate-x-1 transition-all" href="#">Support</a>
<a className="text-[#adaaab] hover:text-white text-xs uppercase tracking-widest hover:translate-x-1 transition-all" href="#">Press Kit</a>
<a className="text-[#adaaab] hover:text-white text-xs uppercase tracking-widest hover:translate-x-1 transition-all" href="#">Terms of Service</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-headline font-bold text-xs uppercase tracking-widest text-[#cafd00]">Newsletter</span>
<p className="text-xs text-on-surface-variant mb-4">Get pet-tech news in your inbox.</p>
<div className="flex bg-surface-container-highest rounded-full p-1 pl-4 items-center">
<input className="bg-transparent border-none text-xs focus:ring-0 w-full placeholder:text-on-surface-variant" placeholder="Email Address" type="text"/>
<button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-[10px] font-black uppercase">Join</button>
</div>
</div>
</div>
<div className="border-t border-outline-variant/10 px-12 py-8 text-center md:text-left">
<span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-on-surface-variant">
                © 2024 PAWID. Kinetic Sophistication for Pets.
            </span>
</div>
</footer>
    </>
  );
}
