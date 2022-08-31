import React from "react";
import "./header.css";
/* import mylogo from "../../assets/Logo/logo.svg"; */
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";

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
    path: "#services",
    display: "Services",
  },
  {
    path: "#projects",
    display: "Contato",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];
const header = ({ theme, troggleTheme }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav_bar">
          <div className="logo">
            {/* <img src={mylogo} alt="" /> */}
            <h2>Ariel Paixão</h2>
          </div>
          {/* Barra de navegação */}
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
          {/* lightmode */}
          <div className="light_mode icons_lightmode">
            <span onClick={troggleTheme}>
              {theme === "light-theme" ? (
                <span className="dark-theme">
                  <img style={{ width: "1.7rem" }} src={moon} alt="" />
                </span>
              ) : (
                <span>
                  <img style={{ width: "2.5rem" }} src={sun} alt="" />
                </span>
              )}
            </span>
          </div>
          {/* login */}
        </nav>
      </div>
    </header>
  );
};

export default header;
