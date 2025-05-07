import React from "react";
import { Glory } from "next/font/google";

const glory = Glory({
  subsets: ["latin"],
  weight: "400",
});

export default function Order() {
  return (
    <div
      className=" my-5 flex flex-col items-center justify-center text-center bg-[#99714B] text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md w-[90%] max-w-4xl mx-auto mt-6"
      style={{ fontFamily: glory.style.fontFamily }}
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl mb-4">
        Faça já a sua encomenda!
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
        Entre em contato para realizar o seu pedido:{" "}
        <a
          href="https://wa.me/5515991768979"
          className="text-[#FFD700] hover:text-[#FFE066] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          (15) 99176-8979
        </a>
      </h2>
      <h3 className="text-base sm:text-lg md:text-xl font-light">
        Venha aproveitar os melhores espetinhos de Votorantim!
      </h3>
    </div>
  );
}
