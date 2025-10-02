import React, { useEffect, useState } from "react";
import bgImg from '../assets/Garden1/Etihad_Garden_Gate-1.jpg';
import Image from '../assets/Garden1/EtihadTown_Bank_alfalah copy.jpg';
import "./EtihadGarden.css";
import Etihadgarden1 from "../components/Etihad Garden/Etihadgarden1";
 
const Etihadgarden = () => {
  const [animate, setAnimate] = useState(false);
 
  // Trigger animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);
 
  return (
<div>
    <div
      className="phase1-wrapper"
       style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className={`content ${animate ? "animate" : ""}`}>
        <h1>Welcome to Etihad Garden</h1>
        <p>
       Located in the heart of Rahim yar khan, a cultlural connection
        between two of pakistan's most devirse province i.e. punjab $ sindh
      </p>
        <button className="explore-btn" onClick={() => alert("Later, navigate to another path!")}>
          Explore
        </button>
      </div>
    </div>
 
  <div className="etihad-garden-section">
 
  <h1>ETIHAD GARDEN PHASE – III</h1>
  <div className="video-container first-video">
    <iframe
      src="https://www.youtube.com/embed/Ogrh74RHKe8"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
 
  <h1>Etihad Garden Phase – I Development</h1>
  <div className="video-container smaller">
    <iframe
      src="https://www.youtube.com/embed/SOYvsAb5vqw"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
 
  <h1>Etihad Garden Phase – II Development</h1>
  <div className="video-container smaller">
    <iframe
      src="https://www.youtube.com/embed/KMEWdaadAks"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
 
 
<div className="etihad-section">
  <div className="etihad-content">
    <h1>ETIHAD GARDEN</h1>
    <p>
      First-of-its-kind lifestyle housing project in Rahim Yar Khan spanning over 1,780 kanals.
      The project features Residential and Commercial plots with all the essential amenities required for
      a modern community living making it Rahim Yar Khan’s most attractive investment opportunity. Undoubtedly,
      it is city’s most well-planned and secured housing project.
      Etihad Garden is ideally located on Airport Road which provides a swift and
      convenient approach for Rahim Yar Khan International Airport, HH Sheikh Khalifa Public
      School coupled with an easy access to Sheikh Zayed Medical Hospital & College.
    </p>
  </div>
 
<div className="etihad-card">
  <img src={bgImg} alt="Etihad Garden" />
  <span className="image-caption">Etihad Garden</span>
</div>
 
</div>
 
<div className="custom-box">
  <img src={Image} alt="Etihad Garden" />
</div>
 
 
</div>

 
    </div>
  );
};
 
export default Etihadgarden;
 
 