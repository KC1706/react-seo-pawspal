import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// Clean structured form state
const initialState = {
  owner: {
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    password: "", 
    confirmPassword: "", 
  },
  pet: {
    name: "",
    dob: "", 
    species: "",
    breed: "",
    gender: "",
  },
  health: {
    vetClinic: "",
    vetDoctor: "",
    lastVisit: "",
    nextVisit: "",
    vaccinations: [],
    conditions: "",
    medications: "",
    spayed: "",
    allergies: "",
  },
};
const commonBreedsDB = {
  Dog: [
    "Indian Pariah (Indie)",
    "Labrador Retriever",
    "Golden Retriever",
    "German Shepherd",
    "Beagle",
    "Shih Tzu",
    "Pug",
    "Rottweiler",
    "Pomeranian",
    "Dachshund",
    "Great Dane",
    "Boxer",
    "Doberman",
    "Husky",
    "Pitbull",
    "Mixed/Unknown",
    "Other",
  ],
  Cat: [
    "Indian Billi (Indie)",
    "Persian",
    "Siamese",
    "Maine Coon",
    "Bengal",
    "Himalayan",
    "British Shorthair",
    "Ragdoll",
    "Mixed/Unknown",
    "Other",
  ],
};

export default function PetIDWizard() {
  const [generatedId, setGeneratedId] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const closeVerifyModal = () => setShowVerifyModal(false);
  // const auth = getAuth();
  // const user = auth.currentUser;
  const copyID = () => {
    if (!generatedId) {
      alert("No ID to copy");
      return;
    }

    navigator.clipboard.writeText(generatedId);
    alert("Copied!");
  };
  const handleDashboardClick = () => {
    setShowVerifyModal(true);
  };

  const handleVerify = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        alert("User not logged in");
        return;
      }

      // 🔥 refresh Firebase state
      await user.reload();

      if (!user.emailVerified) {
        alert("Please verify your email first.");
        return;
      }

      // 🔥 get token
      const token = await user.getIdToken();

      // 🔥 redirect to dashboard
      window.open(`http://localhost:5173/auth?token=${token}`, "_blank");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const updateField = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const validateStep1 = () => {
    const { name, email, phone, country } = formData.owner;

    if (!name || !email || !phone || !country) {
      alert("Fill all required fields");
      return false;
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      alert("Invalid phone number");
      return false;
    }

    return true;
  };

  const validateStep2 = () => {
    const { name, dob, gender, species } = formData.pet;

    if (!name || !dob || !gender || !species) {
      alert("Fill all pet details");
      return false;
    }

    const d = new Date(dob);
    if (d > new Date()) {
      alert("Invalid DOB");
      return false;
    }

    return true;
  };

  const next = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const submit = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // ✅ STEP 1: Create Firebase user
      const cred = await createUserWithEmailAndPassword(
        auth,
        formData.owner.email,
        formData.owner.password, // you must have this field
      );

      const user = cred.user;
      await sendEmailVerification(user);
      // ✅ STEP 2: Get token
      const token = await user.getIdToken();

      // ✅ STEP 3: Call backend
      const res = await fetch("http://localhost:8000/authentication/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.owner.name,
          mobile: formData.owner.phone,
          role: "pet_owner",
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail);

      setGeneratedId(data.user.user_id);
      setStep(5);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="modal"
        id="modal"
        style={{ display: step >= 6 ? "none" : "block" }}
      >
        <div className="mhead">
          <h2>🐾 Create Your PetID</h2>
          <p>
            A permanent, verified digital identity for your pet. Free forever.
          </p>
        </div>

        {showVerifyModal && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
            }}
          >
            <div
              style={{
                background: "var(--white)",
                borderRadius: "16px",
                padding: "28px",
                width: "100%",
                maxWidth: "420px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                position: "relative",
                textAlign: "center",
              }}
            >
              {/* CLOSE */}
              <button
                onClick={closeVerifyModal}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "transparent",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                ✕
              </button>

              {/* ICON */}
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>📧</div>

              {/* TITLE */}
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "var(--forest)",
                  marginBottom: "6px",
                }}
              >
                Verify Your Email
              </h2>

              {/* TEXT */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: "1.5",
                  marginBottom: "18px",
                }}
              >
                Please confirm that you have verified your email before
                continuing to your dashboard.
              </p>

              {/* BUTTON */}
              <button
                onClick={handleVerify}
                style={{
                  width: "100%",
                  background: "var(--forest)",
                  color: "white",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                I have verified →
              </button>
            </div>
          </div>
        )}

        <div className="prog">
          {[1, 2, 3, 4, 5].map((s, i) => (
            <React.Fragment key={i}>
              <div className={`pb-bar ${step >= s ? "active done" : ""}`} />
              {i < 4 && <div style={{ width: "4px" }} />}
            </React.Fragment>
          ))}
          <div className="prog-labels">
            <span className={`plab ${step >= 1 ? "active" : ""}`}>Owner</span>
            <span className={`plab ${step >= 2 ? "active" : ""}`}>
              Pet Info
            </span>
            <span className={`plab ${step >= 3 ? "active" : ""}`}>Health</span>
            <span className={`plab ${step >= 4 ? "active" : ""}`}>Review</span>
            <span className={`plab ${step >= 5 ? "active" : ""}`}>Done!</span>
          </div>
        </div>

        <div className="fbody">
          {/*  STEP 1: OWNER INFO  */}
          <div
            className={"fstep" + (step === 1 ? " active" : "")}
            style={{ display: step === 1 ? "block" : "none" }}
          >
            <div className="sdiv">Owner Information</div>

            <div className="fg c2">
              <div>
                <label>
                  Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={formData.owner.name}
                  onChange={(e) => updateField("owner", "name", e.target.value)}
                />
              </div>

              <div>
                <label>
                  Email Address <span className="req">*</span>
                </label>
                <input
                  type="email"
                  placeholder="rahul@email.com"
                  value={formData.owner.email}
                  onChange={(e) =>
                    updateField("owner", "email", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="fg c2">
              <div>
                <label>
                  Phone Number <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.owner.phone}
                  onChange={(e) =>
                    updateField("owner", "phone", e.target.value)
                  }
                />
              </div>

              <div>
                <label>
                  Country <span className="req">*</span>
                </label>
                <select
                  value={formData.owner.country}
                  onChange={(e) =>
                    updateField("owner", "country", e.target.value)
                  }
                >
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
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="Bangalore"
                  value={formData.owner.city}
                  onChange={(e) => updateField("owner", "city", e.target.value)}
                />
              </div>

              <div>
                <label>ID Type</label>
                <select>
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
              <div>
                <label>Government ID Number</label>
                <input
                  type="text"
                  placeholder="For ownership verification (encrypted & secure)"
                />
              </div>
            </div>

            <p
              style={{
                fontSize: "12px",
                color: "var(--text3)",
                marginTop: "8px",
                lineHeight: "1.5",
              }}
            >
              🔒 Your personal data is encrypted and used only for ownership
              verification.
            </p>

            <div className="faction">
              <span className="sc">Step 1 of 4</span>
              <button className="bnx" onClick={next}>
                Next: Pet Info →
              </button>
            </div>
          </div>

          {/*  STEP 2: PET INFO  */}
          <div
            className={"fstep" + (step === 2 ? " active" : "")}
            style={{ display: step === 2 ? "block" : "none" }}
          >
            <div className="sdiv">Pet Basic Information</div>

            <div className="fg c2">
              <div>
                <label>
                  Pet Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Bruno"
                  value={formData.pet.name}
                  onChange={(e) => updateField("pet", "name", e.target.value)}
                />
              </div>

              <div>
                <label>
                  Date of Birth <span className="req">*</span>
                </label>
                <input
                  type="date"
                  // value={formData.pet.dob}
                  value={"2025-02-22"}
                  onChange={(e) => updateField("pet", "dob", e.target.value)}
                />
              </div>
            </div>

            {/* SPECIES */}
            <div style={{ marginBottom: "14px" }}>
              <label>
                Species <span className="req">*</span>
              </label>

              <div
                className="radio-g"
                style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
              >
                <div
                  className={`rc ${formData.pet.species === "Dog" ? "sel" : ""}`}
                  onClick={() => updateField("pet", "species", "Dog")}
                >
                  <div className="ri">🐕</div>
                  <div className="rl">Dog</div>
                </div>

                <div
                  className={`rc ${formData.pet.species === "Cat" ? "sel" : ""}`}
                  onClick={() => updateField("pet", "species", "Cat")}
                >
                  <div className="ri">🐈</div>
                  <div className="rl">Cat</div>
                </div>
              </div>
            </div>

            {/* BREED */}
            <div className="fg c2">
              <div>
                <label>Breed</label>
                <input
                  type="text"
                  list="breed_list"
                  placeholder={
                    formData.pet.species
                      ? `Search or type ${formData.pet.species.toLowerCase()} breed...`
                      : "Select species first"
                  }
                  disabled={!formData.pet.species}
                  value={formData.pet.breed}
                  onChange={(e) => updateField("pet", "breed", e.target.value)}
                />

                <datalist id="breed_list">
                  {formData.pet.species &&
                    commonBreedsDB[formData.pet.species]?.map((breed) => (
                      <option key={breed} value={breed} />
                    ))}
                </datalist>

                {!formData.pet.species && (
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text3)",
                      marginTop: "4px",
                    }}
                  >
                    Select species to load breeds
                  </div>
                )}
              </div>

              <div>
                <label>
                  Gender <span className="req">*</span>
                </label>
                <select
                  value={formData.pet.gender}
                  onChange={(e) => updateField("pet", "gender", e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Male (neutered)</option>
                  <option>Female (spayed)</option>
                </select>
              </div>
            </div>

            {/* EXTRA DETAILS */}
            <div className="fg c3">
              <div>
                <label>Coat Color</label>
                <input
                  type="text"
                  placeholder="Golden, Black, etc."
                  value={formData.pet.color || ""}
                  onChange={(e) => updateField("pet", "color", e.target.value)}
                />
              </div>

              <div>
                <label>Weight (kg)</label>
                <input
                  type="number"
                  placeholder="25"
                  min="0"
                  step="0.1"
                  value={formData.pet.weight || ""}
                  onChange={(e) => updateField("pet", "weight", e.target.value)}
                />
              </div>

              <div>
                <label>Distinctive Marks</label>
                <input
                  type="text"
                  placeholder="White patch on chest"
                  value={formData.pet.marks || ""}
                  onChange={(e) => updateField("pet", "marks", e.target.value)}
                />
              </div>
            </div>

            {/* BLOOD + PHOTO */}
            <div className="fg c2">
              <div>
                <label>Blood Group</label>
                <select
                  value={formData.pet.blood || ""}
                  onChange={(e) => updateField("pet", "blood", e.target.value)}
                >
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
                <label>
                  Pet Photo URL{" "}
                  <span style={{ fontSize: "11px", color: "var(--text3)" }}>
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={formData.pet.photo || ""}
                  onChange={(e) => updateField("pet", "photo", e.target.value)}
                />
              </div>
            </div>

            {/* IDENTIFICATION */}
            <div className="sdiv">Identification</div>

            <div className="fg c2">
              <div>
                <label>Microchip Number</label>
                <input
                  type="text"
                  placeholder="900182001234567"
                  value={formData.pet.chip || ""}
                  onChange={(e) => updateField("pet", "chip", e.target.value)}
                />
              </div>

              <div>
                <label>Existing Tag/License No.</label>
                <input
                  type="text"
                  placeholder="If any"
                  value={formData.pet.tag || ""}
                  onChange={(e) => updateField("pet", "tag", e.target.value)}
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="faction">
              <button className="bbk" onClick={back}>
                ← Back
              </button>

              <span className="sc">Step 2 of 4</span>

              <button className="bnx" onClick={next}>
                Next: Health Records →
              </button>
            </div>
          </div>

          {/*  STEP 3: HEALTH  */}
          <div
            className={"fstep" + (step === 3 ? " active" : "")}
            style={{ display: step === 3 ? "block" : "none" }}
          >
            <div className="sdiv">Veterinary Information</div>

            <div className="fg c2">
              <div>
                <label>Primary Vet Clinic</label>
                <input
                  type="text"
                  placeholder="Caring Paws Veterinary, Bangalore"
                  value={formData.health.vetClinic}
                  onChange={(e) =>
                    updateField("health", "vetClinic", e.target.value)
                  }
                />
              </div>

              <div>
                <label>Vet Doctor Name</label>
                <input
                  type="text"
                  placeholder="Dr. Priya Menon"
                  value={formData.health.vetDoctor}
                  onChange={(e) =>
                    updateField("health", "vetDoctor", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="fg c2">
              <div>
                <label>Last Vet Visit</label>
                <input
                  type="date"
                  value={formData.health.lastVisit}
                  onChange={(e) =>
                    updateField("health", "lastVisit", e.target.value)
                  }
                />
              </div>

              <div>
                <label>Next Appointment</label>
                <input
                  type="date"
                  value={formData.health.nextVisit}
                  onChange={(e) =>
                    updateField("health", "nextVisit", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="sdiv">Vaccination History</div>

            <div className="vg">
              {[
                "Rabies",
                "Distemper",
                "Parvovirus",
                "Hepatitis",
                "Bordetella",
                "Leptospirosis",
                "Influenza",
                "FVRCP",
              ].map((vaccine) => (
                <div className="vi" key={vaccine}>
                  <input
                    type="checkbox"
                    checked={formData.health.vaccinations.includes(vaccine)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...formData.health.vaccinations, vaccine]
                        : formData.health.vaccinations.filter(
                            (v) => v !== vaccine,
                          );

                      updateField("health", "vaccinations", updated);
                    }}
                  />
                  <label>{vaccine}</label>
                </div>
              ))}
            </div>

            <div className="sdiv">Medical History</div>

            <div className="fg">
              <div>
                <label>Known Medical Conditions</label>
                <textarea
                  placeholder="Diabetes, allergies, arthritis..."
                  value={formData.health.conditions}
                  onChange={(e) =>
                    updateField("health", "conditions", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="fg c2">
              <div>
                <label>Current Medications</label>
                <input
                  type="text"
                  placeholder="None / list medications"
                  value={formData.health.medications}
                  onChange={(e) =>
                    updateField("health", "medications", e.target.value)
                  }
                />
              </div>

              <div>
                <label>Spayed / Neutered?</label>
                <select
                  value={formData.health.spayed}
                  onChange={(e) =>
                    updateField("health", "spayed", e.target.value)
                  }
                >
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Planned</option>
                </select>
              </div>
            </div>

            <div className="fg">
              <div>
                <label>Allergies</label>
                <input
                  type="text"
                  placeholder="Food allergies, environmental allergies, or none"
                  value={formData.health.allergies}
                  onChange={(e) =>
                    updateField("health", "allergies", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="faction">
              <button className="bbk" onClick={back}>
                ← Back
              </button>
              <span className="sc">Step 3 of 4</span>
              <button className="bnx" onClick={next}>
                Review & Submit →
              </button>
            </div>
          </div>

          {/*  STEP 4: REVIEW  */}
          <div
            className={"fstep" + (step === 4 ? " active" : "")}
            style={{ display: step === 4 ? "block" : "none" }}
          >
            <div className="sdiv">Review Your Information</div>

            {/* OWNER */}
            <div className="rcard">
              <h4>Owner</h4>

              <div className="rr">
                <span className="rk">Name</span>
                <span className="rv">{formData.owner.name || "—"}</span>
              </div>

              <div className="rr">
                <span className="rk">Email</span>
                <span className="rv">{formData.owner.email || "—"}</span>
              </div>

              <div className="rr">
                <span className="rk">Phone</span>
                <span className="rv">{formData.owner.phone || "—"}</span>
              </div>

              <div className="rr" style={{ border: "none" }}>
                <span className="rk">Location</span>
                <span className="rv">
                  {(formData.owner.city || "") +
                    (formData.owner.country
                      ? ", " + formData.owner.country
                      : "") || "—"}
                </span>
              </div>
            </div>

            {/* PET */}
            <div className="rcard">
              <h4>Pet</h4>

              <div className="rr">
                <span className="rk">Name</span>
                <span className="rv">{formData.pet.name || "—"}</span>
              </div>

              <div className="rr">
                <span className="rk">Species / Breed</span>
                <span className="rv">
                  {(formData.pet.species || "") +
                    (formData.pet.breed ? " / " + formData.pet.breed : "") ||
                    "—"}
                </span>
              </div>

              <div className="rr">
                <span className="rk">Date of Birth</span>
                <span className="rv">{formData.pet.dob || "—"}</span>
              </div>

              <div className="rr">
                <span className="rk">Microchip</span>
                <span className="rv">{formData.pet.microchip || "—"}</span>
              </div>

              <div className="rr" style={{ border: "none" }}>
                <span className="rk">Gender</span>
                <span className="rv">{formData.pet.gender || "—"}</span>
              </div>
            </div>

            {/* ACCOUNT */}
            <div className="sdiv">Create Account to Manage PAWID</div>

            <div className="fg c2">
              <div>
                <label>
                  Password <span className="req">*</span>
                </label>
                <input
                  type="password"
                  value={formData.owner.password || ""}
                  onChange={(e) =>
                    updateField("owner", "password", e.target.value)
                  }
                />
              </div>

              <div>
                <label>
                  Confirm Password <span className="req">*</span>
                </label>
                <input
                  type="password"
                  value={formData.owner.confirmPassword || ""}
                  onChange={(e) =>
                    updateField("owner", "confirmPassword", e.target.value)
                  }
                />
              </div>
            </div>

            {/* CHECKBOXES */}
            <div className="cbox">
              <div className="crow">
                <input
                  type="checkbox"
                  checked={formData.owner.c1 || false}
                  onChange={(e) => updateField("owner", "c1", e.target.checked)}
                />
                <label>I confirm all information provided is accurate.</label>
              </div>

              <div className="crow">
                <input
                  type="checkbox"
                  checked={formData.owner.c2 || false}
                  onChange={(e) => updateField("owner", "c2", e.target.checked)}
                />
                <label>I agree to Terms & Privacy Policy.</label>
              </div>

              <div className="crow">
                <input
                  type="checkbox"
                  checked={formData.owner.c3 || false}
                  onChange={(e) => updateField("owner", "c3", e.target.checked)}
                />
                <label>I consent to notifications.</label>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="faction">
              <button className="bbk" onClick={back}>
                ← Back
              </button>

              <span className="sc">Step 4 of 4</span>

              <button className="bnx" onClick={submit} disabled={loading}>
                {loading ? "Processing..." : "🐾 Generate PetID →"}
              </button>
            </div>
          </div>

          {/*  STEP 5: SUCCESS  */}
          <div
            className={"fstep" + (step === 5 ? " active" : "")}
            id="step5"
            style={{ display: step === 5 ? "block" : "none" }}
          >
            <div className="success-w">
              <div className="sico">🎉</div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  letterSpacing: "-0.8px",
                  marginBottom: "8px",
                }}
              >
                PetID Created!
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text2)",
                  lineHeight: "1.6",
                }}
              >
                Your pet now has a permanent, verified digital identity on the
                PAWID Global Network.
              </p>
              <div className="petid-gen">
                <div className="petid-lbl">Your Pet's Unique ID</div>
                <div className="petid-val">
                  {generatedId || "--------------"}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text3)",
                    marginTop: "10px",
                  }}
                >
                  Keep this safe · This ID is permanent and globally unique
                </div>
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
                  <div className="nsn">1</div>
                  <span>
                    Download the Paws Pal Connect app — access your PetID
                    anytime
                  </span>
                </div>
                <div className="nsi">
                  <div className="nsn">2</div>
                  <span>
                    Visit your vet for digital signature to activate Pet
                    Passport
                  </span>
                </div>
                <div className="nsi">
                  <div className="nsn">3</div>
                  <span>
                    Connect PetGPT — your AI vet is ready for health queries
                    24/7
                  </span>
                </div>
                <div className="nsi">
                  <div className="nsn">4</div>
                  <span>
                    Share your PetID with vets, groomers, and pet sitters for
                    seamless care
                  </span>
                </div>
              </div>
              {/*  PetID Actions  */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="btn border btn-primary "
                  style={{
                    border: "1px solid black",
                    color: "black",
                    backgroundColor: "#0000001",
                  }}
                  onClick={copyID}
                >
                  📋 Copy PetID
                </button>
                <button
                  className="btn btn-primary"
                  style={{ border: "none", cursor: "pointer" }}
                  onClick={handleDashboardClick}
                >
                  Go to Pet Owner Dashboard →
                </button>
              </div>

              {/*  DOWNLOAD OPTIONS  */}
              <div
                style={{
                  marginTop: "28px",
                  borderTop: "1px solid var(--border2)",
                  paddingTop: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "var(--text3)",
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  Download & Physical Card
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                  }}
                >
                  {/*  PDF DOWNLOAD CARD  */}
                  <div
                    style={{
                      background: "var(--bg3)",
                      border: "1.5px solid var(--border2)",
                      borderRadius: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      transition: ".25s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                      📄
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "var(--text)",
                        marginBottom: "6px",
                      }}
                    >
                      PAWID Certificate
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text3)",
                        lineHeight: "1.5",
                        marginBottom: "14px",
                      }}
                    >
                      Aadhaar-style PDF with QR code, full details, health
                      records & official PAWID seal
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: "14px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          background: "rgba(99,102,241,0.12)",
                          color: "var(--accent3)",
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontWeight: "600",
                        }}
                      >
                        QR Code
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          background: "rgba(34,197,94,0.1)",
                          color: "#4ade80",
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontWeight: "600",
                        }}
                      >
                        Aadhaar-style
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          background: "rgba(245,158,11,0.1)",
                          color: "#fcd34d",
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontWeight: "600",
                        }}
                      >
                        Free
                      </span>
                    </div>
                    <button
                      disabled
                      // onClick={downloadPetIDPDF}
                      style={{
                        width: "100%",
                        background:
                          "linear-gradient(135deg,var(--accent),var(--accent2))",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      ⬇ Download PDF
                    </button>
                  </div>

                  {/*  PHYSICAL SMART CARD  */}
                  <div
                    style={{
                      background: "var(--bg3)",
                      border: "1.5px solid var(--border2)",
                      borderRadius: "14px",
                      padding: "20px",
                      cursor: "pointer",
                      transition: ".25s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                      💳
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "var(--text)",
                        marginBottom: "6px",
                      }}
                    >
                      Physical Smart Card
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text3)",
                        lineHeight: "1.5",
                        marginBottom: "14px",
                      }}
                    >
                      ATM-sized PVC card with QR code. NFC chip coming soon.
                      Delivered to your door.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: "14px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          background: "rgba(245,158,11,0.1)",
                          color: "#fcd34d",
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontWeight: "600",
                        }}
                      >
                        ATM Size
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          background: "rgba(99,102,241,0.12)",
                          color: "var(--accent3)",
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontWeight: "600",
                        }}
                      >
                        QR Code
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          background: "rgba(244,63,94,0.1)",
                          color: "#fb7185",
                          padding: "3px 8px",
                          borderRadius: "50px",
                          fontWeight: "600",
                        }}
                      >
                        NFC Soon
                      </span>
                    </div>
                    <button
                      // onClick={showSmartCardOrder}
                      style={{
                        width: "100%",
                        background: "linear-gradient(135deg,#f59e0b,#f97316)",
                        color: "#0a0f1e",
                        border: "none",
                        padding: "10px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      🪪 Preview &amp; Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Success Outcome UI (Hidden initially)  */}
      {/* <div
        style={{
          display: step >= 5 ? "block" : "none",
          marginTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="smart-card-container">
          <div
            className={`smart-card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped((f) => !f)}
          >
            <div className="smart-card-face smart-card-front">
              <div className="sc-header">
                <div className="sc-brand">
                  <div
                    className="sc-logo"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      src="/assets/logo-transparent.png"
                      style={{ height: "38px", objectFit: "contain" }}
                      alt="PawsPal"
                    />
                  </div>
                  <div className="sc-title">
                    <h4>PAWS PAL CONNECT</h4>
                    <p>PAWID SMART CARD</p>
                  </div>
                </div>
                <div className="sc-nfc">
                  <span
                    style={{
                      fontSize: "8px",
                      textAlign: "center",
                      color: "#64748b",
                    }}
                  >
                    NFC
                  </span>
                </div>
              </div>
              <div className="sc-middle">
                <div className="sc-avatar"></div>

                <div className="sc-pet-info">
                  <h2>{formData.pet.name || "Pet Name"}</h2>

                  <p>
                    {formData.pet.breed || "Breed"} ·{" "}
                    {formData.pet.species || "Species"}
                  </p>

                  <div className="sc-pills">
                    <div className="sc-pill">—</div>
                    <div className="sc-pill sc-pill-blue">—</div>
                  </div>
                </div>
              </div>

              <div className="sc-bottom">
                <div>
                  <div className="sc-id-row">
                    PAW-IND-XXXXXX
                  </div>

                  <div className="sc-owner-label">OWNER</div>

                  <div className="sc-owner-name">
                    {formData.owner.name || "Owner Name"}
                  </div>
                </div>

                <div className="sc-qr">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${formData.pet.name || "pawid"}`}
                    alt="QR Code"
                  />
                </div>
              </div>
            </div>


            <div className="smart-card-face smart-card-back">
              <div className="sc-mag-stripe"></div>

              <div className="sc-back-content">
                <div className="sc-badge-right">NFC Enabled (Soon)</div>

                <div className="sc-signature">
                  Authorized by Paws Pal Connect · PAWID Infrastructure
                </div>

                <div className="sc-back-meta">
                  <div>
                    <label>ADDRESS</label>
                    <span>
                      {formData.owner.city || "City"},{" "}
                      {formData.owner.country || "Country"}
                    </span>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <label>ISSUED</label>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="sc-back-footer">
                <span>PAWS PAL CONNECT</span>
                <span>pawid.network</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <p style={{ color: "var(--slate)", fontSize: "1.05rem" }}>
            Tap the card to flip it over.
          </p>

          <div
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <button
              className="btn"
              style={{
                background: "var(--slate)",
                color: "#fff",
                border: "none",
              }}
              // onClick={downloadPawidCard}
            >
              📥 Download PAWID Card
            </button>

            <button
              className="btn btn-primary"
              style={{ border: "none", cursor: "pointer" }}
              // onClick={openVerifyModal}
            >
              Go to Pet Owner Dashboard →
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
