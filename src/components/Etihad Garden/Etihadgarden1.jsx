import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import './Etihadgarden1.css'
import bgImg from '../../assets/Garden1/Etihad_Garden_Gate-1.jpg'
import image1 from '../../assets/Garden1/Etihad_Garden_Club.jpg'
import image2 from '../../assets/Garden1/Etihad_garden_commercial_plots.jpg'
import image3 from '../../assets/Garden1/Etihad_Garden_Gate.jpg'
import image4 from '../../assets/Garden1/Etihad_Garden_Masjid.jpg'
import image5 from '../../assets/Garden1/Etihad_Garden_Park-1.jpg'
import image6 from '../../assets/Garden1/Etihad-Garden-under-ground-electricty-city.jpg'
import image7 from '../../assets/Garden1/pexels-onemorecoffee-179993 copy.jpg'
import image8 from '../../assets/Garden1/sports-arena copy.png'


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

const Etihadgarden1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDesc = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "62vh"
        }}
      >
        <h1 style={{ color: "#fff", padding: "20px" }}>Welcome to Etihad Town Phase 1</h1>
        {/* rest of your content */}
      </div>

      <div className="etihad-section">
        <div className="etihad-content">
          <h1>Etihad Garden Phase – I</h1>
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

      </div>
<div className="amenities-section">
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
    className="amenities-slider"
  >
    {amenities.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="card">
          <img src={item.img} alt={item.title} />

          {/* 👇 Overlay added here */}
          <div className="card-overlay">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>

     

          {activeIndex === index && (
            <div className="card-desc">
              <p>{item.desc}</p>
            </div>
          )}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>



      <div className="booknow-card">
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
  )
}

export default Etihadgarden1