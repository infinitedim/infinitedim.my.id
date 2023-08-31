import { Heading } from "@/components";
import "@total-typescript/ts-reset";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center h-[60vh]">
      <Heading
        as="h1"
        title="Not Found"
      >
        Error
      </Heading>
      <Heading as="h2">404 Page Not Found</Heading>
    </div>
  );
}
