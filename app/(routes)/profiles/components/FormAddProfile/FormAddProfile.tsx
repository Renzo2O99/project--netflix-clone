"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormAddProfileProps } from "./FormAddProfile.types"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormAddProfile.form"

export const FormAddProfile = (props: FormAddProfileProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileName: "",
      avatarUrl: undefined,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del perfil</FormLabel>
              <FormControl>
                <Input placeholder="Renzo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Seleccione su foto de perfil</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-y-1">

                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}