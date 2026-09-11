import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Klicka här!");

  const bytatext = () => {
    setText("Hej på dig! 👋");
  };

  return (
    <div>
      <div className="button">
        <button
          onClick={bytatext}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            border: "2px solid #333",
            borderRadius: "25px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
        >
          {text}
        </button>
      </div>
    </div>
  );
}