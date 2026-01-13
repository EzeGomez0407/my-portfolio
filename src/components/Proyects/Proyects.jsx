import CardProyect from "../CardProyect/CardProyect";
import s from "./Proyects.module.css";
// import { proyects } from "../../data/proyectsData";

function Proyects() {
  return (
    <section className={s.contain} id="my-proyects">
      <h2 className={s.titleHeader}>Proyectos</h2>
      {/* <div className={s.containProyect}>
        {proyects.length &&
          proyects.map((proyect) => (
            <CardProyect
              titleProyect={proyect.titleProyect}
              descriptionProyect={proyect.descriptionProyect}
              // imgArr={proyect.imgArr}
              imgProyect={proyect.imgProyect}
              linkProyect={proyect.linkProyect}
              repoProyect={proyect.repoProyect}
              typeProyect={proyect.typeProyect}
              key={proyect.linkProyect}
            />
          ))}
      </div> */}
    </section>
  );
}

export default Proyects;
