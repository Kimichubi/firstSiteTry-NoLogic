import { Link, useLocation } from "react-router-dom";
import "../styles/homeEHeader.css";

import logoImg from "../imgs/Logo.jpg";

export default function Header() {
  const { pathname } = useLocation();
  function MouseOver(event) {
    event.target.style.fontSize = "30px";
  }
  function MouseOut(event) {
    event.target.style.fontSize = "15px";
  }
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1000" className="header">
        <Link to="/">
          <img src={logoImg} id="logo" alt="logo" />
        </Link>

        <header className="header2">
          <div className="links">
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className={`link-button ${pathname === "/" ? "colorzinha" : ""}`}
              to="/"
            >
              Home
            </Link>
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className={`link-button ${
                pathname === "/layout/products" ||
                pathname === "/layout/filtros"
                  ? "colorzinha"
                  : ""
              }`}
              to="/layout/products"
            >
              Produtos
            </Link>
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className={`link-button ${
                pathname === "/servicos" ? "colorzinha" : ""
              }`}
              to="/servicos"
            >
              Serviços
            </Link>
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className={`link-button ${
                pathname === "/contato" ? "colorzinha" : ""
              }`}
              to="/contato"
            >
              Contato
            </Link>
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className={`link-button ${
                pathname === "/visite" ? "colorzinha" : ""
              }`}
              to="/visite"
            >
              Visite-nos
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
