import react from "react";

export default function About() {
  return (
    <div className="flex flex-col justify-center text-red-500 gap-3 m-5">
      <div className="flex justify-center text-3xl text-center items-center font-bold">
        Om oss
      </div>

      <div className="flex gap-3 flex-row justify-center">
        <div className="flex text-3xl text-center items-center font-bold">
          <img src="" alt="" />
          <p>Milton</p>
        </div>
        <div className="flex text-3xl text-center items-center font-bold">
          <img src="" alt="" />
          <p>Abiha heter jag, är 28 och gillar smink och att virka. Nu vill jag koda igen och pluggar Fullstackutvecklare JavaScript.</p>
        </div>
        <div className="flex text-3xl text-center items-center font-bold">
          <img src="" alt="" />
          <p>Alex: Jag pluggar till Frontendutvecklare med ai-kompetens</p>
        </div>
        <div className="flex text-3xl text-center items-center font-bold">
          <img src="" alt="" />
          <p>Gillian: Jag pluggar .Net</p>
        </div>
      </div>
    </div>
  );
}
