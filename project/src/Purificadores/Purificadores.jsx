import "./produts.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Purificadores() {
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
          <h1>Alguns de nossos Purificadores</h1>
        </div>
        <div className="first-content-produts">
          <div className="quadrado">
            <Link to="/ultramax">
              <img
                className="imgs-products"
                src="https://cdn.awsli.com.br/2500x2500/1031/1031577/produto/193243845/b11cc3cde0.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/giom">
              <img
                className="imgs-products"
                src="https://d2r9epyceweg5n.cloudfront.net/stores/003/488/895/products/purificador_de_agua_natural_e_alcalina_planeta_agua_giom_preto_01-831b477d6d8d701a9716933244252736-640-0.jpgv637976582562200000"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/torneira-pop-preta">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/torneira-com-purificador-de-agua-pop-preta-para-parede.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/AS2">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-dual-as2.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="first-content-produts">
          <div className="quadrado">
            <Link to="/facile">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/purificador-de-agua-hidrofiltros-facile-branco-c3-reduz-cloro.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/torneira-pop-branca">
              <img
                className="imgs-products"
                src="https://d31dtgi5yshghi.cloudfront.net/Custom/Content/Products/10/40/10400_hidrofiltro-pop-bicamovel-branco-907-22-2269_z1_637829330501016775.png "
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/filtro-blist">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-blist-5-transparente-hidrofiltros.png"
                alt=""
              />
            </Link>
          </div>
          <div className="quadrado">
            <Link to="/declorador">
              <img
                className="imgs-products"
                src="https://hidrofiltros.com.br/wp-content/uploads/2022/07/filtro-declorador-clor-934-para-ponto-de-uso-branco.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
