"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { cn } from "@/utils";
import { CommandIcon, Heading, MenuIcon } from "@/components/atoms";
import "@total-typescript/ts-reset";

const Navbar: FC = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  type menuItemType = {
    name: string;
  };

  const menuItem: menuItemType[] = [
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

  function isNavMenuClicked() {
    setIsNavMenuOpen(!isNavMenuOpen);
  }

  return (
    <nav
      className={cn(
        "container flex max-w-5xl items-center justify-between py-6",
      )}
    >
      <Link
        className={cn("brand z-10 flex items-center justify-center gap-1")}
        href="/"
      >
        <CommandIcon className={cn("h-[30px] w-[30px]")} />
        <Heading className="font-bold text-2xl">Dimas Saputra</Heading>
      </Link>
      <MenuIcon
        className={cn("z-10 h-8 w-8 lg:hidden")}
        onClick={isNavMenuClicked}
      />
      <ul
        className={
          isNavMenuOpen
            ? cn(
                "z-5 bg-custom-white-900 absolute inset-x-0 top-0 flex h-[40vh] w-full translate-y-0 flex-col items-center justify-evenly overflow-y-hidden opacity-100 transition-all duration-500 ease-in-out",
              )
            : cn(
                "z-5 bg-custom-white-900 absolute inset-x-0 top-0 flex h-[40vh] w-full -translate-y-full flex-col items-center justify-evenly overflow-y-hidden opacity-100 transition-all duration-500 ease-in-out",
              )
        }
      >
        {menuItem.map((item) => (
          <Link
            href={item.name.toLowerCase()}
            // eslint-disable-next-line react/no-array-index-key
            key={Math.floor(Math.random() * 62859021739509)}
            className={cn(
              "text-mood-gray text-xl font-semibold opacity-70 hover:opacity-100",
            )}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
