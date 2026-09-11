import React, { useState } from "react";

export default function Button() {
  const [text, setText] = useState("Klicka här!");

  const bytText = () => {
    setText("Hej på dig! 👋");
  };

  return (
    <div className="flex justify-center my-5">
      <button
        type="button"
        onClick={bytText}
        style={{
          backgroundColor: "#9146FF",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {text}
      </button>
    </div>
  );
}
