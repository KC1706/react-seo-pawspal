import React, { useState, useEffect } from 'react';

const commonBreedsDB = {
  "Dog": [
    "Indian Pariah (Indie)", "Labrador Retriever", "Golden Retriever", "German Shepherd",
    "Beagle", "Pomeranian", "Pug", "Shih Tzu", "Rottweiler", "Bulldog", "Dachshund",
    "Great Dane", "Boxer", "Doberman", "Husky", "Pitbull", "Mixed/Unknown", "Other"
  ],
  "Cat": [
    "Indian Billi (Indie)", "Persian", "Siamese", "Maine Coon", "Bengal",
    "Himalayan", "British Shorthair", "Ragdoll", "Mixed/Unknown", "Other"
  ]
};

export default function PetIDWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pawidData, setPawidData] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js';
    document.head.appendChild(script);

    const authScript = document.createElement('script');
    authScript.src = 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth-compat.js';
    document.head.appendChild(authScript);
    
    authScript.onload = () => {
      const firebaseConfig = {
        apiKey: "AIzaSyCDBWaH-7wHavdmr5P3Iyc0pEFnZgdNjHg",
        authDomain: "pawspalconnect-storage.firebaseapp.com",
        projectId: "pawspalconnect-storage",
        storageBucket: "pawspalconnect-storage.firebasestorage.app",
        messagingSenderId: "614707455963",
        appId: "1:614707455963:web:32f21b0e2e4e81ba6b29fe"
      };
      if (window.firebase && !window.firebase.apps.length) {
        window.firebase.initializeApp(firebaseConfig);
      }
    };
  }, []);

  const nextStep = (from) => {
    if (from === 1) {
      const name = document.getElementById('pw_ownerName')?.value.trim();
      const email = document.getElementById('pw_email')?.value.trim();
      const phone = document.getElementById('pw_phone')?.value.trim();
      const country = document.getElementById('o_country')?.value;
      if (!name || !email || !phone || !country) { alert('Please fill in all required fields (Name, Email, Phone, Country).'); return; }
      
      const phoneRegex = /^\+?[\d\s\-()]{10,20}$/;
      const phoneDigits = phone.replace(/\D/g, '');
      if (!phoneRegex.test(phone) || phoneDigits.length < 10 || phoneDigits.length > 15) {
        alert('Please enter a valid phone number with 10 to 15 digits (e.g. +91 98765 43210).');
        return;
      }
    }
    if (from === 2) {
      const pname = document.getElementById('pw_petName')?.value.trim();
      const pdob = document.getElementById('p_dob')?.value;
      const pgender = document.getElementById('p_gender')?.value;
      const pspecies = document.getElementById('pw_petSpecies')?.value;
      if (!pname || !pdob || !pgender || !pspecies) { alert('Please fill in pet name, date of birth, gender, and select a species.'); return; }
      
      const dobDate = new Date(pdob);
      const today = new Date();
      if (isNaN(dobDate.getTime())) { alert('Please enter a valid date of birth.'); return; }
      if (dobDate > today) { alert('Pet date of birth cannot be in the future.'); return; }
      const ageInYears = (today - dobDate) / (1000 * 60 * 60 * 24 * 365.25);
      if (ageInYears > 30) { alert('Please enter a valid date of birth. Pet age cannot exceed 30 years.'); return; }
    }
    if (from === 3) {
      // Populate review fields dynamically upon transition
      const populate = (id, val) => { if (document.getElementById(id)) document.getElementById(id).textContent = val || '—'; };
      populate('r_name', document.getElementById('pw_ownerName')?.value);
      populate('r_email', document.getElementById('pw_email')?.value);
      populate('r_phone', document.getElementById('pw_phone')?.value);
      populate('r_loc', (document.getElementById('pw_ownerCity')?.value || '') + ', ' + (document.getElementById('o_country')?.value || ''));
      populate('r_pname', document.getElementById('pw_petName')?.value);
      populate('r_species', (document.getElementById('pw_petSpecies')?.value || '') + ' / ' + (document.getElementById('pw_petBreed')?.value || ''));
      populate('r_dob', document.getElementById('p_dob')?.value);
      populate('r_chip', document.getElementById('p_chip')?.value);
      populate('r_gender', document.getElementById('p_gender')?.value);
      populate('r_vet', document.getElementById('h_vet')?.value);
      populate('r_lvisit', document.getElementById('h_lastvisit')?.value);
      
      const vaccList = ['v1','v2','v3','v4','v5','v6','v7','v8'];
      const vaccNames = ['Rabies', 'Distemper', 'Parvovirus', 'Hepatitis', 'Bordetella', 'Leptospirosis', 'Influenza', 'FVRCP'];
      let vArr = [];
      vaccList.forEach((chk, idx) => { if (document.getElementById(chk)?.checked) vArr.push(vaccNames[idx]); });
      populate('r_vacc', vArr.join(', '));
    }
    if (from === 4) {
      const pass = document.getElementById('pw_pass')?.value;
      const pass2 = document.getElementById('pw_pass_confirm')?.value;
      if (!pass || !pass2 || pass !== pass2) { alert('Passwords do not match or are empty!'); return; }
      if (!document.getElementById('c1')?.checked || !document.getElementById('c2')?.checked || !document.getElementById('c3')?.checked) { alert('Please accept all terms and conditions to proceed.'); return; }
      pwSubmitGenerator();
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = (from) => {
    setCurrentStep((prev) => prev - 1);
  };

  const selectRadio = (group, val, el) => {
    const nodes = document.querySelectorAll('#species_grid .rc');
    nodes.forEach(r => r.classList.remove('sel'));
    el.classList.add('sel');
    document.getElementById('pw_petSpecies').value = val;
    setSelectedSpecies(val);
  };

  const pwSubmitGenerator = async () => {
    setIsLoading(true);
    const btn = document.getElementById('submit-btn');
    if(btn) btn.innerText = "Registering...";

    const ownerName = document.getElementById('pw_ownerName').value;
    const ownerPhone = document.getElementById('pw_phone').value;
    const ownerEmail = document.getElementById('pw_email').value;
    const ownerPass = document.getElementById('pw_pass').value;

    try {
      const cred = await window.firebase.auth().createUserWithEmailAndPassword(ownerEmail, ownerPass);
      await cred.user.sendEmailVerification();
      const idToken = await cred.user.getIdToken();

      const backendRes = await fetch("https://api.pawspalconnect.com/authentication/register", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${idToken}` },
        body: JSON.stringify({ name: ownerName, email: ownerEmail, mobile: ownerPhone, password: ownerPass, role: "pet_owner" })
      });

      if (!backendRes.ok) throw new Error("Failed to create Pet Owner account.");
      const backendData = await backendRes.json();
      const backendToken = backendData.access_token;

      const pawidRes = await fetch("https://api.pawspalconnect.com/pet-id/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${backendToken}` },
        body: JSON.stringify({
          owner: { full_name: ownerName, email: ownerEmail, phone_number: ownerPhone, country: document.getElementById('o_country')?.value || "India", id_type: document.getElementById('o_idtype')?.value || "Not Provided", id_number: document.getElementById('o_idnum')?.value || "Not Provided" },
          pet: {
            name: document.getElementById('pw_petName')?.value || "Bruno",
            dob: document.getElementById('p_dob')?.value,
            species: document.getElementById('pw_petSpecies')?.value || "Dog",
            breed: document.getElementById('pw_petBreed')?.value,
            gender: document.getElementById('p_gender')?.value
          },
          health: {}
        })
      });

      if (!pawidRes.ok) throw new Error("Failed to link Pet to the registry.");
      const pawidDataRes = await pawidRes.json();
      setPawidData(pawidDataRes);

      setTimeout(() => {
        if(document.getElementById('sc_name')) document.getElementById('sc_name').innerText = pawidDataRes.pet_name;
        if(document.getElementById('sc_breed')) document.getElementById('sc_breed').innerText = (document.getElementById('pw_petBreed')?.value || '') + " · " + (document.getElementById('pw_petSpecies')?.value || '');
        if(document.getElementById('sc_owner')) document.getElementById('sc_owner').innerText = ownerName;
        if(document.getElementById('sc_city')) document.getElementById('sc_city').innerText = document.getElementById('pw_ownerCity')?.value || 'India';
        if(document.getElementById('sc_date')) document.getElementById('sc_date').innerText = new Date().toLocaleDateString();
        if(document.getElementById('sc_pawid_full')) document.getElementById('sc_pawid_full').innerText = pawidDataRes.ppc_id;
        if(document.getElementById('generated-id')) document.getElementById('generated-id').innerText = pawidDataRes.ppc_id;
      }, 500);

      setCurrentStep(6);
    } catch (error) {
      console.error(error);
      alert("Registration Error: " + error.message);
      if(btn) btn.innerText = "🐾 Generate PetID →";
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPawidCard = () => alert('Downloading PDF logic natively executed.');
  const openVerifyModal = () => window.location.href = 'https://dev.pawspalconnect.com/login';
  const copyID = () => { navigator.clipboard.writeText(pawidData?.ppc_id || ''); alert('Copied!'); };
  const closeModal = () => window.location.href = 'https://dev.pawspalconnect.com/login';
  const showSmartCardOrder = () => alert('Order Details');
  const downloadPetIDPDF = () => alert('PDF Processing');

  return (
    <>
      <div className="modal" id="modal" style={{display: currentStep >= 6 ? "none" : "block"}}>


        <div className="mhead">
          <h2>🐾 Create Your PetID</h2>
          <p>A permanent, verified digital identity for your pet. Free forever.</p>
        </div>

        <div className="prog">
          <div className="prog-bars">
            <div className={`pb-bar ${currentStep >= 1 ? "active done" : ""}`}></div>
            <div style={{'width': '4px'}}></div>
            <div className={`pb-bar ${currentStep >= 2 ? "active done" : ""}`}></div>
            <div style={{'width': '4px'}}></div>
            <div className={`pb-bar ${currentStep >= 3 ? "active done" : ""}`}></div>
            <div style={{'width': '4px'}}></div>
            <div className={`pb-bar ${currentStep >= 4 ? "active done" : ""}`}></div>
            <div style={{'width': '4px'}}></div>
            <div className={`pb-bar ${currentStep >= 5 ? "active done" : ""}`}></div>
          </div>
          <div className="prog-labels">
            <span className={`plab ${currentStep >= 1 ? "active" : ""}`}>Owner</span>
            <span className={`plab ${currentStep >= 2 ? "active" : ""}`}>Pet Info</span>
            <span className={`plab ${currentStep >= 3 ? "active" : ""}`}>Health</span>
            <span className={`plab ${currentStep >= 4 ? "active" : ""}`}>Review</span>
            <span className={`plab ${currentStep >= 5 ? "active" : ""}`}>Done!</span>
          </div>
        </div>

        <div className="fbody">

          {/*  STEP 1: OWNER INFO  */}
          <div className={"fstep" + (currentStep === 1 ? " active" : "")} id="step1" style={{display: currentStep === 1 ? "block" : "none"}}>
            <div className="sdiv">Owner Information</div>
            <div className="fg c2">
              <div><label>Full Name <span className="req">*</span></label><input type="text" id="pw_ownerName"
                  placeholder="Rahul Sharma" /></div>
              <div><label>Email Address <span className="req">*</span></label><input type="email" id="pw_email"
                  placeholder="rahul@email.com" /></div>
            </div>
            <div className="fg c2">
              <div><label>Phone Number <span className="req">*</span></label><input type="tel" id="pw_phone"
                  placeholder="+91 98765 43210" /></div>
              <div><label>Country <span className="req">*</span></label>
                <select id="o_country">
                  <option value="">Select country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>UAE</option>
                  <option>Singapore</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="fg c2">
              <div><label>City</label><input type="text" id="pw_ownerCity" placeholder="Bangalore" /></div>
              <div><label>ID Type</label>
                <select id="o_idtype">
                  <option value="">Select ID type</option>
                  <option>Aadhaar (India)</option>
                  <option>PAN Card</option>
                  <option>Passport</option>
                  <option>Driver's License</option>
                  <option>National ID</option>
                </select>
              </div>
            </div>
            <div className="fg">
              <div><label>Government ID Number</label><input type="text" id="o_idnum"
                  placeholder="For ownership verification (encrypted & secure)" /></div>
            </div>
            <p style={{'fontSize': '12px', 'color': 'var(--text3)', 'marginTop': '8px', 'lineHeight': '1.5'}}>🔒 Your personal data is
              encrypted and used only for ownership verification. PAWID never shares your data.</p>
            <div className="faction"><span className="sc">Step 1 of 4</span><button className="bnx" onClick={() => nextStep(1)}>Next: Pet
                Info →</button></div>
          </div>

          {/*  STEP 2: PET INFO  */}
          <div className={"fstep" + (currentStep === 2 ? " active" : "")} id="step2" style={{display: currentStep === 2 ? "block" : "none"}}>
            <div className="sdiv">Pet Basic Information</div>
            <div className="fg c2">
              <div><label>Pet Name <span className="req">*</span></label><input type="text" id="pw_petName"
                  placeholder="Bruno" /></div>
              <div><label>Date of Birth <span className="req">*</span></label><input type="date" id="p_dob" /></div>
            </div>
            <div style={{'marginBottom': '14px'}}>
              <label>Species <span className="req">*</span></label>
              <div className="radio-g" id="species_grid" style={{'gridTemplateColumns': 'repeat(2, 1fr)'}}>
                <div className="rc" onClick={(e) => selectRadio('species', 'Dog', e.currentTarget)}>
                  <div className="ri">🐕</div>
                  <div className="rl">Dog</div>
                </div>
                <div className="rc" onClick={(e) => selectRadio('species', 'Cat', e.currentTarget)}>
                  <div className="ri">🐈</div>
                  <div className="rl">Cat</div>
                </div>
              </div>
              <input type="hidden" id="pw_petSpecies" value={selectedSpecies} />
            </div>
            <div className="fg c2">
              <div>
                <label>Breed</label>
                <input type="text" id="pw_petBreed" list="breed_list" placeholder={selectedSpecies ? `Search or type ${selectedSpecies.toLowerCase()} breed...` : "Select species first"} disabled={!selectedSpecies} />
                <datalist id="breed_list">
                  {selectedSpecies && commonBreedsDB[selectedSpecies]?.map(breed => (
                    <option key={breed} value={breed} />
                  ))}
                </datalist>
                <div style={{'fontSize': '11px', 'color': 'var(--text3)', 'marginTop': '4px', 'display': selectedSpecies ? 'none' : 'block'}}>Select species to load breeds</div>
              </div>
              <div><label>Gender <span className="req">*</span></label>
                <select id="p_gender">
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Male (neutered)</option>
                  <option>Female (spayed)</option>
                </select>
              </div>
            </div>
            <div className="fg c3">
              <div><label>Coat Color</label><input type="text" id="p_color" placeholder="Golden, Black, etc." /></div>
              <div><label>Weight (kg)</label><input type="number" id="p_weight" placeholder="25" min="0" step="0.1" />
              </div>
              <div><label>Distinctive Marks</label><input type="text" id="p_marks" placeholder="White patch on chest" />
              </div>
            </div>
            <div className="fg c2">
              <div>
                <label>Blood Group</label>
                <select id="p_blood">
                  <option value="">Select blood group</option>
                  <option>DEA 1.1 Positive</option>
                  <option>DEA 1.1 Negative</option>
                  <option>DEA 1.2 Positive</option>
                  <option>DEA 1.2 Negative</option>
                  <option>DEA 3</option>
                  <option>DEA 4</option>
                  <option>DEA 5</option>
                  <option>Type A (Cat)</option>
                  <option>Type B (Cat)</option>
                  <option>Type AB (Cat)</option>
                  <option>Unknown</option>
                </select>
              </div>
              <div>
                <label>Pet Photo URL <span style={{'fontSize': '11px', 'color': 'var(--text3)'}}>(or leave blank for
                    default)</span></label>
                <input type="text" id="p_photo" placeholder="https://... or leave blank" />
              </div>
            </div>
            <div className="sdiv">Identification</div>
            <div className="fg c2">
              <div><label>Microchip Number</label><input type="text" id="p_chip"
                  placeholder="900182001234567 (15 digits)" /></div>
              <div><label>Existing Tag/License No.</label><input type="text" id="p_tag" placeholder="If any" /></div>
            </div>
            <div className="faction">
              <button className="bbk" onClick={() => prevStep(2)}>← Back</button>
              <span className="sc">Step 2 of 4</span>
              <button className="bnx" onClick={() => nextStep(2)}>Next: Health Records →</button>
            </div>
          </div>

          {/*  STEP 3: HEALTH  */}
          <div className={"fstep" + (currentStep === 3 ? " active" : "")} id="step3" style={{display: currentStep === 3 ? "block" : "none"}}>
            <div className="sdiv">Veterinary Information</div>
            <div className="fg c2">
              <div><label>Primary Vet Clinic</label><input type="text" id="h_vet"
                  placeholder="Caring Paws Veterinary, Bangalore" /></div>
              <div><label>Vet Doctor Name</label><input type="text" id="h_vetdr" placeholder="Dr. Priya Menon" /></div>
            </div>
            <div className="fg c2">
              <div><label>Last Vet Visit</label><input type="date" id="h_lastvisit" /></div>
              <div><label>Next Appointment</label><input type="date" id="h_nextvisit" /></div>
            </div>
            <div className="sdiv">Vaccination History</div>
            <div className="vg">
              <div className="vi"><input type="checkbox" id="v1" /><label htmlFor="v1">Rabies</label></div>
              <div className="vi"><input type="checkbox" id="v2" /><label htmlFor="v2">Distemper (DHPP)</label></div>
              <div className="vi"><input type="checkbox" id="v3" /><label htmlFor="v3">Parvovirus</label></div>
              <div className="vi"><input type="checkbox" id="v4" /><label htmlFor="v4">Hepatitis</label></div>
              <div className="vi"><input type="checkbox" id="v5" /><label htmlFor="v5">Bordetella</label></div>
              <div className="vi"><input type="checkbox" id="v6" /><label htmlFor="v6">Leptospirosis</label></div>
              <div className="vi"><input type="checkbox" id="v7" /><label htmlFor="v7">Influenza</label></div>
              <div className="vi"><input type="checkbox" id="v8" /><label htmlFor="v8">Feline FVRCP</label></div>
            </div>
            <div className="sdiv">Medical History</div>
            <div className="fg">
              <div><label>Known Medical Conditions</label><textarea id="h_conditions"
                  placeholder="Diabetes, allergies, arthritis... or leave blank if none"></textarea></div>
            </div>
            <div className="fg c2">
              <div><label>Current Medications</label><input type="text" id="h_meds"
                  placeholder="None / list medications" /></div>
              <div><label>Spayed / Neutered?</label>
                <select id="h_spayed">
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Planned</option>
                </select>
              </div>
            </div>
            <div className="fg">
              <div><label>Allergies</label><input type="text" id="h_allergy"
                  placeholder="Food allergies, environmental allergies, or none" /></div>
            </div>
            <div className="faction">
              <button className="bbk" onClick={() => prevStep(3)}>← Back</button>
              <span className="sc">Step 3 of 4</span>
              <button className="bnx" onClick={() => nextStep(3)}>Review & Submit →</button>
            </div>
          </div>

          {/*  STEP 4: REVIEW  */}
          <div className={"fstep" + (currentStep === 4 ? " active" : "")} id="step4" style={{display: currentStep === 4 ? "block" : "none"}}>
            <div className="sdiv">Review Your Information</div>
            <div className="rcard">
              <h4>Owner</h4>
              <div className="rr"><span className="rk">Name</span><span className="rv" id="r_name">—</span></div>
              <div className="rr"><span className="rk">Email</span><span className="rv" id="r_email">—</span></div>
              <div className="rr"><span className="rk">Phone</span><span className="rv" id="r_phone">—</span></div>
              <div className="rr" style={{'border': 'none'}}><span className="rk">Location</span><span className="rv" id="r_loc">—</span>
              </div>
            </div>
            <div className="rcard">
              <h4>Pet</h4>
              <div className="rr"><span className="rk">Name</span><span className="rv" id="r_pname">—</span></div>
              <div className="rr"><span className="rk">Species / Breed</span><span className="rv" id="r_species">—</span></div>
              <div className="rr"><span className="rk">Date of Birth</span><span className="rv" id="r_dob">—</span></div>
              <div className="rr"><span className="rk">Microchip</span><span className="rv" id="r_chip">—</span></div>
              <div className="rr" style={{'border': 'none'}}><span className="rk">Gender</span><span className="rv" id="r_gender">—</span>
              </div>
            </div>
            <div className="rcard">
              <h4>Health</h4>
              <div className="rr"><span className="rk">Primary Vet</span><span className="rv" id="r_vet">—</span></div>
              <div className="rr"><span className="rk">Last Visit</span><span className="rv" id="r_lvisit">—</span></div>
              <div className="rr" style={{'border': 'none'}}><span className="rk">Vaccinations</span><span className="rv"
                  id="r_vacc">—</span></div>
            </div>

            <div className="sdiv">Create Account to Manage PAWID</div>
            <div className="fg c2" style={{'position': 'relative'}}>
              <div><label>Password <span className="req">*</span></label><input type="password" id="pw_pass" /></div>
              <div><label>Confirm Password <span className="req">*</span></label><input type="password"
                  id="pw_pass_confirm" /></div>
            </div>
            <div className="cbox">

              <div className="crow"><input type="checkbox" id="c1" /><label htmlFor="c1">I confirm all information provided is
                  accurate. I am the legal owner or authorized caretaker of this pet.</label></div>
              <div className="crow"><input type="checkbox" id="c2" /><label htmlFor="c2">I agree to the PAWID Terms of Service and
                  Privacy Policy. My pet's health data will be securely stored and used only for identity verification
                  and care services.</label></div>
              <div className="crow"><input type="checkbox" id="c3" /><label htmlFor="c3">I consent to receive important
                  notifications about my pet's health, vaccination reminders, and emergency alerts from Paws Pal
                  Connect.</label></div>
            </div>
            <div className="faction">
              <button className="bbk" onClick={() => prevStep(4)}>← Back</button>
              <span className="sc">Step 4 of 4</span>
              <button className="bnx" onClick={pwSubmitGenerator} id="submit-btn">🐾 Generate PetID →</button>
            </div>
          </div>

          {/*  STEP 5: SUCCESS  */}
          <div className={"fstep" + (currentStep === 5 ? " active" : "")} id="step5" style={{display: currentStep === 5 ? "block" : "none"}}>
            <div className="success-w">
              <div className="sico">🎉</div>
              <h2 style={{'fontSize': '24px', 'fontWeight': '800', 'letterSpacing': '-0.8px', 'marginBottom': '8px'}}>PetID Created!</h2>
              <p style={{'fontSize': '15px', 'color': 'var(--text2)', 'lineHeight': '1.6'}}>Your pet now has a permanent, verified
                digital identity on the PAWID Global Network.</p>
              <div className="petid-gen">
                <div className="petid-lbl">Your Pet's Unique ID</div>
                <div className="petid-val" id="generated-id">PAW-IND-GR-XXXXXX</div>
                <div style={{'fontSize': '12px', 'color': 'var(--text3)', 'marginTop': '10px'}}>Keep this safe · This ID is permanent and
                  globally unique</div>
              </div>
              <div className="sch">
                <span className="chip">✓ Identity verified</span>
                <span className="chip">✓ Profile created</span>
                <span className="chip">✓ Health records stored</span>
                <span className="chip">✓ Passport eligible</span>
              </div>
              <div className="ns">
                <h4>Your next steps</h4>
                <div className="nsi">
                  <div className="nsn">1</div><span>Download the Paws Pal Connect app — access your PetID anytime</span>
                </div>
                <div className="nsi">
                  <div className="nsn">2</div><span>Visit your vet for digital signature to activate Pet Passport</span>
                </div>
                <div className="nsi">
                  <div className="nsn">3</div><span>Connect PetGPT — your AI vet is ready for health queries 24/7</span>
                </div>
                <div className="nsi">
                  <div className="nsn">4</div><span>Share your PetID with vets, groomers, and pet sitters for seamless
                    care</span>
                </div>
              </div>
              {/*  PetID Actions  */}
              <div style={{'display': 'flex', 'gap': '10px', 'justifyContent': 'center', 'marginTop': '20px', 'flexWrap': 'wrap'}}>
                <button className="btn-s" style={{'fontSize': '13px', 'padding': '10px 18px'}} onClick={copyID}>📋 Copy PetID</button>
                <button className="btn-p" style={{'fontSize': '13px', 'padding': '10px 18px'}} onClick={closeModal}>Go to Dashboard
                  →</button>
              </div>

              {/*  DOWNLOAD OPTIONS  */}
              <div style={{'marginTop': '28px', 'borderTop': '1px solid var(--border2)', 'paddingTop': '24px'}}>
                <div
                  style={{'fontSize': '13px', 'fontWeight': '700', 'color': 'var(--text3)', 'textTransform': 'uppercase', 'letterSpacing': '.08em', 'marginBottom': '16px', 'textAlign': 'center'}}>
                  Download & Physical Card</div>
                <div style={{'display': 'grid', 'gridTemplateColumns': '1fr 1fr', 'gap': '14px'}}>

                  {/*  PDF DOWNLOAD CARD  */}
                  <div
                    style={{'background': 'var(--bg3)', 'border': '1.5px solid var(--border2)', 'borderRadius': '14px', 'padding': '20px', 'cursor': 'pointer', 'transition': '.25s', 'textAlign': 'center'}}
                    
                    >
                    <div style={{'fontSize': '32px', 'marginBottom': '10px'}}>📄</div>
                    <div style={{'fontSize': '14px', 'fontWeight': '700', 'color': 'var(--text)', 'marginBottom': '6px'}}>PAWID Certificate
                    </div>
                    <div style={{'fontSize': '12px', 'color': 'var(--text3)', 'lineHeight': '1.5', 'marginBottom': '14px'}}>Aadhaar-style PDF
                      with QR code, full details, health records & official PAWID seal</div>
                    <div style={{'display': 'flex', 'gap': '6px', 'justifyContent': 'center', 'flexWrap': 'wrap', 'marginBottom': '14px'}}>
                      <span
                        style={{'fontSize': '10px', 'background': 'rgba(99,102,241,0.12)', 'color': 'var(--accent3)', 'padding': '3px 8px', 'borderRadius': '50px', 'fontWeight': '600'}}>QR
                        Code</span>
                      <span
                        style={{'fontSize': '10px', 'background': 'rgba(34,197,94,0.1)', 'color': '#4ade80', 'padding': '3px 8px', 'borderRadius': '50px', 'fontWeight': '600'}}>Aadhaar-style</span>
                      <span
                        style={{'fontSize': '10px', 'background': 'rgba(245,158,11,0.1)', 'color': '#fcd34d', 'padding': '3px 8px', 'borderRadius': '50px', 'fontWeight': '600'}}>Free</span>
                    </div>
                    <button onClick={downloadPetIDPDF}
                      style={{'width': '100%', 'background': 'linear-gradient(135deg,var(--accent),var(--accent2))', 'color': 'white', 'border': 'none', 'padding': '10px', 'borderRadius': '8px', 'fontSize': '13px', 'fontWeight': '700', 'cursor': 'pointer'}}>⬇
                      Download PDF</button>
                  </div>

                  {/*  PHYSICAL SMART CARD  */}
                  <div
                    style={{'background': 'var(--bg3)', 'border': '1.5px solid var(--border2)', 'borderRadius': '14px', 'padding': '20px', 'cursor': 'pointer', 'transition': '.25s', 'textAlign': 'center'}}
                    
                    >
                    <div style={{'fontSize': '32px', 'marginBottom': '10px'}}>💳</div>
                    <div style={{'fontSize': '14px', 'fontWeight': '700', 'color': 'var(--text)', 'marginBottom': '6px'}}>Physical Smart Card
                    </div>
                    <div style={{'fontSize': '12px', 'color': 'var(--text3)', 'lineHeight': '1.5', 'marginBottom': '14px'}}>ATM-sized PVC card
                      with QR code. NFC chip coming soon. Delivered to your door.</div>
                    <div style={{'display': 'flex', 'gap': '6px', 'justifyContent': 'center', 'flexWrap': 'wrap', 'marginBottom': '14px'}}>
                      <span
                        style={{'fontSize': '10px', 'background': 'rgba(245,158,11,0.1)', 'color': '#fcd34d', 'padding': '3px 8px', 'borderRadius': '50px', 'fontWeight': '600'}}>ATM
                        Size</span>
                      <span
                        style={{'fontSize': '10px', 'background': 'rgba(99,102,241,0.12)', 'color': 'var(--accent3)', 'padding': '3px 8px', 'borderRadius': '50px', 'fontWeight': '600'}}>QR
                        Code</span>
                      <span
                        style={{'fontSize': '10px', 'background': 'rgba(244,63,94,0.1)', 'color': '#fb7185', 'padding': '3px 8px', 'borderRadius': '50px', 'fontWeight': '600'}}>NFC
                        Soon</span>
                    </div>
                    <button onClick={showSmartCardOrder}
                      style={{'width': '100%', 'background': 'linear-gradient(135deg,#f59e0b,#f97316)', 'color': '#0a0f1e', 'border': 'none', 'padding': '10px', 'borderRadius': '8px', 'fontSize': '13px', 'fontWeight': '700', 'cursor': 'pointer'}}>🪪
                      Preview &amp; Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      
      
      
      
      
      {/*  Success Outcome UI (Hidden initially)  */}
      

      <div id="pawid-success" style={{display: currentStep >= 6 ? "block" : "none", marginTop: "40px", paddingBottom: "40px"}}>
        <div className="smart-card-container" id="cardContainer">
          <div className="smart-card" id="smartCard" onClick={(e) => e.currentTarget.classList.toggle('flipped')}>

            {/*  FRONT  */}
            <div className="smart-card-face smart-card-front">
              <div className="sc-header">
                <div className="sc-brand">
                  <div className="sc-logo" style={{'display': 'flex', 'alignItems': 'center', 'flexShrink': '0'}}><img
                      src="/assets/logo-transparent.png" style={{'height': '38px', 'objectFit': 'contain'}} alt="PawsPal" /></div>
                  <div className="sc-title">
                    <h4>PAWS PAL CONNECT</h4>
                    <p>PAWID SMART CARD</p>
                  </div>
                </div>
                <div className="sc-nfc"><br /><span
                    style={{'fontSize': '8px', 'display': 'block', 'textAlign': 'center', 'color': '#64748b', 'marginTop': '2px'}}>NFC</span>
                </div>
              </div>

              <div className="sc-middle">
                <div className="sc-avatar" id="sc_avatar_bg"></div>
                <div className="sc-pet-info">
                  <h2 id="sc_name">Rocky</h2>
                  <p id="sc_breed">German Shepherd · dog</p>
                  <div className="sc-pills">
                    <div className="sc-pill"> DEA 1.1 Positive</div>
                    <div className="sc-pill sc-pill-blue">2y 1m</div>
                  </div>
                </div>
              </div>

              <div className="sc-bottom">
                <div>
                  <div className="sc-id-row" id="sc_pawid_full">PAW-IND-GR-XXXXXX</div>
                  <div className="sc-owner-label">OWNER</div>
                  <div className="sc-owner-name" id="sc_owner">Rakesh Jha</div>
                </div>
                <div className="sc-qr">
                  {/*  Using live api to generate QR  */}
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=pawid" id="sc_qr_img"
                    alt="QR Code" />
                </div>
              </div>
            </div>

            {/*  BACK  */}
            <div className="smart-card-face smart-card-back">
              <div className="sc-mag-stripe"></div>
              <div className="sc-back-content">
                <div className="sc-badge-right"> NFC Enabled (Soon)</div>
                <div className="sc-signature">Authorized by Paws Pal Connect · PAWID Infrastructure</div>
                <div className="sc-back-meta">
                  <div>
                    <label>ADDRESS</label>
                    <span id="sc_city">Bangalore, India</span>
                  </div>
                  <div style={{'textAlign': 'right'}}>
                    <label>ISSUED</label>
                    <span id="sc_date">13 Mar 2026</span>
                  </div>
                </div>
              </div>
              <div className="sc-back-footer">
                <span> PAWS PAL CONNECT</span>
                <span>pawid.network</span>
              </div>
            </div>

          </div>
        </div>

        <div style={{'textAlign': 'center', 'marginTop': '30px'}}>
          <p style={{'color': 'var(--slate)', 'fontSize': '1.05rem', 'marginBottom': '18px'}}> Tap the card to flip it over.</p>
          <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': '16px'}}>
            <button id="downloadPawidBtn" className="btn" style={{'background': 'var(--slate)', 'color': '#fff', 'border': 'none'}}
              onClick={downloadPawidCard}>📥 Download PAWID Card</button>
            <button className="btn btn-primary" style={{'border': 'none', 'cursor': 'pointer'}} onClick={openVerifyModal}>Go to Pet
              Owner Dashboard &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
}
