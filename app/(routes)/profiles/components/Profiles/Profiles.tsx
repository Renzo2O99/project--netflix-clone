import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types"
import { AddProfile } from "./AddProfile";

export const Profiles = (props: ProfilesProps) => {
  const { users } = props;

  return (
    <>
      <div className="flex gap-7">
        <p>Usuarios de perfiles...</p>
        
        <AddProfile />
      </div>

      <div className="mt-16 flex items-center justify-center">
        <Button variant="outline" size="lg" className="text-gray-500 border-gray-500">
          Administrar perfiles
        </Button>
      </div>
    </>
  )
}
