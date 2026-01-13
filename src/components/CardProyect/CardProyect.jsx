import React from "react";
import { SiGithub } from "react-icons/si";

import s from "./CardProyect.module.css";
import Carrousel from "../CarrouselManual/Carrousel";

export default function CardProyect({
  titleProyect,
  descriptionProyect,
  // imgArr,
  imgProyect,
  linkProyect,
  repoProyect,
  typeProyect,
}) {
  return (
    <div className={s.proyects}>
      <span className={s.titleProyect}>{titleProyect}</span>
      <Carrousel arrImages={imgProyect} />

      <span className={s.containLinks}>
        <a
          href={linkProyect}
          className={s.linksProyects}
          target="_blank"
          rel="noreferrer"
        >
          🌐 Ir al proyecto
        </a>
        <a
          href={repoProyect}
          className={s.linksProyects}
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className={s.iconLink} /> Repositorio
        </a>
      </span>
      <p>
        <b>{titleProyect}</b>, {descriptionProyect}
      </p>
      <span className={s.typeProyect}>{typeProyect}</span>
    </div>
  );
}
