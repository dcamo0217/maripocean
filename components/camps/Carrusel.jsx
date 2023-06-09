import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

const Carrusel = ({ images }) => {
  return (
    <div>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img className="d-block w-100" src={image.src} alt="image slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

Carrusel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carrusel;
