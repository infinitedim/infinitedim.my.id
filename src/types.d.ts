/* eslint-disable no-unused-vars */
import { ReactNode } from "react";

declare global {
  namespace JSX {
    type ElementType =
      | keyof JSX.IntrinsicElements
      | ((props: any) => Promise<ReactNode> | ReactNode);
  }
}
