"use client";

import { Heading, Paragraph, ProjectCard } from "@/components";
import { cardVariants } from "@/constants";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

export default function Page() {
  return (
    <section className={cn("container mx-auto mb-5 mt-14 max-w-5xl")}>
      <div className="container max-w-5xl">
        <Heading className="text-4xl md:text-5xl text-mood-gray mb-5 font-black">
          My Exellent Works
        </Heading>
        <Paragraph className="text-xl md:text-2xl font-medium">
          this is my project pages, in this pages you&#8216;ll see my best
          projects i&#8216;ve been created, i created my project with my best,
          im so proud with my work and all of them build with love
        </Paragraph>
      </div>
      <div className="container max-w-5xl">
        <ProjectCard
          projectTitle="Portfolio"
          projectDesc="Portfolio it's my personal website build for me show some information and project i have created"
          projectUrl="https://infinitedim.veercel.app"
          projectRepo="https://gthub.com/infinitedim/portfolio"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          variants={cardVariants}
        />
      </div>
    </section>
  );
}
