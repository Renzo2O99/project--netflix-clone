"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddProfile } from "../../FormAddProfile";

export const AddProfile = () => {
  const [open, setOpen] = useState(false);
  return(
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="group hover:cursor-pointer">
          <div className="w-[140px] h-[140px] flex flex-col justify-center items-center group-hover:bg-slate-300 rounded-md transition-all duration-300">
            <PlusCircle className="w-16 h-16 text-gray-500" />
          </div>

          <p className="mt-2 text-gray-500 uppercase text-lg">Añadir perfil</p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Añadir perfil</DialogTitle>
          <DialogDescription>
            Añade los diferentes perfiles a tu cuenta
          </DialogDescription>
        </DialogHeader>
        
        <FormAddProfile setOpen={setOpen} />
      </DialogContent>
    </Dialog>

  );
};
