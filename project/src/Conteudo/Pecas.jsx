import "../styles/purificadores.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { usePurificador } from "../context/PurificadorShow";

export default function Pecas() {
  const {pecas} = usePurificador()
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-right"
        data-aos-duration="1000"
        className="container-produts"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="title-produts"
        >
          <h1>Algumas de nossas Peças</h1>
        </div>
        <div className="first-content-produts">
          {pecas.map((produto) => {
            return (
              <div key={produto.id} className="quadrado">
                <Link className="link" to={`/layout/pecas/${produto.id}`}>
                  <img
                    className="imgs-products"
                    src={produto.coverImage1}
                    alt=""
                  />
                  <p className="informativo">{produto.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
