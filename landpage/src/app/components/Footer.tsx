import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4B2C20] text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Informações de Contato */}
          <div className="text-center md:text-left">
            <h2 className="text-lg sm:text-xl">Espetinho da Sogra</h2>
            <p className="text-sm sm:text-base">
              Rua José Gonçalves Romero Nº231, Votorantim, SP
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/espetinhos_da_sogra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5515997853038"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Créditos */}
          <div className="text-center md:text-right">
            <p className="text-sm sm:text-base">
              © {new Date().getFullYear()} Espetinho da Sogra. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
