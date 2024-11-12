"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "./LoginForm.form"
import { z } from "zod"
import { useState } from "react"
import { FormError } from "../../components/FormError"
import { login } from "@/actions/login"
import toast from "react-hot-toast"
import { useRouter } from "next/router"

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      login(values).then(data => {
        setError(data?.error);

        if (data?.success) {
          toast.success("El Login se ha realizado exitosamente.");
        }
      })

      router.push("/profiles");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap-4 flex flex-col">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Correo electrónico" 
                  {...field} 
                  className="h-14 text-white"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Contraseña"
                  type="password" 
                  {...field} 
                  className="h-14 text-white"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />

        <Button className="w-full bg-[#E50914]" type="submit">Iniciar Sesión</Button>
      </form>
    </Form>
  )
}