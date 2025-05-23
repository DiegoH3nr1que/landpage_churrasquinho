"use client";

import React from "react";
import Image from "next/image";
import { Jacques_Francois_Shadow } from "next/font/google";

const jacquesFrancoisShadow = Jacques_Francois_Shadow({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Header() {
  return (
    <header className="relative w-full h-[200px] sm:h-[200px] lg:h-[300px]">
      <Image
        className="blur-sm"
        src="/espetinho.png"
        alt="Espetinho"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center ">
        <h1
          className={`text-white text-3xl sm:text-4xl lg:text-5xl drop-shadow-md`}
          style={{ fontFamily: jacquesFrancoisShadow.style.fontFamily }}
        >
          Espetinho Europa
        </h1>
        <h1
          className={`text-white text-2xl sm:text-3xl lg:text-4xl drop-shadow-md animate-carousel`}
        >
          Seja Bem Vindo!
        </h1>
      </div>
      <div className="absolute bottom-0 right-0 m-4">
        <h1 className="text-white text-sm sm:text-base lg:text-lg drop-shadow-md">
          Rua José Gonçalves Romero Nº 231
        </h1>
      </div>
    </header>
  );
}
