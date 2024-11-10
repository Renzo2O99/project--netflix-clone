import { BellRing, Menu, Search } from "lucide-react";
import { Logo } from "../../Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { itemsNavBar } from "@/data/itemsNavBar";
import Link from "next/link";

export const NavbarMobile = () => {
  return (
    <div className="p-4 flex justify-between">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        
        <SheetContent side="left" className="bg-black">
          <div className="flex flex-col gap-4">
            {itemsNavBar.map(item => (
              <Link key={item.name} href={item.link}
                className="hover:text-gray-300 transition-all duration-300">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-[1px] border-white/70 my-5" />

          <div className="flex justify-between gap-6 mt-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <p>User</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};