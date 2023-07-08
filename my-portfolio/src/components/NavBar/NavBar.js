import React from "react";
import { Outlet, Link } from "react-router-dom";
// import ContactMe from "../../pages/ContactMe/ContactMe";
import s from "./navBar.module.css";

function NavBar() {
  const handlerClickScroll = (e) => {
    e.preventDefault();
    const { name } = e.target;

    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className={s.containNav}>
      <nav className={s.nav}>
        <button
          className={s.links}
          name="about-me"
          onClick={handlerClickScroll}
        >
          Sobre mi
        </button>
        <button
          className={s.links}
          name="my-proyects"
          onClick={handlerClickScroll}
        >
          Proyectos
        </button>
        {/* <a className={s.links} href="#my-experience">
          Experiencia
        </a> */}
        {/* <Link className={s.links} to="/contact-me">
          Contacto
        </Link> */}
        <button
          className={s.links}
          name="contact-me"
          onClick={handlerClickScroll}
        >
          Contacto
        </button>
      </nav>

      <Outlet />
    </div>
  );
}

export default NavBar;
