"use client"

import { z } from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl, FormField,
  FormItem, FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { formSchema } from "./RegisterForm.form"
import { FormError } from "../../components/FormError"
import { useState } from "react"

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("No mames");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/auth/register", values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  {...field}
                  type="password"
                  className="h-14 text-white"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Repetir Contraseña" 
                  {...field}
                  type="password"
                  className="h-14 text-white"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />

        <Button className="w-full bg-[#E50914]" type="submit">Registrar Usuario</Button>
      </form>
    </Form>
  )
}