import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Klicka här");

  const hanteraKlick = () => {
    setText("Hej på dig! 👋");
  };

  return (
    <div>

    </div>
  );
}