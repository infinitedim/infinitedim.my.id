import { notFound } from "next/navigation";

export default function NotFoundCatchAll(): null {
  notFound();
  return null;
}
