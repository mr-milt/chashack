import { useState } from "react";

const colors = ["#9146FF", "#E91E63", "#FF9800", "#4CAF50", "#2196F3"];

function buttonStyle(bg) {
  return {
    backgroundColor: bg,
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    minWidth: "140px",
    minHeight: "55px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "background-color 0.2s",
  };
}

export default function Button() {
  const [text, setText] = useState("Klicka här!");
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  const toggled = text !== "Klicka här!";

  const bytText = () => {
    setText(toggled ? "Klicka här!" : "Hej på dig! 👋");
  };

  return (
    <div className="flex gap-4 justify-around flex-wrap my-5">
      <button
        type="button"
        onClick={bytText}
        style={buttonStyle(toggled ? "#4CAF50" : "#9146FF")}
      >
        {text}
      </button>

      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        style={buttonStyle(colors[count % colors.length])}
      >
        Number: {count}
      </button>

      <button
        type="button"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={buttonStyle(hover ? "#E91E63" : "#9146FF")}
      >
        {hover ? "DU hovrar 👀" : "Hover here"}
      </button>

      {hover && (
        <div className="w-full text-center mt-2">
          Kolla vad som gömde sig här - mjau! 🐱
        </div>
      )}
    </div>
  );
}