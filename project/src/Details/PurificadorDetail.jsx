import { usePurificador } from "../context/PurificadorShow";
import { useParams } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm";
import "../styles/purificadores.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PurificadorDetail() {
  const { getPurificador } = usePurificador();
  const { id } = useParams();
  useEffect(() => {
    AOS.init();
  }, []);

  const purificador = getPurificador(id);
  return (
    <>
      <div
        data-aos="fade-down-right"
        data-aos-duration="1000"
        className="container-carousel"
      >
        <div className="carousel-content">
          <div
            id="carouselExampleIndicators"
            className="carousel carousel-dark carousel-fade"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={purificador.coverImage1}
                  className="imgCarousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={purificador.coverImage2}
                  className="imgCarousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={purificador.coverImage3}
                  className="imgCarousel"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
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
              data-bs-target="#carouselExampleIndicators"
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
        <div className="desc">
          <p>{purificador.description1}</p>
        </div>
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-duration="2000"
        className="desc-final"
      >
        <div className="desc">
          <p>{purificador.description2}</p>
        </div>
      </div>
    </>
  );
}
