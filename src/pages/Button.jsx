<<<<<<< HEAD
import { useState } from "react";

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const quotes = ["meow", "look what the cat dragged in", "fuking git", "vem har pushat det här"];
=======
import React, { useState } from "react";
>>>>>>> 155199a9230f2b7cb42a52c67fb385e6c1485d49

export default function Button() {
  const [text, setText] = useState("Klicka här!");
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  const [quote, setQuote] = useState(() => randomChoice(quotes));

  return (
    <>
      <div className="flex gap-2 justify-around">
        <div className="flex button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md hover:cursor-pointer">
          <button onClick={() => setText("Hej på dig! 👋")}>{text}</button>
        </div>

        <div
          onClick={() => setCount((c) => c + 1)}
          className="flex button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md hover:cursor-pointer"
        >
          <button>Number: {count}</button>
        </div>

        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex relative button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md hover:cursor-pointer"
        >
          {hover ? "DU hovrar" : "Hover here"}
        </div>

        {hover && <div className="absolute z-3 top-70">Kolla vad gömde sig här, hover visar mig</div>}
      </div>

      <div className="flex gap-2 justify-around">
        <button
          onClick={() => setQuote(randomChoice(quotes))}
          className="flex button bg-red-500 w-30 p-5 my-5 h-15 text-center items-center rounded-md hover:cursor-pointer"
        >
          {quote}
        </button>
      </div>
    </>
  );
}