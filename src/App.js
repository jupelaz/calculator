import React, {useState} from 'react';
import './App.css';

function App() {
  const [resultado, setResultado] = useState("0")
  const [stringOperaciones, setStringOperaciones] = useState("")
  const [operaciones, setOperaciones] = useState([])
  const calcular = (numero1, numero2, operando) => {
    if (isNaN(numero1) || isNaN(numero2))return 0
    else if(operando === "plus") return numero1 + numero2
    else if(operando === "minus") return numero1 - numero2
    else if(operando === "multi") return numero1 * numero2
    else if(operando === "divi" && numero2 !== 0) return numero1 / numero2
    else return 0
  }
  const initialize = () => {
    setResultado("0")
    setStringOperaciones("")
    setOperaciones([])
  }
  const operar = (e) => {
    console.log(e.target.id)
    console.log(e.target.value)
    if(["1","2","3","4","5","6","7","8","9","0"].includes(e.target.id)){
      if(resultado === "0" || stringOperaciones === ""){
        setResultado(e.target.id)
      }else{
        setResultado(resultado.concat(e.target.id))
      }
      setStringOperaciones(stringOperaciones.concat(e.target.id))
    }
    else if(["plus","minus","igual"].includes(e.target.id)){
      let numero = parseInt(resultado) 
      let operador = e.target.id 
      for(var i = operaciones.length - 1; i>=0;i--){
        numero = calcular(operaciones[i][0],numero,operaciones[i][1])
      }
      
      if(e.target.id === "igual"){
        setOperaciones([])
        setResultado(isNaN(numero)?"0":numero)
        setStringOperaciones("")
      }else{ 
        let array = new Array([numero,operador])
        setOperaciones(array)
        setResultado("")
        if(e.target.id === "plus"){
          setStringOperaciones(stringOperaciones.concat(" + "))
        }else{
          setStringOperaciones(stringOperaciones.concat(" - "))
        }
      }
    }
    else if(["multi","divi"].includes(e.target.id)){
      operaciones.push([resultado ,e.target.id])
      setOperaciones(operaciones)
      setResultado("")
      if(e.target.id === "multi"){
        setStringOperaciones(stringOperaciones.concat(" * "))
      }else{
        setStringOperaciones(stringOperaciones.concat(" / "))
      }
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <p id = "resultado" >{resultado}</p>
        <p id = "operaciones" >{stringOperaciones}</p>
        <div className="botones">
          <button className="operando" onClick={operar} id="1">1</button>
          <button className="operando" onClick={operar} id="2">2</button>
          <button className="operando" onClick={operar} id="3">3</button>
          <button className="operando" onClick={operar} id="divi">/</button>
          <button className="operando" onClick={operar} id="4">4</button>
          <button className="operando" onClick={operar} id="5">5</button>
          <button className="operando" onClick={operar} id="6">6</button>
          <button className="operando" onClick={operar} id="multi">*</button>
          <button className="operando" onClick={operar} id="7">7</button>
          <button className="operando" onClick={operar} id="8">8</button>
          <button className="operando" onClick={operar} id="9">9</button>
          <button className="operando" onClick={operar} id="minus">-</button>
          <button className="operando" onClick={operar} id="blanco1"></button>
          <button className="operando" onClick={operar} id="blanco2"></button>
          <button className="operando" onClick={operar} id="0">0</button>
          <button className="operando" onClick={operar} id="plus">+</button>
          <button className="operando" onClick={operar} id="blanco3"></button>
          <button className="operando" onClick={operar} id="blanco4"></button>
          <button className="operando" onClick={operar} id="blanco5"></button>
          <button className="operando" onClick={operar} id="igual">=</button>
        </div>
      </header>
    </div>
  );
}

export default App;
