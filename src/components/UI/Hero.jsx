import React, { useEffect, useState } from "react";
import "../../styles/hero.css";
import imghero from "../../assets/img/imgHero.svg";
import LightHero from "../../assets/img/LightHero.svg";

const Hero = ({ theme }) => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 1500;
  const toRotate = [
    "Programador Front / Back-end ",
    "Desenvolvedor Web ",
    "Grato pela sua visita!",
  ];
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setisDeleting(true);
      setIndex((prevDelta) => prevDelta - 1);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setisDeleting(false);
      setloopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((previndex) => previndex + 1);
    }
  };

  return (
    <section className="hero_section" id="hero">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_img">
            <img
              className="fluid"
              src={theme === "light-theme" ? LightHero : imghero}
              alt="SVG personlaizado de Ariel Paixão"
            />
          </div>
          <div className="hero_content ">
            <h2 className="pb-15">Olá mundo!</h2>
            <h2>
              Eu sou
              <span className="name_style">{"\n"}</span>
              <span
                className="highlight"
                dataPeriod="500"
                data-rotate='["Programador Front / Back-end", "Desenvolvedor Web ", "Grato pela sua visita!"]'
              >
                <span className="txt-rotate">{text}</span>
              </span>
            </h2>
            <p className="description">
              Conheça um pouco mais sobre mim, meus projetos, linguagens mais
              usadas e produtos.
            </p>
            <div className="hero_btns">
              <button className="primary_btn">GitHub</button>
              <button className="secondary_btn">LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
