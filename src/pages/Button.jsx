import React, { useState } from "react";

export default function Button() {
  const [text, setText] = useState("Klicka här!");
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  const bytText = () => {
    setText(text === "Klicka här!" ? "Hej på dig! 👋" : "Klicka här!");
  };

  const buttonStyle = {
    backgroundColor: "#9146FF",
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
  };

  return (
    <div className="flex gap-4 justify-around flex-wrap my-5">
      <button type="button" onClick={bytText} style={buttonStyle}>
        {text}
      </button>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
        style={buttonStyle}
      >
        Number: {count}
      </button>

      <button
        type="button"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={buttonStyle}
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
