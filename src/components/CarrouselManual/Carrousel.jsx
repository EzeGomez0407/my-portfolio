import React from "react";
// import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Carrousel.css";
import { AdvancedImage } from "@cloudinary/react";

function Carrousel({ arrImages }) {
  // const [current, setCurrent] = useState(0);

  // const handlerOnClick = (e) => {
  //   const { name } = e.target;

  //   if (name === "next-btn") {
  //     current < arrImages.length - 1 && setCurrent((curr) => curr + 1);
  //   } else if (name === "prev-btn") {
  //     current > 0 && setCurrent((curr) => curr - 1);
  //   }
  // };
  
  return (
    <div className={"contain"}>
      <div className="containImg">
        {/* <SwitchTransition>
          <CSSTransition
            classNames="fade_img"
            key={arrImages[current]}
            addEndListener = {(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
          > */}
            <AdvancedImage cldImg={arrImages} className="img"
              alt="imagenes carrousel"/>
            {/* <img
              src={arrImages}
              className="img"
              alt="imagenes carrousel"
            /> */}
          {/* </CSSTransition>
        </SwitchTransition> */}
      </div>
      {/* <div className="containBtn">
        <button name="prev-btn" onClick={handlerOnClick}>
          Anterior
        </button>
        <button name="next-btn" onClick={handlerOnClick}>
          Siguiente
        </button>
      </div> */}
    </div>
  );
}

export default Carrousel;
