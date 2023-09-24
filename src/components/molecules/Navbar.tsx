/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

"use client";

import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { inter } from "@/app/fonts";
import { closeIconAnimation, menuIconAnimation, menuItems } from "@/constants";
import { Button, CloseIcon, Heading, MenuIcon } from "@/components/atoms";
import Link from "next/link";
// import { useScreen } from "@/hooks";
import { cn } from "@/utils";
import { useWindowSize } from "usehooks-ts";

function Navbar() {
  const { width } = useWindowSize();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(width);
  });

  function handleButtonClick() {
    setIsNavOpen((prevState: boolean) => !prevState);
  }
  return width <= 576 ? (
    <motion.nav
      initial={{
        x: -width / 10,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
        type: "spring",
      }}
      className={cn(
        `${width >= 576 ? "hidden w-0 opacity-0" : "flex w-full opacity-100"}`,
        "fixed inset-x-0 bottom-0 z-10 h-16 items-center justify-between bg-woodsmoke-950 px-5 text-woodsmoke-50",
      )}
    >
      <div className="brand">
        <Link href="/">
          <Heading
            as="h3"
            className={cn(
              `${inter.className} text-xl font-medium tracking-tighter text-white lg:text-3xl`,
            )}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
            viewport={{ once: true, amount: 1 }}
          >
            Dimas
          </Heading>
        </Link>
      </div>
      <ul
        className={cn(
          `${isNavOpen ? "bottom-16" : "-bottom-80"}`,
          "absolute inset-x-0 z-[-1] mr-40 flex h-[40vh] w-full flex-col items-center justify-evenly bg-woodsmoke-950  text-white transition-all duration-1000",
        )}
      >
        {menuItems.map((item) => {
          return (
            <motion.li
              key={Math.floor(Math.random() * 6282114054905)}
              initial={{
                opacity: 0,
                x:
                  item === "About"
                    ? -10
                    : item === "Blog"
                    ? -40
                    : item === "Projects"
                    ? -70
                    : item === "Contact"
                    ? -100
                    : -130,
              }}
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
                stiffness: 100,
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
              pathVariants={closeIconAnimation}
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
    </motion.nav>
  ) : (
    <motion.nav
      initial={{
        x: -width / 3,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
        type: "spring",
      }}
      className={cn(
        `${isNavOpen ? "rounded-br-none" : "rounded-br-lg"}`,
        "sticky z-10 mr-5 flex h-16 w-2/5 items-center justify-between bg-woodsmoke-950 px-5 text-woodsmoke-50 transition-all duration-1000",
      )}
    >
      <div className="brand">
        <Link href="/">
          <Heading
            as="h3"
            className={`${inter.className} font-medium z-10 lg:text-3xl text-xl tracking-tighter text-white`}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
            viewport={{ once: true, amount: 1 }}
          >
            Dimas
          </Heading>
        </Link>
      </div>
      <ul
        className={cn(
          `${isNavOpen ? "top-16 rounded-br-lg" : "-top-96"}`,
          "absolute inset-x-0 z-[-1] mr-40 flex h-[40vh] w-full flex-col items-center justify-evenly bg-woodsmoke-950 text-white transition-all duration-1000",
        )}
      >
        {menuItems.map((item) => {
          return (
            <motion.li
              key={Math.floor(Math.random() * 6282114054905)}
              initial={{
                opacity: 0,
                x:
                  item === "About"
                    ? -10
                    : item === "Blog"
                    ? -40
                    : item === "Projects"
                    ? -70
                    : item === "Contact"
                    ? -100
                    : -130,
              }}
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
                stiffness: 100,
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
              pathVariants={closeIconAnimation}
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
    </motion.nav>
  );
}

export default memo(Navbar);
