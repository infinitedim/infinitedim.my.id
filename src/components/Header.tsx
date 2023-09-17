/* eslint-disable no-nested-ternary */

"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { menuIconAnimation, menuItems } from "@/constants";
import { inter, oswald } from "@/app/fonts";
import { usePathname } from "next/navigation";
import { CloseIcon, GithubIcon, Heading, MenuIcon } from "./atoms";

function Header() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Navbar ${isNavOpen ? "terbuka" : "tertutup"}`);
  }, [isNavOpen]);

  function handleButtonClick() {
    setIsNavOpen((prevState: boolean) => !prevState);
  }

  return (
    <header className="flex items-center justify-between fixed top-0 inset-x-0 w-full">
      <nav
        className={`${
          isNavOpen ? "sm:rounded-none" : "sm:rounded-br-lg"
        } flex items-center justify-between px-5 bottom-0 inset-x-0 mr-5 z-10 sm:sticky fixed bg-woodsmoke-950 transition-all duration-300 w-full sm:w-2/5 h-16 text-woodsmoke-50`}
      >
        <div className="brand">
          <Link href="/">
            <Heading
              as="h3"
              className={`${inter.className} font-medium lg:text-3xl text-xl tracking-tighter`}
            >
              Dimas
            </Heading>
          </Link>
        </div>
        <ul
          className={`${
            isNavOpen
              ? "sm:top-16 bottom-16  sm:rounded-br-lg"
              : "sm:-top-96 opacity-0 -bottom-96"
          } flex w-full flex-col justify-evenly mr-40 items-center z-[-1] transition-all duration-300 bg-woodsmoke-950 h-[40vh] inset-x-0  absolute text-white`}
        >
          {menuItems.map((item) => {
            return (
              <li key={Math.floor(Math.random() * 6282114054905)}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-white"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={handleButtonClick}
          type="button"
          className="transition-all duration-300"
        >
          {isNavOpen ? (
            <CloseIcon
              className="h-8 w-8"
              variants={menuIconAnimation}
              svgVariants={menuIconAnimation}
            />
          ) : (
            <MenuIcon
              className="h-8 w-8"
              variants={menuIconAnimation}
              svgVariants={menuIconAnimation}
            />
          )}
        </button>
      </nav>
      <div
        className="flex-1"
        id="welcome-text"
      >
        <Heading
          as="h3"
          className={`${oswald.className} text-2xl font-medium ml-5`}
        >
          {pathname === "/"
            ? "Welcome"
            : pathname === "/about"
            ? "About"
            : pathname === "/blog"
            ? "Blog"
            : pathname === "/project"
            ? "Project"
            : pathname === "/contact"
            ? "Contact"
            : pathname === "/resume"
            ? "Resume"
            : "Page not Found"}
        </Heading>
      </div>
      <Link
        className="mr-5 mt-5 self-start"
        href="https://github.com/infinitedim"
      >
        <GithubIcon className="h-8 w-8" />
      </Link>
      <div />
    </header>
  );
}

export default memo(Header);
