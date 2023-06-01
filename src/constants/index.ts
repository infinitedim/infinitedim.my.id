import { ReactIcon, TailwindIcon, TypescriptIcon } from "@/components/atoms";
import type { MenuItemType, ProjectsType } from "@/interfaces";

const menuItem: MenuItemType[] = [
  {
    anchor: "about",
    name: "About",
  },
  {
    anchor: "project",
    name: "Project",
  },
  {
    anchor: "contact",
    name: "Contact",
  },
];

const projects: ProjectsType[] = [
  {
    title: "Portfolio",
    description:
      "Portfolio it's my personal website build for me show some information and project i have created",
    url: "https://infinitedim.vercel.app",
    repo: "https://github.com/infintiedim/portfolio",
    techStack: [
      {
        name: "React",
        url: "https://react.dev",
        icon: ReactIcon,
      },
      {
        name: "Typescript",
        url: "https://typescriptlang.org",
        icon: TypescriptIcon,
      },
      {
        name: "Tailwindcss",
        url: "https://tailwindcss.com",
        icon: TailwindIcon,
      },
    ],
  },
  {
    title: "Miolica",
    description:
      "Miolica is e-commerce project that offer some features like cart, wishlist, seller, and own shipping system",
    url: "https://miolica.vercel.app",
    repo: "https://github.com/infintiedim/ecommerce",
    techStack: [
      {
        name: "React",
        url: "https://react.dev",
        icon: ReactIcon,
      },
      {
        name: "Typescript",
        url: "https://typescriptlang.org",
        icon: TypescriptIcon,
      },
      {
        name: "Tailwindcss",
        url: "https://tailwindcss.com",
        icon: TailwindIcon,
      },
    ],
  },
  {
    title: "Identico",
    description:
      "Identico it's my text-similarity api, it's build to search similarity between text you've search",
    url: "#",
    repo: "https://github.com/devixid/text-similarity-api",
    techStack: [
      {
        name: "React",
        url: "https://react.dev",
        icon: ReactIcon,
      },
      {
        name: "Typescript",
        url: "https://typescriptlang.org",
        icon: TypescriptIcon,
      },
      {
        name: "Tailwindcss",
        url: "https://tailwindcss.com",
        icon: TailwindIcon,
      },
    ],
  },
];

export * from "./animation";
export { menuItem, projects };
