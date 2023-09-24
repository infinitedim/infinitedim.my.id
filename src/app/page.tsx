/* eslint-disable no-nested-ternary */

import { Metadata } from "next";
import Image from "next/image";
import { myFirstName, myLastName } from "@/constants";
import { Heading } from "@/components";
import Hero from "@/public/hero.svg";
import { cn } from "@/utils";
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
  const greeting: Array<String> = ["Hi!", "my", "name", "is"];

  return (
    <section
      id="homepage"
      className={cn(
        "container mx-auto mt-20 flex h-full w-full max-w-6xl flex-col items-center justify-around sm:mt-32",
      )}
    >
      <div className="self-center flex flex-col items-center mt-10">
        <div className="flex space-x-2 sm:mb-10">
          {greeting.map((item) => {
            return (
              <Heading
                as="h3"
                className={cn(
                  `${oswald.className} text-3xl font-light tracking-tighter text-woodsmoke-950 lg:text-5xl`,
                )}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.2, type: "tween" }}
                viewport={{ once: true, amount: 1 }}
                key={Math.floor(Math.random() * 6123240394328)}
              >
                {item}
              </Heading>
            );
          })}
        </div>
        <div className="flex gap-x-5">
          <div className="flex">
            {myFirstName.map((name) => {
              return (
                <Heading
                  as="h1"
                  key={Math.floor(Math.random() * 62129842342044)}
                  className="font-black tracking-tighter sm:mb-5 text-woodsmoke-950 text-5xl lg:text-9xl"
                  initial={{
                    opacity: 0,
                    y:
                      name === "D"
                        ? 10
                        : name === "i"
                        ? 20
                        : name === "m"
                        ? 30
                        : name === "a"
                        ? 40
                        : name === "s"
                        ? 50
                        : 0,
                  }}
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
                    type: "tween",
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
                  initial={{
                    opacity: 0,
                    y:
                      name === "Sa"
                        ? 10
                        : name === "pu"
                        ? 30
                        : name === "tr"
                        ? 50
                        : name === "a"
                        ? 70
                        : 0,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration:
                      name === "Sa"
                        ? 0.3
                        : name === "pu"
                        ? 0.5
                        : name === "tr"
                        ? 0.7
                        : name === "a"
                        ? 0.9
                        : 0,
                    type: "tween",
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
        priority
      />
    </section>
  );
}
