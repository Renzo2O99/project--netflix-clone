import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Terms } from "../components/Terms";
import { LoginForm } from "./LoginForm";
import { auth } from "@/auth";

export default async function LoginPage() {
  const session = await auth();

  return (
    <div>
      <p className="text-2xl font-bold text-left mb-7 md:text-3xl">Iniciar Sesión</p>

      <p>Session: {JSON.stringify(session)}</p>

      <LoginForm />

      <div className="mt-5 text-center">
        <Link href="/" className="hover:underline hover:opacity-700">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" className="border-white" />

        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Recuérdame</label>
      </div>

      <div className="mt-4 md:flex gap-2">
        <p className="text-white opacity-70">¿Todavía no tienes Netflix?</p>

        <Link href="/register" className="opacity-1 text-white">¡Suscríbete ya!</Link>
      </div>

      <Terms />
    </div>
  )
}