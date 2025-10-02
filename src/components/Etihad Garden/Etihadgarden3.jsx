import React, { useState } from "react";
import bgImg from '../../assets/Garden1/lifeidea.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";   // ✅ FIXED
// import "swiper/css";                                     // ✅ Required
import "swiper/css/navigation";                          // ✅ Required
import './Etihadgarden2.css'
import image1 from '../../assets/Garden1/Etihad_Garden_Club.jpg'
import image2 from '../../assets/Garden1/lifeidea.png'
import image3 from '../../assets/Garden1/Etihad_Garden_Gate.jpg'
import image4 from '../../assets/Garden1/Etihad_Garden_Masjid.jpg'
import image5 from '../../assets/Garden1/Etihad_Garden_Park-1.jpg'
import image6 from '../../assets/Garden1/Etihad-Garden-under-ground-electricty-city.jpg'
import image7 from '../../assets/Garden1/pexels-onemorecoffee-179993 copy.jpg'
import image8 from '../../assets/Garden1/sports-arena copy.png'
import Image3 from '../../assets/etihadphase3.png';
// assets/video.mp4
const Etihadgarden3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const amenities = [
    { img: image1, title: "GATED COMMUNITY", desc: "Sanctuary of privacy and security amidst lush landscapes & tailored amenities, fostering a harmonious lifestyle for the residents." },
    { img: image2, title: "SHOPPING MALLS", desc: "Modern shopping malls with international brands and facilities." },
    { img: image6, title: "UNDERGROUND ELECTRICITY", desc: "Reliable and modern underground electricity system." },
    { img: image4, title: "MASJID", desc: "Spacious and beautiful mosque for residents." },
    { img: image5, title: "PARKS", desc: "Green spaces with modern recreational facilities." },
    { img: image7, title: "CAFES", desc: "Trendy cafes with comfortable seating and quality food." },
    { img: image8, title: "SPORTS ARENA", desc: "Fully equipped sports facilities for residents." },
    { img: image3, title: "MAIN GATE", desc: "Secure and modern main entrance to the society." },
  ];

  const toggleDesc = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      
           
      {/* Background section */}
      <div className="etihad-card123"

        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      />
       <div className="video-container3">
           
        <iframe
          src="https://www.youtube.com/embed/zBsLFFIcHSA"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
          
     {/* <div className="etihad-section">
              <div className="etihad-content">
                <h1>Etihad Garden Phase – II</h1>
                <p>
                  Located in the heart of Rahim Yar Khan, a cultural connection between two of Pakistan’s most diverse provinces
                  i.e. Punjab & Sindh, Etihad Garden is a project that aims to reflect the same richness and distinctiveness.
      
                  We launched Etihad Garden Phase – I as a one of its kind residential project in Rahim Yar Khan comprising the only McDonald
                  & Dominos franchise in the entire city while looking forward to many others in the near future.
      
                  Phase I has an extraordinary area spanning over 2,000 Kanals.
                </p>
              </div>
      
              <div className="etihad-card">
                <img src={bgImg} alt="Etihad Garden" />
                <span className="image-caption">Etihad Garden</span>
              </div>
      
            </div> */}
      {/* Amenities section */}
 {/* Amenities section */}
{/* <div className="amenities-section123">
  <h1>Amenities & Features</h1>
  <p>
    The ideal location of Etihad Garden Phase – I isn’t the only promising
    feature of the residential community. Other exceptional features include
  </p>

  <Swiper
    spaceBetween={20}
    slidesPerView={3}
    navigation={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Navigation, Autoplay]}
    className="amenities-slider123"
  >
    {amenities.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="card123">
          <img src={item.img} alt={item.title} />

         
          <div className="card-overlay123">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              className="card-btn123"
              onClick={() => toggleDesc(index)}
            >
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div> */}
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
          <img src={Image3} alt="Property" className="sideImage" />
        </div>
      </div>
      {/* Book Now form */}
      <div className="booknow-card123">
        <h1>Book Now</h1>
        <form>
          <div>
            <input type="text" required />
            <label>Full name *</label>
          </div>

          <div>
            <input type="tel" required />
            <label>Phone No. *</label>
          </div>

          <div>
            <input type="email" required />
            <label>Email Address *</label>
          </div>

          <div>
            <input type="text" required />
            <label>City *</label>
          </div>

          <div>
            <select required>
              <option value="">Select Country</option>
              <option value="pakistan">Pakistan</option>
              <option value="uae">UAE</option>
              <option value="uk">UK</option>
              <option value="usa">USA</option>
            </select>
            <label>Country</label>
          </div>

          <div>
            <input type="text" required />
            <label>Message</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Etihadgarden3;
