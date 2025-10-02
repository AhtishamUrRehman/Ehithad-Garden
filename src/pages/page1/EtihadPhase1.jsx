// import React from "react";
// import { useNavigate } from "react-router-dom"; 
// import "./EtihadPhase1.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Assets
// import Phase1Bg from "../../assets/phase1.png";   
// import LogoImg from "../../assets/logo.png";      
// import Card1 from "../../assets/card1.png";
// import Card2 from "../../assets/card2.png";
// import Card3 from "../../assets/card3.png";

// const EtihadPhase1 = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="phase1-wrapper">
//       {/* Hero Section */}
//       <div
//         className="phase1-hero"
//         style={{ backgroundImage: `url(${Phase1Bg})` }}
//       >
//         <div className="phase1-overlay">
//           <h1 className="phase1-title">Etihad Town Phase 1</h1>
//         </div>
//       </div>

//       {/* Navigation Bar Section */}
//       <div className="phase1-bar">
//         <button className="home-btn" onClick={() => navigate("/")}>
//           Home
//         </button>
//         <span className="bar-text">Etihad Town Phase – I</span>
//       </div>

//       {/* Content Section */}
//       <div className="phase1-content">
//         {/* Left Text */}
//         <div className="phase1-text">
//           <p>
//             Indulge, serenade and be possessed by the serene environment at
//             Etihad Town, where life takes a turn into a peaceful lifestyle of
//             affordable luxury. Maximizing utility for our residents while
//             maintaining the highest of standards in infrastructure, network,
//             amenities, sustainability and utilization, we at Etihad have
//             derived the very best out of the soil for our past, present and
//             future customers. Begin your journey with us for the reliability
//             of development, assurity of investment and fulfilment of our
//             commitment.
//           </p>
//         </div>

//         {/* Right Logo + Button */}
//         <div className="phase1-right">
//           <img src={LogoImg} alt="Etihad Logo" className="phase1-logo" />
//           <button className="phase1-btn">Payment Plan</button>
//         </div>
//       </div>

//       {/* Slider Section */}
// <div className="phase1-slider-wrapper">
//   <Slider
//     dots={true}
//     infinite={true}
//     speed={600}
//     slidesToShow={1}
//     slidesToScroll={1}
//     autoplay={true}
//     autoplaySpeed={2000}
//     arrows={false}
//   >
//     {/* Slide 1 */}
//     <div className="phase1-slide">
//       <div className="phase1-slide-text">
//         <h1>Etihad Town phase1</h1>
//         <p>
//           Indulge, serenade and be possessed by the serene environment at
//             Etihad Town, where life takes a turn into a peaceful lifestyle of
//             affordable luxury. Maximizing utility for our residents while
//             maintaining the highest of standards in infrastructure, network,
//             amenities, sustainability and utilization, we at Etihad have
//             derived the very best out of the soil for our past, present and
//             future customers. Begin your journey with us for the reliability
//             of development, assurity of investment and fulfilment of our
//             commitment.
//             Indulge, serenade and be possessed by the serene environment at
//             Etihad Town, where life takes a turn into a peaceful lifestyle of
//             affordable luxury. Maximizing utility for our residents while
//             maintaining the highest of standards in infrastructure, network,
//             amenities, sustainability and utilization, we at Etihad have
//             derived the very best out of the soil for our past, present and
//             future customers. Begin your journey with us for the reliability
//             of development, assurity of investment and fulfilment of our
//             commitment.
//         </p>
//       </div>
//       <div className="phase1-slide-img-container">
//         <img src={Card1} alt="Modern Infrastructure" />
//       </div>
//     </div>

//     {/* Slide 2 */}
//     <div className="phase1-slide">
//       <div className="phase1-slide-text">
//         <h3>Peaceful Environment</h3>
//         <p>
//           Green spaces and tranquil surroundings designed for families.
//         </p>
//       </div>
//       <div className="phase1-slide-img-container">
//         <img src={Card2} alt="Peaceful Environment" />
//       </div>
//     </div>

//     {/* Slide 3 */}
//     <div className="phase1-slide">
//       <div className="phase1-slide-text">
//         <h3>Smart Investment</h3>
//         <p>
//           Excellent growth potential with reliable and timely development.
//         </p>
//       </div>
//       <div className="phase1-slide-img-container">
//         <img src={Card3} alt="Smart Investment" />
//       </div>
//     </div>
//   </Slider>
// </div>

//     </div>
//   );
// };

// export default EtihadPhase1;
import React, { useEffect, useState } from "react";
import Image1 from '../../assets/phase1/pexels-gaspar-ferenc-322731648-13717406.jpg';
import Image2 from '../../assets/phase1/ET_2_logo_p1.png';
import "./EtihadPhase1.css";
import Image3 from '../../assets/phase1/etihad-town-phase1.jpg'
import Image4 from '../../assets/phase1/2-1-scaled.jpg'
import Image5 from '../../assets/phase1/2-1-scaled.jpg'
import Image6 from '../../assets/phase1/ET-Phase-1-McDonalds.jpg'
import Image7 from '../../assets/phase1/sports-arena.png'
import Image8 from '../../assets/phase1/pexels-onemorecoffee-179993.jpg'
import Image9 from '../../assets/phase1/pexels-pashal-337904.jpg'
import Image10 from '../../assets/phase1/pexels-pixabay-264512.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const EtihadTownPhase1 = () => {
   const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    country: "",
    message: ""
  });

 const slides = [
    {
      title: "Etihad Town Phase – I",
      text: `Our premier project for housing, living, commercial and business, Etihad Town, is a ray of sunlight for the gloom that
 is left at the hands of the medieval norms being followed in the real estate sector. With 100% approved and owned land,
  Etihad Town offers the best of a luxurious lifestyle while maintaining affordability and the most connectivity to the 
  transportation hub of Lahore while protecting the serenity of your day-to-day living. Leaving competition in a state of
   disbelief and in our rearview mirror.

With the launch of Etihad Town Phase – I in 2017, the public appreciated and welcomed a project sought for its transparency
 of dealings and services. The customer feedback and the market response have been overwhelmingly positive, and we are
  committed to continuing our momentum and giving the customers more value for money.`,
      image: Image3,
    },
    {
      title: "Etihad Town Royal Enclave",
      text: `“A new journey of exciting possibilities as we unveil the New Block & New Deal at Etihad Town Phase I's Launch Ceremony!
 This grand occasion marks the beginning of a new chapter and promises a world of opportunities. Embrace a life filled
  with comfort and convenience in a prime location. The finest living in Etihad Town makes commuting hassle-free with
   key locations at convenient distances.`,
      image: Image4,
    },
  ];

  const nextSlide = () => setCurrentSlide((i) => (i + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      message: ""
    });
  };

  return (
    <div>
      {/* Full Width Top Image */}
      <div className="imageWrapper">
        <img src={Image1} alt="Property" className="fullImage" />
      </div>
       <div className="breadcrumb-bar">
      <span 
        className="breadcrumb-link"
        onClick={() => navigate("/")}
      >
        Home
      </span>
      <span className="breadcrumb-separator">»</span>
      <span className="breadcrumb-current">Etihad Town Phase – I</span>
    </div>
      {/* About Section */}
      <div className="aboutSection">
        <div className="textContent">
          <h2>
            Indulge, serenade and be possessed by the serene environment at
            Etihad Town, where life takes a turn into a peaceful lifestyle of
            affordable luxury. Maximizing utility for our residents while
            maintaining the highest of standards in infrastructure, network,
            amenities, sustainability and utilization, we at Etihad have
            derived the very best out of the soil for our past, present and
            future customers. Begin your journey with us for the reliability
            of development, assurity of investment and fulfilment of our
            commitment.
          </h2>
        </div>
        <div className="imageContent">
          <img src={Image2} alt="Property" className="sideImage" />
        </div>
      </div>

       <div className="sliderWrapper relative">
          <div className="sectionWrapper flex items-center justify-between">
            <div className="textContent w-1/2">
              <h1 className="text-2xl font-bold">{slides[currentSlide].title}</h1>
              <p className="mt-2">{slides[currentSlide].text}</p>
              {slides[currentSlide].text2 && <p className="mt-2">{slides[currentSlide].text2}</p>}
            </div>

            {/* Animated Image */}
            <div className="imageContent w-1/2 flex justify-center">
              <img
                key={currentSlide} // 🔥 force re-render for animation
                src={slides[currentSlide].image}
                alt="Property"
                className="sideImage transition-all duration-700 ease-in-out transform hover:scale-105 hover:cursor-pointer animate-fadeSlide"
              />
            </div>
          </div>
           <div className="sliderControls">
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        </div>

      {/* Video Section */}
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/zBsLFFIcHSA"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Amenities Section */}
      <div className="amenities-container">
        <h1 className="heading">Amenities</h1>
        <p className="sub-text">IT IS DETAILS THAT OFTEN</p>
        <p className="sub-text">DETERMINE THE STANDARD OF LIVING</p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3.5}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="amenities-swiper"
        >
          <SwiperSlide>
            <div className="card">
              <h1 className="card-line">_________________________</h1>
              <h3>01/06</h3>
              <h2 className="card-title">GATED COMMUNITY</h2>
              <img src={Image5} alt="Gated Community" className="card-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h1 className="card-line">_________________________</h1>
              <h3>02/06</h3>
              <h2 className="card-title">RESTAURANT</h2>
              <img src={Image6} alt="Restaurant" className="card-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h1 className="card-line">_________________________</h1>
              <h3>03/06</h3>
              <h2 className="card-title">SPORT AREA</h2>
              <img src={Image7} alt="Sport Area" className="card-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h1 className="card-line">_________________________</h1>
              <h3>04/06</h3>
              <h2 className="card-title">SECURITY</h2>
              <img src={Image8} alt="Security" className="card-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h1 className="card-line">_________________________</h1>
              <h3>05/06</h3>
              <h2 className="card-title">MASJID</h2>
              <img src={Image9} alt="Masjid" className="card-img" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <h1 className="card-line">_________________________</h1>
              <h3>06/06</h3>
              <h2 className="card-title">SHOPPING MALL</h2>
              <img src={Image10} alt="Shopping Mall" className="card-img" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 🔹 Book Now Form Section */}
      <div className="book-now-form">
        <h1 className="form-heading">BOOK NOW</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <label>Full name*</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Phone No.*</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Email Address*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>City*</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />

          <label>Country*</label>
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            <option value="Pakistan">Pakistan</option>
            <option value="UAE">UAE</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
             <option value="Albania">Albania</option>
            <option value="UASaudi ArabiaE">Saudi Arabia</option>
            <option value="	Turkey">	Turkey</option>
            <option value="	Thailand">	Thailand</option>
          </select>

          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EtihadTownPhase1;
