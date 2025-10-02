import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./Footer.css";
import image from '../assets/logo-3.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Left Section */}
                <div className="footer-section">
                    <img src={image} alt="Etihad Town" className="footer-logo" />
                    <p>
                        Indulge In The Serene Environment Of Etihad Town,
                        Where Affordable Luxury Meets A Peaceful Lifestyle.
                        Maximizing Utility While Maintaining High Standards,
                        Etihad Offers The Best For Past, Present, And Future Customers.
                    </p>
                </div>

                {/* Middle Section - Locations */}
                <div className="footer-section">
                    <h3>OUR LOCATION</h3>
                    <p><strong>Corporate Office</strong><br />Etihad Town Phase – I , 3.5km Raiwind Road, Lahore.</p>
                    <p><strong>Site Office</strong><br />Etihad Town Phase – II Site Office (4km Off Ferozpur Road, Lahore)</p>
                    <p><strong>DHA RAYA Office</strong><br />44-Plaza, Fairways Commercial Market, DHA Raya Phase 6, Lahore.</p>
                    <p><strong>Dubai Office</strong><br />Office 906, 9th Floor, Empire Heights Tower A Business Bay, Dubai.</p>
                    <p><strong>UK Office</strong><br />Unit 10, 210 Ilford Lane, Ilford, IG1 2LW, London, UK</p>
                    <p><strong>Sialkot Office</strong><br />Etihad Town Sialkot, 2 KM Daska Road, Motra Stop, Sialkot.</p>
                </div>

                {/* Right Section - Contact */}
                <div className="footer-section-icons">
                    <h3>GET IN TOUCH</h3>
                    <p><strong>Email</strong><br />info@etihadtown.com.pk</p>
                    <p><strong>Phone</strong><br />
                        PAK: 042-111-99-88-77 <br />
                        UK: +44 (0) 203 1500 958 <br />
                        UAE: +971 52 744 6451
                    </p>

                  {/* Social Icons */}
<div className="social-icons">
  <a href="#" className="facebook"><FaFacebookF /></a>
  <a href="#" className="instagram"><FaInstagram /></a>
  <a href="#" className="youtube"><FaYoutube /></a>
  <a href="#" className="linkedin"><FaLinkedin /></a>
  <a href="#" className="tiktok"><FaTiktok /></a>
</div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>© Copyright 2024 – Etihad Town . All Rights Reserved</p>
                <p>Crafted @ EVOLVE</p>
            </div>
        </footer>
    );
};

export default Footer;
