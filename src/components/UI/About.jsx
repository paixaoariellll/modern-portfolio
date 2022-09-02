import React from "react";
import "../../styles/about.css";
import about_img2 from "../../assets/img/about_img2.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Primeiro Projeto",
    desc: "Veritatis id vitae temporibus rerum, omnis accusantium pariatur ad quod explicabo commodi!",
    now: 50,
  },
  {
    icon: "ri-team-line",
    title: "Segundo Projeto",
    desc: "Veritatis id vitae temporibus rerum, omnis accusantium pariatur ad quod explicabo commodi!",
    now: 60,
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Terceiro Projeto",
    desc: "Veritatis id vitae temporibus rerum, omnis accusantium pariatur ad quod explicabo commodi!",
    now: 70,
  },
  {
    icon: "ri-apps-line",
    title: "Quarto Projeto",
    desc: "Veritatis id vitae temporibus rerum, omnis accusantium pariatur ad quod explicabo commodi!",
    now: 90,
  },
  {
    icon: "ri-apps-line",
    title: "Quinto Projeto",
    desc: "Veritatis id vitae temporibus rerum, omnis accusantium pariatur ad quod explicabo commodi!",
    now: 60,
  },
  {
    icon: "ri-apps-line",
    title: "Sexto Projeto",
    desc: "Veritatis id vitae temporibus rerum, omnis accusantium pariatur ad quod explicabo commodi!",
    now: 55,
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h6 className="subtitle">Sobre mim</h6>
        <h2>Habilidades e linguagens</h2>
        <h2 className="highlight">Me contrata logo</h2>
        <p className="description about_content-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus corporis porro perspiciatis, quae vitae praesentium.
        </p>
        <div className="about_wrapper">
          <div className="about_content">
            <div className="choose_item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose_me-item" key={index}>
                  <span className="choose_me-icon">
                    <i class={item.icon}></i>
                  </span>
                  <h4 className="choose_me-title">
                    {item.title}
                    <p className="description">{item.desc}</p>
                    <ProgressBar
                      animateOnRender="true"
                      initCompletedOnAnimation="0"
                      transitionTimingFunction="ease-in-out"
                      transitionDuration="4s"
                      labelColor="var(--heading-color)"
                      padding="0"
                      bgColor="var(--primary-color)"
                      labelAlignment="left"
                      labelSize="10px"
                      height="10px"
                      completed={`${item.now}`}
                    />
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="about_img">
            <img src={about_img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
