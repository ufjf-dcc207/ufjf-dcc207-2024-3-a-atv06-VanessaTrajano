import { useState } from "react";
import "./Contador.css";

interface ContadorProps {
  emoji: string;
  valor: number
}

function Contador({ emoji, valor }: ContadorProps) {
  return (
    <div className="contador-container">
      <span>{emoji.repeat(valor)}</span>
      <span className="cinza">{emoji.repeat(5 - valor)}</span>
    </div>
  );
}

export default Contador;
