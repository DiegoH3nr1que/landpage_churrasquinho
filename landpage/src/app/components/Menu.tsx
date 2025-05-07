import React from "react";
import Image from "next/image";
import { Jacques_Francois_Shadow } from "next/font/google";
import { Glory } from "next/font/google";

const glory = Glory({
  subsets: ["latin"],
  weight: "400",
});

const jacquesFrancoisShadow = Jacques_Francois_Shadow({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Menu() {
  const items = [
    {
      id: 1,
      image: "/queijo-coalho.webp",
      name: "QUEIJO COALHO",
      price: "R$10,00",
    },
    {
      id: 2,
      image: "/carne_fraldinha.webp",
      name: "FRALDINHA",
      price: "R$10,00",
    },
    { id: 3, image: "/costela.jpg", name: "COSTELA", price: "R$10,00" },
    {
      id: 4,
      image: "/carne_bacon.webp",
      name: "CARNE C/ BACON",
      price: "R$12,00",
    },
    {
      id: 5,
      image: "/frango_bacon.png",
      name: "FRANGO C/BACON",
      price: "R$12,00",
    },
    {
      id: 6,
      image: "/espetinho-misto.webp",
      name: "MISTO C/ BACON",
      price: "R$12,00",
    },
    {
      id: 7,
      image: "/bacon-com-queijo.webp",
      name: "QUEIJO BACON",
      price: "R$12,00",
    },
    {
      id: 8,
      image: "/coracaozinho.jpg",
      name: "CORAÇÃZINHO",
      price: "R$10,00",
    },
    { id: 9, image: "/linguica.webp", name: "LINGUIÇA", price: "R$9,00" },
    { id: 10, image: "/frango.jpg", name: "FRANGO", price: "R$9,00" },
    { id: 11, image: "/pao_alho.jpg", name: "PÃO DE ALHO", price: "R$10,00" },
    { id: 12, image: "/panceta.webp", name: "PANCETA", price: "R$9,00" },
    { id: 13, image: "/kafta.jpg", name: "KAFTA", price: "R$10,00" },
    {
      id: 14,
      image: "/kafta_queijo.webp",
      name: "KAFTA C/ QUEIJO",
      price: "R$14,00",
    },
    {
      id: 15,
      image: "/picanha_chimichurri.jpg",
      name: "PICANHA C/ CHIMICHURRI",
      price: "R$15,00",
    },
    {
      id: 16,
      image: "/palmito-bacon.jpg",
      name: "PALMITO C/ BACON",
      price: "R$12,00",
    },
    {
      id: 17,
      image: "/costelinha_suina.jpg",
      name: "COSTELINHA SUÍNA",
      price: "R$10,00",
    },
  ];

  return (
    <div className="bg-[#99714B] min-h-screen p-6 rounded-md">
      <h1
        className={`text-center text-3xl sm:text-xl lg:text-3xl text-white mb-8`}
        style={{ fontFamily: jacquesFrancoisShadow.style.fontFamily }}
      >
        Cardápio
      </h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#D3B28D] rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-32 md:h-40">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 text-center">
              <h2
                className="text-left"
                style={{ fontFamily: glory.style.fontFamily }}
              >
                {item.name}
              </h2>
              <p
                style={{ fontFamily: glory.style.fontFamily }}
                className={`mt-2 text-left`}
              >
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
