import Image from "next/image";
import { cn } from "@/utils";
import Dog from "@/public/not_found.svg";
import { Button, Heading } from "@/components";
import Link from "next/link";
import { inter, oswald } from "./fonts";

export default function NotFound() {
  return (
    <div
      className={cn(
        "container flex h-[80vh] flex-col items-center justify-center",
      )}
    >
      <Image
        src={Dog}
        alt="not found"
        className={cn("-mb-20 h-3/4 w-3/4 sm:h-2/4 sm:w-2/4")}
      />
      <Heading
        title="Error"
        as="h1"
        className={cn(
          `${inter.className}`,
          "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
        )}
      >
        Error
      </Heading>
      <Heading
        as="h2"
        title="404 Page Not Found"
        className={cn(
          `${oswald.className}`,
          "mb-5 text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl",
        )}
      >
        404 Page Not Found
      </Heading>
      <Button
        type="button"
        className={cn(
          `${oswald.className}`,
          "mt-5 rounded-lg bg-woodsmoke-950 px-5 py-3 lowercase tracking-wide text-woodsmoke-50",
        )}
      >
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
