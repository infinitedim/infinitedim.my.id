/* eslint-disable no-nested-ternary */

import { Metadata } from "next";
import { myFirstName, myLastName } from "@/constants";
import { Heading, Text } from "@/components";
import { cn } from "@/utils";
import HeroImage from "@/components/atoms/images/HeroImage";
import { inter, oswald } from "./fonts";

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
        "container mx-auto mt-20 flex h-full w-full max-w-4xl flex-col items-center justify-around sm:mt-32",
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
          <Heading
            className="flex"
            as="h1"
          >
            {myFirstName.map((name) => {
              return (
                <Text
                  type="span"
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
                </Text>
              );
            })}
          </Heading>
          <Heading
            className="flex"
            as="h1"
          >
            {myLastName.map((name) => {
              return (
                <Text
                  type="span"
                  key={Math.floor(Math.random() * 62129842342044)}
                  className="font-black tracking-tighter mb-5 text-woodsmoke-950 text-5xl lg:text-9xl"
                  initial={{
                    opacity: 0,
                    y:
                      name === "Sa"
                        ? 60
                        : name === "pu"
                        ? 70
                        : name === "tr"
                        ? 80
                        : name === "a"
                        ? 90
                        : 0,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration:
                      name === "Sa"
                        ? 1.3
                        : name === "pu"
                        ? 1.5
                        : name === "tr"
                        ? 1.7
                        : name === "a"
                        ? 1.9
                        : 0,
                    type: "tween",
                  }}
                  viewport={{ once: true, amount: 1 }}
                >
                  {name}
                </Text>
              );
            })}
          </Heading>
        </div>
      </div>
      <HeroImage
        className={cn(
          "mx-auto my-10 flex place-items-center items-center justify-center self-center",
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <div
        className={cn(
          "mb-10 flex flex-col items-start justify-start self-start",
        )}
      >
        <Heading
          as="h2"
          className={cn(
            `${oswald.className}`,
            "mb-2 text-6xl font-bold tracking-tight",
          )}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 1 }}
        >
          Who i am?
        </Heading>
        <Text
          type="p"
          className={cn(
            `${inter.className}`,
            "mx-2 mb-5 mt-2 text-base font-medium tracking-tighter sm:text-xl",
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          ut! Nesciunt quos unde dolore ducimus, illo magni maiores
          consequuntur, optio praesentium distinctio officia sequi, temporibus
          magnam nihil explicabo?
        </Text>
      </div>
    </section>
  );
}
