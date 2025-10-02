import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EtihadTown from "./pages/EtihadTown";
import EtihadGarden from "./pages/EtihadGarden";
import EtihadGroup from "./pages/EtihadGroup";
import VRTour from "./pages/VRTour";
import PaymentPlan from "./pages/PaymentPlan";
import Downloads from "./pages/Downloads";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

import Image1 from './assets/image.jpg';
import TownMap from './assets/image4.png';
import Video from "./assets/video.mp4";
import Video2 from "./assets/video2.mp4";
import "./Home.css";

// Logos import
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.jpg";
import logo7 from "./assets/logo7.png";
import logo8 from "./assets/logo8.png";
import logo9 from "./assets/logo9.png";
import logo10 from "./assets/logo10.png";

// 🔹 Hero Slider Images
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";
import hero3 from "./assets/hero3.png";

// import EtihadPhase1 from "./pages/page1/EtihadPhase1";
// import EtihadPhase2 from "./pages/page1/EtihadPhase2";
// import EtihadPhase3 from "./pages/page1/EtihadPhase3";
// import PremierEnclave from "./pages/page1/PremierEnclave";
// import EtihadSialkot from "./pages/page1/EtihadSialkot";
import { Autoplay } from "swiper/modules";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const images = [hero1, hero2, hero3];
  const [buttonIndex, setbuttonIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setbuttonIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual controls
  const nextSlide = () =>
    setbuttonIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setbuttonIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      <div className="hero-section">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Etihad Hero"
            className={`hero-image ${index === buttonIndex ? "active" : ""}`}
          />
        ))}

        {/* --- Buttons only if route is "/" --- */}
        {location.pathname === "/" && (
          <div className="sliderControls">
            <button className="arrow" onClick={prevSlide}>❮</button>
            <button className="arrow" onClick={nextSlide}>❯</button>
          </div>
        )}
 



        <div className="hero-overlay">
          <h1>EtihadTown Phase I</h1>
        </div>
      </div>

      {/* --- Space Between Image & Video --- */}
      

      {/* --- First Video Section --- */}
      <h2 className="video-title1">Etihad Town Phase I</h2>
        <div className="video-container">
           
        <iframe
          src="https://www.youtube.com/embed/zBsLFFIcHSA"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-section">
        <h2 className="video-title">ETIHAD TOWN PHASE-I DEVELOPMENT</h2>
        <video autoPlay loop muted controls className="home-video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- Second Video Section --- */}
      <div className="video-section">
        <h2 className="video-title">ETIHAD TOWN PHASE-II DEVELOPMENT</h2>
        <video autoPlay loop muted controls className="home-video">
          <source src={Video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- Extra Image Section --- */}
      <div className="extra-image-section">
        <img src={Image1} alt="Etihad Extra" className="extra-image" />
      </div>

      {/* --- Town Map Section --- */}
      <div className="map-section">
        <div className="map-container">
          <div className="Text-map">
            <h1>Virtual Tour</h1>
            <h1>of Etihad Town Phase - II</h1>
          </div>
          <img src={TownMap} alt="Town Map" className="town-map" />
        </div>
      </div>

      {/* --- Text Section Below Extra Image --- */}
      <div className="text-section">
        <h2>Strategic Sales Partners</h2>
      </div>

      {/* --- Logos Section --- */}
      <div className="logos-section">
        <div className="logos-track">
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10].map(
            (logo, i) => (
              <img key={i} src={logo} alt={`logo${i}`} />
            )
          )}
          {/* Duplicate for infinite loop */}
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10].map(
            (logo, i) => (
              <img key={i + 10} src={logo} alt={`logo${i}`} />
            )
          )}
        </div>
      </div>

      {/* --- Routing --- */}
    
   
    </div>
  );
};
export{Autoplay}
export default Home;
