import React, { use, useState } from "react";

export default function Button() {
  const [text, setText] = useState("Klicka här!");
  const [count, setCount] = useState(0);
  const [hover, SetHover] = useState(false);

  const bytText = () => {
    setText("Hej på dig! 👋");
  };

  return (
    <div className="flex gap-2 justify-around">
      <div className="flex button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md hover:cursor-pointer">
        <button onClick={() => bytatext()}>{text}</button>
      </div>

      <div
        onClick={() => setCount(count + 1)}
        className="flex button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md hover:cursor-pointer"
      >
        <button>Number: {count}</button>
      </div>

      <div className="flex relative button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md hover:cursor-pointer">
        <div
          onMouseEnter={() => SetHover(true)}
          onMouseLeave={() => SetHover(false)}
        >
          {hover ? <div className="absulute"> DU hovrar</div> : "Hover here"}
        </div>
      </div>

      {hover ? (
        <div className="absolute z-3 top-80">
          Kolla vad göde sig här, hover vissar mig
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
