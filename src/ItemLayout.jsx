import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./itemLayout.css";
export default function ItemLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="3000" className="tabs">
        <Link
          to="products"
          className={`tab ${pathname === "/layout/products" ? "active" : ""}`}
        >
          Purificadores
        </Link>
        <Link
          to="filtros"
          className={`tab ${pathname === "/layout/filtros" ? "active" : ""}`}
        >
          Filtros
        </Link>
      </div>
      <Outlet />
    </>
  );
}
