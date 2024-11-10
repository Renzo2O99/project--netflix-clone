"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react"

export const Terms = () => {
  const [showExtraTerms, setShowExtraTerms] = useState(false);

  return (
    <div className="text-xs mt-4 mb-10 text-gray-600 max-w-72">
      <div className="mb-5">
        <span>
          Esta página utiliza Google reCAPTCHA para verificar que no eres un robot
        </span>

        <Button className="opacity-1 text-[#0071EB] hover:bg-transparent p-0 ml-1 h-fit" variant="ghost" onClick={() => setShowExtraTerms(!showExtraTerms)}>
          Más información
        </Button>
      </div>

      {showExtraTerms && (
        <div className="h-14">
          <p>
            La información recopilada por Google reCAPTCHA está sujeta a la
            Política de Privacidad y las Condiciones de servicio de Google, y se
            utiliza para proporcionar, mantener y mejorar el servicio de
            reCAPTCHA, así como para fines generales de seguridad (Google no la
            utiliza para publicidad personalizada).
          </p>
        </div>
      )}
    </div>
  )
}