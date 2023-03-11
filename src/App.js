import { useState } from "react";
import "./App.css";
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';

function App() {
  const [input, setInput] = useState('');

  const updateInput = (value) =>{
    let lastInputChar = input.charAt(input.length-1);
    let lastIsOperator = 
    (lastInputChar) === '/' || (lastInputChar) === '*' ||
    (lastInputChar) === '-' || (lastInputChar) === '+';

    //* Si el valor ingresado es un número,
    //* el ultimo caracter no es operador,
    //* o el input está vacio:
    if(!isNaN(value) || !lastIsOperator || !input){
      setInput(input + value);
    }
  }
  const calculateResult = () =>{
    let result = '';
    try{
      if(input){
        result = eval(input).toString();
        console.log("Resultado original: " + result);
        if(result.includes(".")){
          const dotIndex = result.indexOf('.');

          const integerPart = result.substring(0, dotIndex);
          let decimalPart = result.substring(dotIndex + 1);
        
          for (let i = decimalPart.length - 1; i > 2; i--) {
            if (decimalPart.charAt(i) === decimalPart.charAt(i - 1)) {
              decimalPart = decimalPart.slice(0, i-1)
            }
          }
          result = parseFloat(integerPart + "." + decimalPart).toFixed(2);
        }
        if(result.length > 13){
          result = result.slice(0,13);
        }

      }else{
        alert("Ingrese un valor.")
      }
    }catch(error){
      console.log(error);
      alert("Operación no válida.")
    }
    setInput(result);
  }
  
  //* Usamos tag de cierre en los componentes de Boton para poder colocar texto en el botón,
  //* pero además para poder mostrarlo necesitamos usar la propiedad props.children dentro de él
  return (
      <div className="App">
        <div className="titulo-contenedor">
          <h1>Calculadora</h1>
        </div>
        <div className="calculadora-contenedor">
          <div className="fila">
            <Pantalla 
              input={input}
            />
          </div>
          <div className="fila">
            <Boton insert={updateInput}>7</Boton>
            <Boton insert={updateInput}>8</Boton>
            <Boton insert={updateInput}>9</Boton>
            <Boton insert={updateInput}>/</Boton>
          </div>
          <div className="fila">
            <Boton insert={updateInput}>4</Boton>
            <Boton insert={updateInput}>5</Boton>
            <Boton insert={updateInput}>6</Boton>
            <Boton insert={updateInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton insert={updateInput}>1</Boton>
            <Boton insert={updateInput}>2</Boton>
            <Boton insert={updateInput}>3</Boton>
            <Boton insert={updateInput}>-</Boton>
          </div>
          <div className="fila cinco">
            <Boton insert={updateInput}>0</Boton>
            <Boton insert={updateInput}>.</Boton>
            <Boton insert={updateInput}>+</Boton>
          </div>
          <div className="fila seis">
            <BotonClear clear={() => setInput('')}>Clear</BotonClear>
            <Boton calculate={calculateResult}>=</Boton>
          </div>
        </div>
        <footer>
          <p><strong>Nicolas Valdez</strong> @ 2023</p>
        </footer>
      </div>
  );
}

export default App;
