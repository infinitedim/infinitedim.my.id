import { Div } from "@/components";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <Div className="container mx-auto max-w-5xl">{children}</Div>;
}
