import React from "react";
import Skills from "../../components/Skills/Skills";
import Proyects from "../../components/Proyects/Proyects";
import s from "./Home.module.css";
import { SiTwitter, SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import AboutMe from "../../components/AboutMe.js/AboutMe";

function Home() {
  return (
    <div className={s.containHome}>
      <AboutMe />
      <hr className={s.separateComponent} />
      <Proyects />
      <hr className={s.separateComponent} />
      <Skills />
      <hr className={s.separateComponent} />
      <section id="contact-me" className={s.containContact}>
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
      </section>
    </div>
  );
}

export default Home;
