import { useState } from "react";
import "./Emoji.css";
import Contador from "./Contador";

const EMOJIS = new Map<string, string>([
  ["happy", "😁"],
  ["sad", "😞"],
  ["crying", "😭"],
  ["dead", "😵"],
]);
const categorias: Array<string> = ["❤️", "🍗", "💧", "⚡"];

export default function Emoji() {
  const [situacao, setSituacao] = useState("sad");

  function onAlimentar() {
  }

  function toDead() {
  }

  function onHidratar() {
  }

  function onLigarDesligar() {
  }

  function toProximo() {
  }

  return (
    <div className="emoji">
      <div className="emoji-div">
        <div className="situacao">{EMOJIS.get(situacao) || "🫠"}</div>
        <div className="acoes">
          <button onClick={onAlimentar}>Dar Comida</button>
          <button onClick={onHidratar}>Dar água</button>
          <button onClick={onLigarDesligar}>Liga / Desligar a luz</button>

          <button className="button-grande" onClick={toProximo}>
            Ciclo
          </button>
        </div>
      </div>
      <div className="emoji-categorias">
        {categorias.map((emoji) => (
          <Contador emoji={emoji} />
        ))}
      </div>
    </div>
  );
}
