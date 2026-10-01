import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ItaPass",
  description: "Ingressos para partidas com QR Code",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border-subtle bg-surface">
          <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted sm:px-6">
            ItaPass — plataforma de ingressos para partidas
          </div>
        </footer>
      </body>
    </html>
  );
}
