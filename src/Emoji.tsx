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
    setComida(Math.min(comida+1,5));
  }

  function onHidratar() {
    setAgua(Math.min(agua+1,5));
  }

  function onLigarDesligar() {}

  function onCiclo() {
      setComida(Math.max(comida-1,0));
      setAgua(Math.max(agua-1,0));
      setEnergia(Math.max(energia-1,0));
      if(comida==0){
        setSaude(s => Math.max(s-1,0));
      }
      if(agua==0){
        setSaude(s => Math.max(s-1,0));
      }
      if(energia==0){
        setSaude(s => Math.max(s-1,0));
      }
  }

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
        <button onClick={onCiclo}>Ciclo</button>
      </div>
    </div>
  );
}
