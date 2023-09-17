import { cn } from "@/utils";

export default function Loading() {
  return (
    <div
      className={cn("m-auto flex h-[70vh] w-full items-center justify-center")}
    >
      <div className="jelly-triangle">
        <div className="jelly-triangle__dot" />
        <div className="jelly-triangle__traveler" />
      </div>
      <svg
        width="0"
        height="0"
        className="jelly-maker"
      >
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="7.3"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend
              in="SourceGraphic"
              in2="ooze"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
