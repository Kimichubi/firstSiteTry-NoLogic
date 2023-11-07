import PropTypes from "prop-types";
import "./item.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/js/index.esm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
Item.propTypes = {
  text: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default function Item({ text, img1, img2, img3, title, description }) {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  const MouseOver = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    // Acesse o elemento de imagem usando a ref imgRef
    if (imgRef1.current || imgRef2.current || imgRef3.current) {
      imgRef1.current.style.transformOrigin = `${x}px ${y}px`;
      imgRef1.current.style.transform = "scale(2)";
      imgRef2.current.style.transformOrigin = `${x}px ${y}px`;
      imgRef2.current.style.transform = "scale(2)";
      imgRef3.current.style.transformOrigin = `${x}px ${y}px`;
      imgRef3.current.style.transform = "scale(2)";
    }
  };
  const MouseLeave = () => {
    // Resetando a transformação da imagem quando o mouse sai
    if (imgRef1.current || imgRef2.current || imgRef3.current) {
      imgRef1.current.style.transformOrigin = "center center";
      imgRef1.current.style.transform = "scale(1)";
      imgRef2.current.style.transformOrigin = "center center";
      imgRef2.current.style.transform = "scale(1)";
      imgRef3.current.style.transformOrigin = "center center";
      imgRef3.current.style.transform = "scale(1)";
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos-duration="2000"
        data-aos="zoom-in-up"
        className="container-item"
      >
        <Link className="link-button" to="/layout/products">
          Voltar
        </Link>
        <h2 className="special-item">{title}</h2>
        <div className="content-item">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  ref={imgRef1}
                  onMouseMove={MouseOver}
                  onMouseLeave={MouseLeave}
                  src={img1}
                  className="img-carousel d-block "
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  ref={imgRef2}
                  onMouseMove={MouseOver}
                  onMouseLeave={MouseLeave}
                  src={img2}
                  className="img-carousel d-block "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item">
                <img
                  ref={imgRef3}
                  onMouseMove={MouseOver}
                  onMouseLeave={MouseLeave}
                  src={img3}
                  className="img-carousel d-block "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="text-item">{text}</div>
        </div>

        <div
          data-aos-duration="1000"
          data-aos="flip-down"
          className="description"
        >
          <div
            data-aos-duration="1000"
            data-aos="flip-rigth"
            className="description-title"
          >
            <h1>Descrição</h1>
          </div>
          <p className="text-description">{description}</p>
        </div>
      </div>
    </>
  );
}
