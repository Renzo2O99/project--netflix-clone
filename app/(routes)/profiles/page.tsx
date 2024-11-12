import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  // if (!session?.user) redirect("/login"); 

  const userNetflix = "";

  return (
    <div className="h-full flex flex-col justify-center items-center bg-zinc-900">
      <h1 className="text-5xl mb-8">¿Quién eres? Elige un perfil.</h1>

      
    </div>
  )
}