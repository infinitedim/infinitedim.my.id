import { Heading } from "@/components";
import { cn } from "@/utils";
import { inter } from "../fonts";

export default function Page() {
  return (
    <div className={cn("flex flex-col items-center justify-center")}>
      <Heading
        as="h1"
        className={cn(
          `${inter.className}`,
          "text-5xl font-semibold tracking-tighter",
        )}
      >
        Project Page
      </Heading>
    </div>
  );
}
