import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new NextResponse("Email already exists", { status: 400 })
    }

    const userCreated = await db.user.create({
      data: { email, password: hashedPassword }
    })

    return NextResponse.json(userCreated);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}