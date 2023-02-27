import React from "react";
import { Outlet, Link } from "react-router-dom";
// import ContactMe from "../../pages/ContactMe/ContactMe";
import s from "./navBar.module.css";

function NavBar() {
  return (
    <div className={s.containNav}>
      <nav className={s.nav}>
        <a className={s.links} href="#about-me">
          Sobre mi
        </a>
        <a className={s.links} href="#my-proyects">
          Proyectos
        </a>
        {/* <a className={s.links} href="#my-experience">
          Experiencia
        </a> */}
        {/* <Link className={s.links} to="/contact-me">
          Contacto
        </Link> */}
        <a className={s.links} href="#contact-me">
          Contacto
        </a>
      </nav>

      <Outlet />
    </div>
  );
}

export default NavBar;
