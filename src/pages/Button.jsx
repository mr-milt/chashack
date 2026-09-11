import React from "react";


export default function Home() {
  return (
    <div>
      <div className="button">
        <button onClick={bytaFärg} style={{ backgroundColor: "blue", color: "white" }}
        >Klicka här för att byta färg   
        </button>
      </div>
    </div>
  );
}
