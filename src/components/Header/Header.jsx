import React from "react";
import "./Header.css";

const nav_links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav_bar">
          <div className="logo">
            <h2>Ariel Paixão</h2>
          </div>

          {/* ===== nvegação ===== */}
          <div className="navigation">
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu_item">
                  <a href={item.path} className="menu_index">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== ligth mode ===== */}
          <div className="light_mode">
            <span>
              <i class="ri-sun-line"></i> Light Mode
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
