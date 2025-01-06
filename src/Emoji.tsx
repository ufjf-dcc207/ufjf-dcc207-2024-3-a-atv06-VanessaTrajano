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
  let situacao = "crying";
  return <div className="emoji">{EMOJIS.get(situacao) || "🫠"}</div>;
}
