import { Link, useLocation } from "react-router-dom";
import "../Home/homeEHeader.css";
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
        <h1 id="logo">Lua D´Água</h1>

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
                pathname === "/layout/servicos" ? "colorzinha" : ""
              }`}
              to="#links"
            >
              Serviços
            </Link>
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className={`link-button ${
                pathname === "/layout/contato" ? "colorzinha" : ""
              }`}
              to="#links"
            >
              Contato
            </Link>
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className={`link-button ${
                pathname === "/layout/visite" ? "colorzinha" : ""
              }`}
              to="#links"
            >
              Visite-nos
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}
