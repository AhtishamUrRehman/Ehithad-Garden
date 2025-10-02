import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EtihadPhase1 from "./pages/page1/EtihadPhase1";
import EtihadPhase2 from "./pages/page1/EtihadPhase2";
import EtihadPhase3 from "./pages/page1/EtihadPhase3";
import PremierEnclave from "./pages/page1/PremierEnclave";
import EtihadSialkot from "./pages/page1/EtihadSialkot";
import Footer from "./components/Footer";
import Home from "./Home";
import Etihad2 from "./pages/page1/EtihadPhase2";
import EtihadTown from "./pages/EtihadTown";
import EtihadGarden from "./pages/EtihadGarden";
import EtihadGroup from "./pages/EtihadGroup";
import VRTour from "./pages/VRTour";
import PaymentPlan from "./pages/PaymentPlan";
import Downloads from "./pages/Downloads";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

import Etihadgarden from "./components/Etihad Garden/Etihadgarden1";
import Etihadgarden1 from "./components/Etihad Garden/Etihadgarden1";
import Etihadgarden2 from "./components/Etihad Garden/Etihadgarden2";
import Etihadgarden3 from "./components/Etihad Garden/Etihadgarden3";
// import EtihadGarden from "./pages/page2/Etihadgarden1";


function App() {
  return (
    <div>


      <Router>
        <Navbar />
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phase1" element={<EtihadPhase1 />} />
          <Route path="/phase2" element={<Etihad2 />} />
          <Route path="/phase3" element={<EtihadPhase3 />} />
          <Route path="/premier-enclave" element={<PremierEnclave />} />
          <Route path="/sialkot" element={<EtihadSialkot />} />

        
         
          
        <Route path="/EHTIHADTOWN" element={<EtihadTown />} />
        <Route path="/garden" element={<EtihadGarden />} />
        <Route path="/group" element={<EtihadGroup />} />
        <Route path="/vr-tour" element={<VRTour />} />
        <Route path="/payment-plan" element={<PaymentPlan />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
       
        </Routes>
        <Routes><Route path="/garden1" element={<Etihadgarden1/>}/>
         <Route path="/garden2" element={<Etihadgarden2/>}/>
          <Route path="/garden3" element ={<Etihadgarden3/>}/>
         </Routes>
        
      </Router>
    
      <Footer></Footer>
    </div>
  );
}

export default App;
