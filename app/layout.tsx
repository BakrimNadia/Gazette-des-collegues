import type { Metadata } from "next";
import {Providers} from "./providers";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export const metadata: Metadata = {
  title: "Gazette des collègues",
  description: "SIte de partage d'infos, d'articles et de petites annonces en interne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Navbar />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
