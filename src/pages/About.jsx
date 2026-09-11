import react from "react";

export default function About() {
  return (
    <div className="my-4">

      <div className="text-5xl text-center font-bold my-3">
        Codecats
      </div>

      <div className="text-3xl text-center font-bold my-3">
        Text om oss här
      </div>

      <div className="flex flex-col items-center gap-10">

        <div className="text-3xl text-center font-bold w-100 max-h-50">
          <img src="" alt="" />
          <p>Milton: jag pluggar devops och har kodat i ungefär 3 år</p>
        </div>

        <div className="text-3xl text-center font-bold w-100 max-h-50">
          <img src="" alt="" />
          <p>
            Abiha: pluggar Fullstackutvecklare JavaScript.
          </p>
        </div>

        <div className="text-3xl text-center font-bold w-100 max-h-50">
          <img src="" alt="" />
          <p>Alex: Jag pluggar till Frontendutvecklare med ai-kompetens</p>
        </div>

        <div className="text-3xl text-center font-bold w-100 max-h-50">
          <img src="" alt="" />
          <p>Gillian: Jag är Musiker och Ljudtekniker och pluggar Fullstack .Net</p>
        </div>
      </div>

    </div>
  );
}