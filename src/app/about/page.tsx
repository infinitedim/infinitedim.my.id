import { Heading } from "@/components";
import { cn } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dimas Saputra - About",
  description: "This is my about page",
  keywords: [
    "dimas",
    "dimas Saputra",
    "resume",
    "infinitedim",
    "portfolio",
    "about",
    "about page",
    "infinitedim about",
  ],
  authors: [{ name: "Dimas Saputra", url: "https://infinitedim.site" }],
  creator: "Dimas Saputra",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Page() {
  return (
    <section
      className={cn(
        "mx-auto flex h-full w-full max-w-5xl flex-col items-center",
        "mt-20",
      )}
    >
      <Heading as="h1">Ini Halaman About</Heading>
    </section>
  );
}
