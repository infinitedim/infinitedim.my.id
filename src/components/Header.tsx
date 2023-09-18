/* eslint-disable no-nested-ternary */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { inter, oswald } from "@/app/fonts";
import { menuIconAnimation, menuItems } from "@/constants";
import { Button, CloseIcon, GithubIcon, Heading, MenuIcon } from "./atoms";

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
              className={`${inter.className} font-medium lg:text-3xl text-xl tracking-tighter text-white`}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              viewport={{ once: true, amount: 1 }}
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
              <motion.li
                key={Math.floor(Math.random() * 6282114054905)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration:
                    item === "About"
                      ? 0.2
                      : item === "Blog"
                      ? 0.4
                      : item === "Projects"
                      ? 0.6
                      : item === "Contact"
                      ? 0.8
                      : 1,
                  type: "spring",
                }}
                viewport={{ once: true, amount: 1 }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-white"
                >
                  {item}
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <Button
          onClick={handleButtonClick}
          type="button"
          className="transition-all"
        >
          {isNavOpen ? (
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
      </nav>
      <div
        className="flex-1"
        id="welcome-text"
      >
        <Heading
          as="h3"
          className={`${oswald.className} text-2xl font-medium ml-5 text-woodsmoke-950`}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          viewport={{ once: true, amount: 1 }}
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
