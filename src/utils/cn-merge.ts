import clsx from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import "@total-typescript/ts-reset";

export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}
