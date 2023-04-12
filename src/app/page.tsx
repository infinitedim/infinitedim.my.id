import { Metadata } from "next";
import Image from "next/image";
import { Heading, Paragraph } from "@/components/atoms";

/**
 * @description This is the main metadata in this application
 * @type {Metadata} The type of metadata
 */
export const metadata: Metadata = {
  title: "Dimas Saputra - Home",
  description: "This is my personal portfolio web pages",
  keywords: [
    "Dimas",
    "Dimas Saputra",
    "infinitedim",
    "infinitedim portfolio",
    "portfolio infinitedim",
    "Dimas portfolio",
    "Dracho Zhu",
    "Devixid",
  ],
  authors: [{ name: "infinitedim", url: "https://infinitedim.vercel.app" }],
};

export default function page() {
  return (
    <div className="hero-section container">
      <div className="hero-image flex items-center p-5">
        <Image
          src="/sapiens.png"
          quality={100}
          width={308}
          height={442}
          priority
          alt="Hero"
        />
        <Heading className="line-clamp-3 text-5xl font-black text-mood-gray">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What's going on here?
        </Heading>
      </div>
      <div className="mt-4 mx-2">
        <Heading size="lg" className="font-black text-mood-gray">
          This is my portfolio
        </Heading>
        <Paragraph
          size="lg"
          className="font-medium mr-10 line-clamp-4 text-mood-gray tracking-tighter"
        >
          Well hello people, my name is Dimas Saputra, i am a junior frontend
          developer especially ReactJS. based in Bekasi, Indonesia
        </Paragraph>
      </div>
    </div>
  );
}
