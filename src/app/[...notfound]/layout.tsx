import { Div } from "@/components";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <Div className="max-w-5xl mx-auto container">{children}</Div>;
}
