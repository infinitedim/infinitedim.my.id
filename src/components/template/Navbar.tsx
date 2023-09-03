import Link from "next/link";
import { Heading } from "../atoms";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-5xl w-[90%] mx-auto p-5 sticky top-5 bg-[rgba(255,255,255,0.8)] drop-shadow-xl rounded-3xl mt-5 z-10 backdrop-blur-md">
      <div className="self-start brand">
        <Heading as="h2">
          <Link href="/">Dimas</Link>
        </Heading>
      </div>
      <ul className="flex w-2/5 items-center justify-around">
        <li className="cursor-not-allowed">
          <Link
            href="/"
            className="cursor-not-allowed"
          >
            About
          </Link>
        </li>
        <li className="cursor-not-allowed">
          <Link
            href="/"
            className="border px-4 py-1 rounded-lg border-primary cursor-not-allowed"
          >
            Blog
          </Link>
        </li>
        <li className="cursor-not-allowed">
          <Link
            href="/"
            className="cursor-not-allowed"
          >
            Resume
          </Link>
        </li>
        <li className="cursor-not-allowed">
          <Link
            href="/"
            className="cursor-not-allowed"
          >
            Project
          </Link>
        </li>
        <li className="cursor-not-allowed">
          <Link
            href="/"
            className="cursor-not-allowed"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
