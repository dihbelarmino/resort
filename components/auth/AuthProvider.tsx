"use client";

import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <SessionProvider 
      refetchInterval={5 * 60} // Revalidar a cada 5 minutos
      refetchOnWindowFocus={true} // Revalidar quando a janela ganhar foco
    >
      {children}
    </SessionProvider>
  );
} 