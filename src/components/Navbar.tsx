import Link from "next/link";
import { FC } from "react";
import { cn } from "@/utils";
import { CommandIcon, Heading, MenuIcon } from "./atoms";
// import "@total-typescript/ts-reset";

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
        "container flex max-w-5xl items-center justify-between py-6",
      )}
    >
      <Link
        className={cn("brand flex items-center justify-center gap-1")}
        href="/"
      >
        <CommandIcon className={cn("h-[30px] w-[30px]")} />
        <Heading className="font-bold text-2xl">Dimas Saputra</Heading>
      </Link>
      <MenuIcon className={cn("laptop:hidden mr-5 h-8 w-8")} />
      <ul
        className={cn(
          "laptop:flex phone:hidden w-2/5 items-center justify-between",
        )}
      >
        {menuItem.map((item) => (
          <Link
            href={item.name.toLowerCase()}
            // eslint-disable-next-line react/no-array-index-key
            key={Math.floor(Math.random() * 62859021739509)}
            className={cn("text-xl font-semibold opacity-70 hover:opacity-100")}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
