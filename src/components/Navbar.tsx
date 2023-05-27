"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button, CloseIcon, Heading, MenuIcon } from "@/components/atoms";
import { menuItem, menuIconAnimation } from "@/constants";
import type { MenuItemType } from "@/interfaces";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";
import Infinite from "@/public/assets/svg/logo.svg";

function NavbarApp() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const pathName: string = usePathname();
  const navMenuClicked = useCallback(() => setNavOpen((open) => !open), []);

  useEffect(() => setNavOpen(false), [pathName]);

  return (
    <nav className="container fixed mx-auto top-0 inset-x-0 max-w-5xl px-2 sm:px-6 lg:px-8 z-40">
      <div className="sm:container flex h-16 items-center justify-between bg-custom-white-900">
        <div className="flex items-center justify-between w-full sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center justify-between w-full gap-x-2">
            <Link
              href="/"
              title="Dimas Saputra - Home"
              className="flex gap-x-2 items-center justify-center"
            >
              <Image
                src={Infinite as any}
                alt="Brand"
              />
              <Heading className="text-2xl lg:text-3xl trakcing-tighter font-bold">
                Dimas Saputra
              </Heading>
            </Link>
            <ul className="hidden sm:ml-6 lg:flex space-x-4">
              {menuItem.map((item: MenuItemType) => {
                return (
                  <motion.li
                    key={Math.floor(Math.random() * 628138034804)}
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: "-100vh", opacity: 0 }}
                    transition={{ duration: 1, type: "tween" }}
                  >
                    <Link
                      href={`/${item.anchor}`}
                      className="rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
        <Button
          className="inset-y-0 left-0 flex lg:hidden items-center justify-center rounded-md p-2"
          onClick={navMenuClicked}
          aria-roledescription="button"
          type="button"
        >
          {navOpen ? (
            <>
              <CloseIcon
                className="h-8 w-8"
                animate="visible"
                initial="hidden"
                pathVariants={menuIconAnimation}
              />
              <span className="sr-only">Close Navigaton</span>
            </>
          ) : (
            <>
              <MenuIcon
                className="h-8 w-8"
                animate="visible"
                initial="hidden"
                pathVariants={menuIconAnimation}
              />
              <span className="sr-only">Open Navigaton</span>
            </>
          )}
        </Button>
      </div>
      <div
        className={cn(
          "absolute z-[-10] w-full bg-custom-white-900 transition-all duration-500 ease-in-out",
          `${navOpen ? "y-zero" : "y-full"}`,
        )}
      >
        <ul className="space-y-1 px-2 pb-3 pt-2">
          {menuItem.map((item: MenuItemType) => {
            return (
              <li key={Math.floor(Math.random() * 62813038492)}>
                <Link
                  href={`/${item.anchor}`}
                  className="block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarApp;
