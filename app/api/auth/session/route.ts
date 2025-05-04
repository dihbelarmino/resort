import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (session) {
      return NextResponse.json(session);
    }
    
    return NextResponse.json({ user: null });
  } catch (error) {
    console.error("Erro no endpoint de sessão:", error);
    return NextResponse.json({
      status: "error",
      message: String(error)
    }, { status: 500 });
  }
} 