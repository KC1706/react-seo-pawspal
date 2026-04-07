import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PetDigitalIdentity from './pages/PetDigitalIdentity';
import Bangalore from './pages/Bangalore';
import PetTravelChecker from './pages/PetTravelChecker';
import PetPassport from './pages/PetPassport';
import Pawid from './pages/Pawid';
import PetAdoption from './pages/PetAdoption';
import Platform from './pages/Platform';
import Vision from './pages/Vision';
import AiVet from './pages/AiVet';
import DogHealthTracking from './pages/DogHealthTracking';
import BestPetCareAppIndia from './pages/BestPetCareAppIndia';
import HowToStorePetHealthRecords from './pages/HowToStorePetHealthRecords';
import PetEmergencyGuide from './pages/PetEmergencyGuide';
import Dashboard from './pages/Dashboard';
import VetSoftware from './pages/VetSoftware';
import PetHealthRecords from './pages/PetHealthRecords';
import PawsDigitalIdentity from './pages/PawsDigitalIdentity';
import Experiment from './pages/Experiment';
import PetOs from './pages/PetOs';
import EmergencyInfrastructure from './pages/EmergencyInfrastructure';
import PetMarketplace from './pages/PetMarketplace';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet-identity/pet-digital-identity" element={<PetDigitalIdentity />} />
        <Route path="/city/bangalore" element={<Bangalore />} />
        <Route path="/pet-passport/pet-travel-checker" element={<PetTravelChecker />} />
        <Route path="/pet-passport/pet-passport" element={<PetPassport />} />
        <Route path="/pawid/pawid" element={<Pawid />} />
        <Route path="/pet-adoption" element={<PetAdoption />} />
        <Route path="/platform/platform" element={<Platform />} />
        <Route path="/vision/vision" element={<Vision />} />
        <Route path="/ai-vet" element={<AiVet />} />
        <Route path="/blog/dog-health-tracking" element={<DogHealthTracking />} />
        <Route path="/blog/best-pet-care-app-india" element={<BestPetCareAppIndia />} />
        <Route path="/blog/how-to-store-pet-health-records" element={<HowToStorePetHealthRecords />} />
        <Route path="/blog/pet-emergency-guide" element={<PetEmergencyGuide />} />
        <Route path="/dashboard/dashboard" element={<Dashboard />} />
        <Route path="/vet-software" element={<VetSoftware />} />
        <Route path="/pet-health-records" element={<PetHealthRecords />} />
        <Route path="/experiment/paws-digital-identity" element={<PawsDigitalIdentity />} />
        <Route path="/experiment" element={<Experiment />} />
        <Route path="/pet-os/pet-os" element={<PetOs />} />
        <Route path="/emergency-infrastructure" element={<EmergencyInfrastructure />} />
        <Route path="/pet-marketplace" element={<PetMarketplace />} />
      </Routes>
    </Router>
  );
}

export default App;
