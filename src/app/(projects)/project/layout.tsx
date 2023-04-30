import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="container max-w-5">{children}</div>;
}
