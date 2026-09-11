import react from "react";

export default function About() {
  return (
    <div>
        
      <div className="text-3xl text-center font-bold">
        Codecats
      </div>

      <div className="flex flex-col items-center gap-3 my-3">

        <div className="text-3xl text-center font-bold w-100 min-h-50">
          <img src="" alt="" />
          <p>Milton: jag pluggar devops och har kodat i ungefär 3 år</p>
        </div>

        <div className="text-3xl text-center font-bold w-100 min-h-50">
          <img src="" alt="" />
          <p>
            Abiha heter jag, är 28 och gillar smink och att virka. Nu vill jag
            koda igen och pluggar Fullstackutvecklare JavaScript.
          </p>
        </div>

        <div className="text-3xl text-center font-bold w-100 min-h-50">
          <img src="" alt="" />
          <p>Alex: Jag pluggar till Frontendutvecklare med ai-kompetens</p>
        </div>

        <div className="text-3xl text-center font-bold w-100 min-h-50">
          <img src="" alt="" />
          <p>Gillian: Jag pluggar .Net</p>
        </div>
      </div>

    </div>
  );
}