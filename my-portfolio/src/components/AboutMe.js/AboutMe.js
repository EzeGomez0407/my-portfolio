import React from "react";
import s from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <header className={s.header} id="about-me">
      <img
        src="../../../imgProfile.png"
        alt="imagen de perfil"
        className={s.imgProfile}
      />
      <div className={s.containTitleAndText}>
        <h1 className={s.titleHeader}>Full Stack Developer</h1>
        <p className={s.aboutMe_p}>
          {/* <b>¡Bienvenido!</b> Me llamo Ezequiel, mi objetivo principal es
          embarcarme en mi primer desafío profesional en el campo de IT, donde
          pueda aplicar mis habilidades y conocimientos en desarrollo de
          software.
          <br /> */}
          {/* 
          
            -Voluntariosa
            -Trabajadora
            -Respetuosa
            -Paciente
            -Flexible
            -Analizador
            -Curiosa
          */}
          <b>¡Bienvenido!</b> Me llamo Ezequiel, soy una persona responsable,
          voluntariosa y respetuosa. Mi pasión por la tecnología me llevó a
          elegir la programación como mi campo de especialización.
          <br />
          <br />A lo largo de mi trayecto en el aprendizaje autodidacta como
          tambíen en cursos, he adquirido una base sólida en varias tecnologías.
          Estoy familiarizado con metodologías ágiles y tengo experiencia
          práctica en la resolución de problemas y el desarrollo de soluciones,
          doy lo mejor de mí para escribir código limpio y escalable.
        </p>
      </div>
    </header>
  );
}
