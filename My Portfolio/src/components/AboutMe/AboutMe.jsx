import React from "react";
import s from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <header className={s.header} id="about-me">
      <img
        src="./perfil.png"
        alt="imagen de perfil"
        className={s.imgProfile}
      />
      <div className={s.containTitleAndText}>
        <h1 className={s.titleHeader}>Desarrollador Frontend</h1>
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
          <b>¡Bienvenido!</b> Mi nombre es Ezequiel y soy Desarrollador Frontend con formación en Desarrollo Web Full Stack. Me especializo en la creación de interfaces web utilizando JavaScript y React, centrándome en la experiencia de usuario y en el desarrollo de componentes claros y reutilizables. Valoro el orden en el código y la mantenibilidad. Actualmente busco mi primer oportunidad como Frontend Junior para seguir aprendiendo y crecer profesionalmente.
        </p>
      </div>
    </header>
  );
}
