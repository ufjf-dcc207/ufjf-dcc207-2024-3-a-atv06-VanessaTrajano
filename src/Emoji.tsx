import { useState } from "react";
import "./Emoji.css";
import Contador from "./Contador";


const EMOJIS = new Map<string, string>([
  ["happy", "😁"],
  ["sad", "😞"],
  ["crying", "😭"],
  ["dead", "😵"],
]);
const categorias:Array<string> = ["❤️", "🍗", "💧", "⚡"]

export default function Emoji() {
  const [situacao, setSituacao] = useState("sad");

  function toHappy() {
    setSituacao("happy");
  }

  function toDead() {
    setSituacao("dead");
  }

  function toSad() {
    setSituacao("sad");
  }

  function toCrying() {
    setSituacao("crying");
  }

  function toProximo() {
    if (situacao == "happy") {
      setSituacao("sad");
    } else if (situacao == "sad") {
      setSituacao("crying");
    } else if (situacao == "crying") {
      setSituacao("dead");
    } else {
      setSituacao("happy");
    }
  }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫠"}</div>
      <div className="acoes">
        <button onClick={toHappy}>Sorrir</button>
        <button onClick={toSad}>Entristecer</button>
        <button onClick={toCrying}>Chorar</button>
        <button onClick={toDead}>Morrer</button>

        <button className="button-grande" onClick={toProximo}>
          Circular
        </button>
      </div>
      {categorias.map((emoji) =>(
        <Contador emoji = {emoji}/>
      ))}
    </div>
  );
}
