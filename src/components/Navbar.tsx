import Link from "next/link";
import { FC } from "react";
import { cn } from "@/utils";
import { CommandIcon, Heading, MenuIcon } from "./atoms";

const Navbar: FC = () => {
  return (
    <nav
      className={cn(
        "flex justify-between items-center p-7 border-b-2 border-mood-gray",
      )}
    >
      <Link className="brand flex justify-center items-center gap-1" href="/">
        <CommandIcon className="h-[30px] w-[30px]" />
        <Heading size="sm" className="font-semibold text-2xl">
          Dimas Saputra
        </Heading>
      </Link>
      <MenuIcon className={cn("h-6 w-6 mr-5 lg:hidden")} />
    </nav>
  );
};

export default Navbar;
