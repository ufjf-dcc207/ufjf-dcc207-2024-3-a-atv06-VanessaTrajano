import { useState } from "react";
import "./Emoji.css";
import Contador from "./Contador";

const EMOJIS = new Map<string, string>([
  ["happy", "😁"],
  ["sad", "😞"],
  ["dead", "😵"],
]);
const categorias: Array<string> = ["❤️", "🍗", "💧", "⚡"];

export default function Emoji() {
  const [situacao, setSituacao] = useState("happy");
  const [saude, setSaude] = useState(4);
  const [energia, setEnergia] = useState(3);
  const [comida, setComida] = useState(2);
  const [agua, setAgua] = useState(1);

  function onAlimentar() {
    setComida((c) => (c == 5 ? c : c + 1));
  }

  function onHidratar() {
    setAgua((a) => (a == 5 ? a : a + 1));
  }

  function onLigarDesligar() {}

  function toProximo() {}

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫠"}</div>
      <div className="emoji-categorias">
        <Contador emoji={"❤️"} valor={saude} />
        <Contador emoji={"⚡"} valor={energia} />
        <Contador emoji={"🍗"} valor={comida} />
        <Contador emoji={"💧"} valor={agua} />
      </div>
      <div className="acoes">
        <button onClick={onAlimentar}>Dar Comida</button>
        <button onClick={onHidratar}>Dar água</button>
        <button onClick={onLigarDesligar}>Liga / Desligar a luz</button>

        <button onClick={toProximo}>
          Ciclo
        </button>
      </div>
    </div>
  );
}
