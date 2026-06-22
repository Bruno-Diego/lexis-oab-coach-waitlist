import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";

const schema = z.object({
  email: z.string().email().max(254),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }

    const email = parsed.data.email.toLowerCase().trim();

    await connectToDatabase();
    const col = mongoose.connection.collection("waitlist");

    const existing = await col.findOne({ email });
    if (existing) {
      const position = await col.countDocuments({
        criadoEm: { $lte: existing.criadoEm },
      });
      return NextResponse.json({ duplicate: true, position }, { status: 200 });
    }

    await col.insertOne({ email, criadoEm: new Date() });
    const position = await col.countDocuments();

    return NextResponse.json({ position }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
