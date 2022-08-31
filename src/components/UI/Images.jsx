import React from "react";
import "../../styles/images.css";
import Carousel from "nuka-carousel";
import image1 from "../../assets/img/contact_01.png";
import image2 from "../../assets/img/contact_02.png";
import image3 from "../../assets/img/contact_03.png";
import image4 from "../../assets/img/contact_04.png";
import image5 from "../../assets/img/contact_05.png";

const Contact = () => {
  return (
    <section className="me_contact" id="contact">
      <div className="container">
        <div className="contact_content">
          <h6 className="subtitle">Meus contatos</h6>
          <h2>
            Entre em contato
            <span className="highlight"> pelas minhas redes</span>
          </h2>
        </div>
        <div className="contact_wrapper">
          <div className="contact_item">
            <div className="contact_img">
              <Carousel wrapAround={true} slidesToShow={3}>
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
                <img src={image5} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
