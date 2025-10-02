import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import image from "../assets/logo-3.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // track dropdown open
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // ✅ Menu with dropdowns
  const [menu, setMenu] = useState([
    {
      id: "town",
      name: "ETIHAD TOWN",
      path: "/etihad",
      dropdown: [
        { id: "p1", name: "ETIHAD TOWN PHASE – I", path: "/phase1" },
        { id: "p2", name: "ETIHAD TOWN PHASE – II", path: "/phase2" },
        { id: "p3", name: "ETIHAD TOWN PHASE – III", path: "/phase3" },
        { id: "p4", name: "PREMIER ENCLAVE", path: "/premier-enclave" },
        { id: "p5", name: "ETIHAD SIALKOT", path: "/sialkot" },
      ],
    },
    {
      id: "garden",
      name: "ETIHAD GARDEN",
      path: "/garden",
      dropdown: [
        { id: "g1", name: "ETIHAD GARDEN PHASE – I", path: "/garden1" },
        { id: "g2", name: "ETIHAD GARDEN PHASE – II", path: "/garden2" },
        { id: "g3", name: "ETIHAD GARDEN PHASE – III", path: "/garden3" },
      ],
    },
    { id: "group", name: "ETIHAD GROUP", path: "/group" },
    { id: "vr", name: "VR TOUR", path: "/vr-tour" },
    { id: "plan", name: "PAYMENT PLAN", path: "/payment-plan" },
    { id: "downloads", name: "DOWNLOADS", path: "/downloads" },
    { id: "media", name: "MEDIA", path: "/media" },
    { id: "contact", name: "CONTACT", path: "/contact" },
  ]);

  // ✅ Swap Town & Garden on click
  const handleSwap = (id) => {
    if (id === "town" || id === "garden") {
      setMenu((prev) => {
        const town = prev.find((item) => item.id === "town");
        const garden = prev.find((item) => item.id === "garden");
        const others = prev.filter((item) => item.id !== "town" && item.id !== "garden");

        if (id === "garden") {
          return [garden, town, ...others];
        }
        if (id === "town") {
          return [town, garden, ...others];
        }
        return prev;
      });
    }
  };

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true); // all other pages always scrolled
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={image} alt="Etihad Logo" className="logo-img" />
        </Link>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        {menu.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${item.dropdown ? "dropdown" : ""}`}
            onClick={() => handleSwap(item.id)}
            onMouseEnter={() => item.dropdown && setOpenDropdown(item.id)}
            onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
          >
            <NavLink to={item.path}>{item.name}</NavLink>

            {/* Dropdown show only on hover */}
            {item.dropdown && openDropdown === item.id && (
              <ul className="dropdown-menu">
                {item.dropdown.map((d) => (
                  <li key={d.id}>
                    <Link to={d.path}>{d.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
