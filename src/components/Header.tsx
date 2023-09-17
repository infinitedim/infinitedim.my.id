/* eslint-disable no-nested-ternary */

"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { menuItems } from "@/constants";
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
    <header className="flex items-center justify-between">
      <nav
        className={`${
          isNavOpen ? "rounded-none" : "rounded-br-lg"
        } flex items-center justify-between px-5 mr-5 z-10 sticky bg-woodsmoke-950 transition-all duration-300 w-2/5 h-16 text-woodsmoke-50`}
      >
        <div className="brand">
          <Link href="/">
            <Heading
              as="h3"
              className={`${inter.className} font-medium text-xl tracking-wide`}
            >
              Dimas
            </Heading>
          </Link>
        </div>
        <ul
          className={`${
            isNavOpen ? "top-16" : "-top-96"
          } flex w-full flex-col justify-evenly mr-40 items-center z-[-1] transition-all  duration-300 bg-woodsmoke-950 h-[40vh] inset-x-0 absolute text-white rounded-br-lg`}
        >
          {menuItems.map((item) => {
            return (
              <li key={Math.floor(Math.random() * 6282114054905)}>
                <Link
                  href={`/${item.toLocaleLowerCase}`}
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
        >
          {isNavOpen ? (
            <CloseIcon className="h-8 w-8" />
          ) : (
            <MenuIcon
              className="h-8 w-8"
              variants={{
                hidden: {
                  pathLength: 0,
                  fill: "rgba(255, 255, 255, 0)",
                },
                visible: {
                  pathLength: 1,
                  fill: "rgba(255, 255, 255, 1)",
                },
              }}
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
          className={`${oswald.className} text-2xl font-medium`}
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
        className="mr-5 flex flex-col items-center"
        href="https://github.com/infinitedim"
      >
        <GithubIcon />
        Github
      </Link>
      <div />
    </header>
  );
}

export default memo(Header);
