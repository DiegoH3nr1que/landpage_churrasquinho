import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Espetinho da Sogra",
  description: "Melhor espetinho de Votorantim e Região!! 🎉🍻🥇",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
