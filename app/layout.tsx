import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { ConnectionProvider } from "@/components/ConnectionProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resort Manager",
  description: "Sistema de gerenciamento de resort",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ConnectionProvider>
            {children}
            <Toaster richColors position="top-right" />
          </ConnectionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
