import { useState } from "react";
import "./Emoji.css";

const EMOJIS = new Map<string, string>([
  ["happy", "😁"],
  ["sick", "🤒"],
  ["dead", "😵"],
  ["sad", "😞"],
  ["crying", "😭"],
]);
//EMOJIS.set("happy", "😁")

export default function Emoji() {
  const [situacao, setSituacao] = useState("sad");

  function toHappy() {
    console.log("toHappy");
    setSituacao("happy");
  }

  function toDead() {
    console.log("toDead");
    setSituacao("dead");
  }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫠"}</div>
      <div className="acoes">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toDead}>Morto</button>
      </div>
    </div>
  );
}
