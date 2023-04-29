"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { cn } from "@/utils";
import {
  Button,
  CloseIcon,
  CommandIcon,
  Heading,
  MenuIcon,
} from "@/components/atoms";
import "@total-typescript/ts-reset";

const Navbar: FC = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const dynamicRoute = usePathname();

  useEffect(() => setIsNavMenuOpen(false), [dynamicRoute]);

  type menuItemType = {
    anchor: string;
    name: string;
  };

  const menuItem: menuItemType[] = [
    {
      anchor: "about",
      name: "About",
    },
    {
      anchor: "project",
      name: "Project",
    },
    {
      anchor: "contact",
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
        <Heading className="font-bold text-2xl lg:text-3xl">
          Dimas Saputra
        </Heading>
      </Link>
      <Button
        title={isNavMenuOpen ? "close nav" : "open nav"}
        onClick={isNavMenuClicked}
        className="z-10 lg:hidden"
      >
        {isNavMenuOpen ? (
          <CloseIcon className="h-8 w-8" />
        ) : (
          <MenuIcon className="h-8 w-8" />
        )}
      </Button>
      <ul
        className={
          isNavMenuOpen
            ? cn(
                "z-5 bg-custom-white-900 absolute inset-x-0 top-0 flex h-[45vh] w-full translate-y-0 flex-col items-center justify-center gap-y-5 overflow-hidden opacity-100 transition-all duration-500 ease-in-out lg:hidden",
              )
            : cn(
                "z-5 bg-custom-white-900 absolute inset-x-0 top-0 flex h-[45vh] w-full -translate-y-full flex-col items-center justify-center gap-y-5 overflow-hidden opacity-100 transition-all duration-500 ease-in-out lg:hidden",
              )
        }
      >
        {menuItem.map((item) => (
          <Link
            href={item?.anchor}
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
      <ul
        className={cn(
          "hidden w-2/5 lg:flex lg:items-center lg:justify-between",
        )}
      >
        {menuItem.map((item) => (
          <Link
            href={item?.anchor}
            // eslint-disable-next-line react/no-array-index-key
            key={Math.floor(Math.random() * 62859021739509)}
            className={cn(
              "text-mood-gray text-base font-semibold opacity-70 hover:opacity-100",
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
