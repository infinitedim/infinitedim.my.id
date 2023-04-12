import { BreakpointType } from "@/interfaces";

export const getBreakpoint = (): string => {
  const breakpoints: BreakpointType[] = [
    {
      name: "xs",
      min: 0,
      max: 639,
    },
    {
      name: "sm",
      min: 640,
      max: 767,
    },
    {
      name: "md",
      min: 768,
      max: 991,
    },
    {
      name: "lg",
      min: 992,
      max: 1279,
    },
    {
      name: "xl",
      min: 1280,
      max: 1535,
    },
    {
      name: "2xl",
      min: 1536,
      max: Infinity,
    },
  ];

  // @ts-expect-error
  const { innerWidth } = typeof window;

  const breakpoint: BreakpointType | undefined = breakpoints.find(
    (item) => innerWidth >= item.min && innerWidth <= item.max,
  );

  return breakpoint != null ? breakpoint.name : "xl";
};
