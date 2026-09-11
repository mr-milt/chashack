import React from "react";

export default function About() {
  return (
    <main className="my-4">
      <section className="text-center my-6">
        <h1 className="text-6xl font-bold">CodeCats</h1>

        <p className="text-2xl font-bold my-3 italic">
          Vi är ett gäng coola katter som gillar att koda
        </p>
      </section>

      <section className="flex flex-col items-center gap-10">
        <article className="text-3xl text-center w-100 max-h-50 mt-12">
          <h2>Milton</h2>
          <p className="text-lg">
            Jag pluggar DevOps och har kodat i ungefär 3 år.
          </p>
        </article>

        <article className="text-3xl text-center w-100 max-h-50">
          <h2>Abiha</h2>
          <p className="text-lg">
            Jag är 28 och gillar smink och att virka. Nu vill jag koda igen och
            pluggar Fullstackutvecklare JavaScript.
          </p>
        </article>

        <article className="text-3xl text-center w-100 max-h-50">
          <h2>Alex</h2>
          <p className="text-lg">
            Jag pluggar till Frontendutvecklare med AI-kompetens.
          </p>
        </article>

        <article className="text-3xl text-center w-100 max-h-50">
          <h2>Gillian</h2>
          <p className="text-lg">
            Jag är musiker och ljudtekniker och pluggar Fullstack .NET.
          </p>
        </article>
      </section>
    </main>
  );
}
