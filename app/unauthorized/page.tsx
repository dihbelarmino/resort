"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle className="text-2xl font-bold">Acesso Não Autorizado</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>
            Você não possui permissão para acessar esta página. Por favor, entre em contato 
            com o administrador do sistema se você acredita que isso é um erro.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            onClick={() => router.push("/dashboard")}
            className="w-full"
          >
            Voltar para o Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 