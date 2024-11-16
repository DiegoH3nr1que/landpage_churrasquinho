import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Espetinho da Sogra",
  description: "melhor espetinho de Votorantim",
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
