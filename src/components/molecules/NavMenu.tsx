import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex self-end w-2/5">
      <ul className="flex self-end items-center justify-between w-full">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link
            href="/"
            className="border py-1 px-5 rounded-xl cursor-not-allowed"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
