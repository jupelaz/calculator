import React, {useState} from 'react';
import './App.css';

function App() {
  const [resultado, setResultado] = useState("");
  const operar = (e) => {
    console.log(e.target.id)
    console.log(e.target.value)
    if(["1","2","3","4","5","6","7","8","9","0"].includes(e.target.id)){
      console.log("Numerico")
      setResultado(e.target.id.concat(resultado))
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p id = "resultado" >{resultado}</p>
        <div className="botones">
          <button className="operando" onClick={operar} id="1">1</button>
          <button className="operando" onClick={operar} id="2">2</button>
          <button className="operando" onClick={operar} id="3">3</button>
          <button className="operando" onClick={operar} id="plus">+</button>
          <button className="operando" onClick={operar} id="4">4</button>
          <button className="operando" onClick={operar} id="5">5</button>
          <button className="operando" onClick={operar} id="6">6</button>
          <button className="operando" onClick={operar} id="minus">-</button>
          <button className="operando" onClick={operar} id="7">7</button>
          <button className="operando" onClick={operar} id="8">8</button>
          <button className="operando" onClick={operar} id="9">9</button>
          <button className="operando" onClick={operar} id="mult">*</button>
          <button className="operando" onClick={operar} id="blanco1"></button>
          <button className="operando" onClick={operar} id="blanco2"></button>
          <button className="operando" onClick={operar} id="0">0</button>
          <button className="operando" onClick={operar} id="divi">%</button>
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
