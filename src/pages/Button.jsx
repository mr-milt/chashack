import React from "react";


export default function Home() {
  return (
    <div>
      <div className="button">
        <button onClick={bytatext} style={{
    padding: "12px 24px",
    fontSize: "16px",
    border: "2px solid #333",
    borderRadius: "25px",
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    cursor: "pointer",}}
        >Klicka här! </button>
      </div>
    </div>
  );
}
