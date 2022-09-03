import React, { useEffect, useRef } from "react";
import "./home.css";
/* import mylogo from "../../assets/Logo/logo.svg"; */
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";

const nav_links = [
  {
    path: "#hero",
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
    path: "#images",
    display: "Imagens",
  },
  {
    path: "#footer",
    display: "Footer",
  },
];
const Home = ({ theme, troggleTheme }) => {
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const homeFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      homeRef.current.classList.add("home_shrink");
    } else {
      homeRef.current.classList.remove("home_shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", homeFunc);

    return () => window.removeEventListener("scroll", homeFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");
  return (
    <home className="home" ref={homeRef}>
      <div className="container">
        <nav className="nav_bar">
          <div className="logo">
            {/* <img src={mylogo} alt="" /> */}
            <h2>Ariel Paixão</h2>
          </div>
          {/* Barra de navegação */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav_links.map((item, index) => (
                <li className="menu_item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu_index"
                  >
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
          {/* mobile */}
          <span className="mobile_menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </span>
        </nav>
      </div>
    </home>
  );
};

export default Home;
