import Link from "next/link";
import { FC } from "react";
import { cn } from "@/utils";
import { CommandIcon, Heading, MenuIcon } from "./atoms";
import "@total-typescript/ts-reset";

const Navbar: FC = () => {
  interface menuItemTypes {
    name: string;
  }

  const menuItem: menuItemTypes[] = [
    {
      name: "About",
    },
    {
      name: "Project",
    },
    {
      name: "Contact",
    },
  ];

  return (
    <nav
      className={cn(
        "flex justify-between items-center max-w-5xl py-6 container",
      )}
    >
      <Link
        className={cn("brand flex justify-center items-center gap-1")}
        href="/"
      >
        <CommandIcon className={cn("h-[30px] w-[30px]")} />
        <Heading className={cn("font-bold text-2xl")}>Dimas Saputra</Heading>
      </Link>
      <MenuIcon className={cn("h-8 w-8 mr-5 laptop:hidden")} />
      <ul
        className={cn(
          "laptop:flex phone:hidden items-center justify-between w-2/5",
        )}
      >
        {menuItem.map((item) => (
          <Link
            href={item.name.toLowerCase()}
            // eslint-disable-next-line react/no-array-index-key
            key={Math.floor(Math.random() * 62859021739509)}
            className={cn("text-xl opacity-70 hover:opacity-100 font-semibold")}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
