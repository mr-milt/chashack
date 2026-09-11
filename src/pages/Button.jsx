import React, { useState } from "react";

export default function Button() {
  const [text, setText] = useState("Klicka här!");

  const bytatext = () => {
    setText("Hej på dig! 👋");
  };

  return (
    <div className="flex justify-center">
      <div className="flex button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md">
        <button onClick={() => bytatext()}>{text}</button>
      </div>
    </div>
  );
}