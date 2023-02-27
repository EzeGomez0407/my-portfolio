import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Proyects from "../../components/Proyects/Proyects";
import s from "./Home.module.css";
import { SiTwitter, SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

function Home() {
  return (
    <div className={s.containHome}>
      <header className={s.header}>
        <img
          src="../../../imgProfile.png"
          alt="imagen de perfil"
          className={s.imgProfile}
        />
        <h1 className={s.titleHeader}>
          Full Stack Developer, en busca de mi primer empleo IT
        </h1>
      </header>
      <AboutMe />
      <hr className={s.separateComponent} />
      <Proyects />
      <hr className={s.separateComponent} />
      <div id="contact-me" className={s.containContact}>
        <h2 className={s.titleContact}>Contacto</h2>
        <div className={s.divLinksContact}>
          <a
            className={s.linksContact}
            href="https://www.linkedin.com/in/eze-gomez-merlo/"
          >
            <SiLinkedin
              style={{ fontSize: "18px", color: "#0e76a8", marginRight: "6px" }}
            />
            Linkedin
          </a>
          <a className={s.linksContact} href="https://github.com/EzeGomez0407">
            <SiGithub
              style={{ fontSize: "18px", color: "#171515", marginRight: "6px" }}
            />
            GitHub
          </a>
          <a className={s.linksContact} href="mailto:gomezmerloe@gmail.com">
            <SiGmail
              style={{
                fontSize: "18px",
                color: "#EA4335",
                marginRight: "6px",
              }}
            />
            correo
          </a>
          <a
            className={s.linksContact}
            href="https://twitter.com/EzequielGmezMe2"
          >
            <SiTwitter
              style={{ fontSize: "18px", color: "#00acee", marginRight: "6px" }}
            />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
