"use client";

import { Div, Heading, Paragraph, ProjectCard } from "@/components";
import { cardVariants, projects } from "@/constants";
import { cn } from "@/utils";
import "@total-typescript/ts-reset";

export default function Page() {
  return (
    <section className={cn("container mx-auto mb-5 mt-14 max-w-5xl")}>
      <Div className="container max-w-5xl">
        <Heading className="text-4xl md:text-5xl text-mood-gray mb-5 font-black">
          My Exellent Works
        </Heading>
        <Paragraph className="text-xl md:text-2xl font-medium">
          this is my project pages, in this pages you&#8216;ll see my best
          projects i&#8216;ve been created, i created my project with my best,
          im so proud with my work and all of them build with love
        </Paragraph>
      </Div>
      <Div className="container max-w-5xl">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={Math.floor(Math.random() * 62810493820356)}
              projectTitle={project.title}
              projectDesc={project.description}
              projectUrl={project.url}
              projectRepo={project.repo}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              variants={cardVariants}
            />
          );
        })}
      </Div>
    </section>
  );
}
