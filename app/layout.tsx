import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Dott. Francesco Baldi - Osteopata",
  description:
    "Studio di Osteopatia e Fisioterapia Manuale a Modugno (BA). Specializzato in trattamenti osteopatici e terapia manuale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-off-white text-body">
        <Header />
        <main className="flex-1 pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
