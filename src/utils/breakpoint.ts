import { BreakpointType } from "@/interfaces";
import "@total-typescript/ts-reset";

export const getBreakpoint = (): string => {
  const breakpoints: BreakpointType[] = [
    {
      name: "xs",
      min: 0,
      max: 575,
    },
    {
      name: "sm",
      min: 576,
      max: 767,
    },
    {
      name: "md",
      min: 768,
      max: 1023,
    },
    {
      name: "lg",
      min: 1024,
      max: 1199,
    },
    {
      name: "xl",
      min: 1200,
      max: 1399,
    },
    {
      name: "2xl",
      min: 1400,
      max: Infinity,
    },
  ];

  // @ts-expect-error
  const { innerWidth } = typeof window;

  const breakpoint: BreakpointType | undefined = breakpoints.find(
    (item) => innerWidth >= item.min && innerWidth <= item.max,
  );

  return breakpoint !== null ? (breakpoint?.name as string) : "xl";
};
