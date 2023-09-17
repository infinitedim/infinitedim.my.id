import { cn } from "@/utils";

export default function NotFound() {
  return (
    <div
      className={cn(
        "container flex h-[60vh] flex-col items-center justify-center",
      )}
    >
      <h1 title="Not Found">Error</h1>
      <h2>404 Page Not Found</h2>
    </div>
  );
}
