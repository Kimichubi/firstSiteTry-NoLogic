import "../Purificadores/produts.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Filtros() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-duration="2000"
        className="container-produts"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="title-produts"
        >
          <h1>Alguns de nossos Filtros de Água</h1>
        </div>
        <div className="first-content-produts">
          <div className="quadrado">
            <Link to="/facilec3">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-multi-facile-c3-reduz-o-cloro.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/facilec7">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-multi-facile-c7-elimina-bacterias.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/carbonblock7">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-carbon-block-carvao-ativado-7-hidrofiltros.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/carbonblock9">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/Padrao-Site-907-0019.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="first-content-produts">
          <div className="quadrado">
            <Link to="/refilhfcsl">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-consul-csl-para-purificador-de-agua-cpc30-cpb31-cpb34-cpb35-e-cpb36-hf-csl-selo-abrafipa.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/refilhfelx30">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-hf-elx3040-para-purificadores-electrolux.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/refilhfelx10">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-hf-elx10-para-purificadores-electrolux.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/refilhfelx20">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/refil-hf-elx20-para-purificadores-electrolux.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
