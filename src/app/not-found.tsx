import { Heading } from "@/components";
import "@total-typescript/ts-reset";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center h-[60vh]">
      <Heading
        as="h1"
        className="text-3xl md:text-4xl lg:text-5xl font-black"
        title="Not Found"
      >
        Error
      </Heading>
      <Heading
        as="h2"
        className="text-2xl md:text-3xl lg:text-4xl font-extrabold"
      >
        404 Page Not Found
      </Heading>
    </div>
  );
}
