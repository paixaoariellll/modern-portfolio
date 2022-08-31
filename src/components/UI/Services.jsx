import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Aplicativos desenvolvidos",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolore.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolore.",
  },
  {
    icon: "ri-landscape-line",
    title: "Designer Gráfico",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolore.",
  },
  {
    icon: "ri-terminal-box-line",
    title: "Front / Back - end Developer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolore.",
  },
];
const Services = () => {
  return (
    <section id="services">
      <div className="container container-card">
        <div className="services_top-content">
          <h6 className="subtitle">Meus Serviços</h6>
          <h2>Criamos seus projetos </h2>
          <h2 className="highlight">com qualidade</h2>
        </div>
        <div className="service_item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services_item" key={index}>
              <span className="service_icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
