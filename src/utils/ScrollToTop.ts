import { useEffect } from "react";
import { getLocation } from "./getLocation";

export default function ScrollToTop(): null {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, [getLocation]);

  return null;
}
