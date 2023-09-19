/* eslint-disable no-nested-ternary */

import { Heading } from "@/components";
import { Metadata } from "next";
import { cn } from "@/utils";
import Hero from "@/public/hero.svg";
import Image from "next/image";
import { oswald } from "./fonts";

export const metadata: Metadata = {
  title: "Dimas Saputra - Home",
  description: "This is my personal portfolio web pages",
  keywords: [
    "dimas",
    "dimas Saputra",
    "dimas Saputra resume",
    "resume dimas saputra",
    "infinitedim resume",
    "cv",
    "cv dimas saputra",
    "infinitedim cv",
    "cv infinitedim",
    "resume infinitedim",
    "infinitedim",
    "infinitedim portfolio",
    "portfolio infinitedim",
    "Dimas portfolio",
  ],
  authors: [{ name: "infinitedim", url: "https://infinitedim.site" }],
  publisher: "vercel",
  creator: "infinitedim",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Home() {
  const myFirstName: Array<String> = ["D", "i", "m", "a", "s"];
  const myLastName: Array<String> = ["S", "a", "p", "u", "t", "r", "a"];
  return (
    <section
      id="homepage"
      className={cn(
        "container mx-auto mt-32 flex w-full max-w-6xl flex-col items-center justify-around",
      )}
    >
      <div className="self-center flex flex-col items-center my-10">
        <div className="flex space-x-2 mb-10">
          <Heading
            as="h3"
            className={cn(
              `${oswald.className} text-3xl font-light tracking-tighter text-woodsmoke-950 lg:text-5xl`,
            )}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.2, type: "spring" }}
            viewport={{ once: true, amount: 1 }}
          >
            Hi!
          </Heading>
          <Heading
            as="h3"
            className={cn(
              `${oswald.className} text-3xl font-light tracking-tighter text-woodsmoke-950 lg:text-5xl`,
            )}
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
            viewport={{ once: true, amount: 1 }}
          >
            My
          </Heading>
          <Heading
            as="h3"
            className={cn(
              `${oswald.className} text-3xl font-light tracking-tighter text-woodsmoke-950 lg:text-5xl`,
            )}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
            viewport={{ once: true, amount: 1 }}
          >
            name
          </Heading>
          <Heading
            as="h3"
            className={cn(
              `${oswald.className} text-3xl font-light tracking-tighter text-woodsmoke-950 lg:text-5xl`,
            )}
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 1 }}
          >
            is
          </Heading>
        </div>
        <div className="flex gap-x-5">
          <div className="flex">
            {myFirstName.map((name) => {
              return (
                <Heading
                  as="h1"
                  key={Math.floor(Math.random() * 62129842342044)}
                  className="font-black tracking-tighter mb-5 text-woodsmoke-950 text-5xl lg:text-9xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration:
                      name === "D"
                        ? 0.3
                        : name === "i"
                        ? 0.5
                        : name === "m"
                        ? 0.7
                        : name === "a"
                        ? 0.9
                        : name === "s"
                        ? 1.1
                        : 0,
                    type: "spring",
                  }}
                  viewport={{ once: true, amount: 1 }}
                >
                  {name}
                </Heading>
              );
            })}
          </div>
          <div className="flex">
            {myLastName.map((name) => {
              return (
                <Heading
                  as="h1"
                  key={Math.floor(Math.random() * 62129842342044)}
                  className="font-black tracking-tighter mb-5 text-woodsmoke-950 text-5xl lg:text-9xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration:
                      name === "S"
                        ? 1.3
                        : name === "a"
                        ? 1.5
                        : name === "p"
                        ? 1.7
                        : name === "u"
                        ? 1.9
                        : name === "t"
                        ? 2.1
                        : name === "r"
                        ? 2.3
                        : name === "a"
                        ? 2.5
                        : 0,
                    type: "spring",
                  }}
                  viewport={{ once: true, amount: 1 }}
                >
                  {name}
                </Heading>
              );
            })}
          </div>
        </div>
      </div>
      <Image
        src={Hero}
        alt="Hero"
        className={cn("h-3/5 w-3/5 sm:h-2/5 sm:w-2/5")}
      />
    </section>
  );
}
