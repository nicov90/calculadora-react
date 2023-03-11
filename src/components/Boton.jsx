import React, { useEffect } from "react";
import "../css/Boton.css";
import { addVibration } from "../js/vibration.js";

const Boton = (props) => {

  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  useEffect(() => {
    addVibration();
  }, []);

  //* props.children para mostrar el texto dentro de la etiqueta
  //! props.insert() devuelve el resultado de la función, pero onClick debe tener una función como valor
  
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() =>
        props.children !== "=" ? props.insert(props.children) : props.calculate()
      }
    >
      {props.children}
    </div>
  );
};
export default Boton;
