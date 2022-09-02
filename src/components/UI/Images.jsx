import React from "react";
import "../../styles/images.css";
import Carousel from "nuka-carousel";
import image1 from "../../assets/img/contact_01.png";
import image2 from "../../assets/img/contact_02.png";
import image3 from "../../assets/img/contact_03.png";
import image4 from "../../assets/img/contact_04.png";
import image5 from "../../assets/img/contact_05.png";

const Images = () => {
  return (
    <section className="me_carousel" id="images">
      <div className="container">
        <div className="carousel_content">
          <h6 className="subtitle">imagens</h6>
          <h2>
            Minhas páginas desenvolvidadas
            <span className="highlight"> para Web</span>
          </h2>
        </div>
        <div className="carousel_wrapper">
          <div className="carousel_item">
            <div className="carousel_img">
              <Carousel
                autoplayInterval={5000}
                autoplay={true}
                pauseOnHover
                cellSpacing={0}
                adaptiveHeightAnimation={true}
                wrapAround={true}
                slidesToShow={3}
                style={{ height: "42rem" }}
              >
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

export default Images;
