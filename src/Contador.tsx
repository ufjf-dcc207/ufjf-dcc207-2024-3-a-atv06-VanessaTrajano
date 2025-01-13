import { useState } from "react";
import "./Contador.css";

interface ContadorProps {
  emoji: String;
}

function Contador({ emoji }: ContadorProps) {
  const [quant, setQuant] = useState(5);

  function melhorar() {
    setQuant((q) => (q == 5 ? 0 : q + 1));
  }

  return (
    <div className="contador-container">
      <span>{emoji.repeat(quant)}</span>
      <span className="cinza">{emoji.repeat(5 - quant)}</span>
      <button className="botao-contador" onClick={melhorar}>
        +
      </button>
    </div>
  );
}

export default Contador;
