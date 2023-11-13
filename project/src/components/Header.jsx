import { Link } from "react-router-dom";
import logoImg from "../imgs/Logo.jpg";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img id="logo" src={logoImg} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/layout/products" className="nav-link" href="#">
                  Produtos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/servicos" className="nav-link" href="#">
                  Serviços
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/visite" className="nav-link " aria-disabled="true">
                  Visite-nos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link " aria-disabled="true">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
