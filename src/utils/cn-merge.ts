import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import "@total-typescript/ts-reset";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
