import React, { useState } from "react";
import gang from "../assets/gang.jpeg";

export default function Home() {
  const [text, setText] = useState("Klicka här");

  return (
    <div>
      <img src={gang} alt="Gang" />
    </div>
  );
}
