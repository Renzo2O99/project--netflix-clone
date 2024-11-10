import Link from "next/link";
import { Terms } from "../components/Terms";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div>
      <p className="text-2xl font-bold text-left mb-7 md:text-3xl">Registro de usuario</p>

      <RegisterForm />

      <div className="mt-4 gap-1 md:flex">
        <p className="text-white opacity-70">¿Ya tienes una cuenta?</p>

        <Link href="/login" className="opacity-1 text-white">Inicia sesión aquí</Link>
      </div>

      <Terms />
    </div>
  )
}