/* eslint-disable no-unused-vars */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import {
  Button,
  CloseIcon,
  CommandIcon,
  Heading,
  MenuIcon,
} from "@/components/atoms";
import { menuItem } from "@/constants";
import { pathVariants } from "@/constants/animation";
import type { menuItemType } from "@/interfaces";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

const NavbarApp = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const navMenuClicked = useCallback(() => setNavOpen((open) => !open), []);

  return (
    <nav className="container fixed mx-auto top-0 inset-x-0 max-w-5xl px-2 sm:px-6 lg:px-8 z-40">
      <div className="sm:container flex h-16 items-center justify-between bg-custom-white-900">
        <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center gap-x-2">
            <Link
              href="/"
              title="Dimas Saputra - Home"
              className="flex gap-x-2"
            >
              <CommandIcon className="h-8 w-auto" />
              <Heading className="text-2xl lg:text-3xl trakcing-tighter font-bold">
                Dimas Saputra
              </Heading>
            </Link>
            <ul className="hidden sm:ml-6 lg:flex space-x-4">
              {menuItem.map((item: menuItemType) => {
                return (
                  <Link
                    href={`/${item.name}`}
                    className="rounded-md px-3 py-2 text-sm font-medium"
                    key={Math.floor(Math.random() * 628138034804)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <Button
          className="inset-y-0 left-0 flex lg:hidden items-center justify-center rounded-md p-2"
          onClick={navMenuClicked}
        >
          {navOpen ? (
            <>
              <CloseIcon
                className="h-8 w-8"
                animate="visible"
                initial="hidden"
                pathVariants={pathVariants}
              />
              <span className="sr-only">Close Navigaton</span>
            </>
          ) : (
            <>
              <MenuIcon
                className="h-8 w-8"
                animate="visible"
                initial="hidden"
                pathVariants={pathVariants}
              />
              <span className="sr-only">Open Navigaton</span>
            </>
          )}
        </Button>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "z-30 bg-custom-white-900 transition-all duration-300 ease-in-out",
          `${navOpen ? "y-zero opacity-100" : "y-full opacity-0"}`,
        )}
      >
        <ul className="space-y-1 px-2 pb-3 pt-2">
          {menuItem.map((item: menuItemType) => {
            return (
              <Link
                href={`/${item.anchor}`}
                className="block px-3 py-2 text-base font-medium border-b-[1px] borderopacity-50 border-mood-gray"
                key={Math.floor(Math.random() * 62813038492)}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
      {/* End Mobile menu */}
    </nav>
  );
};

export default NavbarApp;
