import React from "react";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
// import ContactMe from "../../pages/ContactMe/ContactMe";
import s from "./navBar.module.css";

function NavBar() {
  // const [widthScreen, setWidthScreen] = useState();

  // window.addEventListener("resize", () => {
  //   setWidthScreen(window.visualViewport.width);
  // });

  // const handlerClickScroll = (e) => {
  //   e.preventDefault();
  //   const { name } = e.target;
  //   const element = document.getElementById(name);

  //   widthScreen < 1400
  //     ? element.scrollIntoView({ behavior: "smooth", block: "start" })
  //     : element.scrollIntoView({ behavior: "smooth", block: "end" });
  // };

  useEffect(() => {
    // setWidthScreen(window.visualViewport.width);
  }, []);

  return (
    <div className={s.containLayout}>
      <nav className={s.nav}>
        {/* <button
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
        <button className={s.links} name="skills" onClick={handlerClickScroll}>
          Habilidades
        </button>
        {/* <a className={s.links} href="#my-experience">
            Experiencia
          </a> */}
        {/* <Link className={s.links} to="/contact-me">
            Contacto
          </Link> 
        <button
          className={s.links}
          name="contact-me"
          onClick={handlerClickScroll}
        >
          Contacto
        </button> */}
      </nav>

      <Outlet />
    </div>
  );
}

export default NavBar;
