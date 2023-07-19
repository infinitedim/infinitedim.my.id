import { Heading } from "./atoms";
import { NavMenu } from "./molecules";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between w-full max-w-5xl mx-auto p-5 sticky top-5 bg-white drop-shadow-lg rounded-3xl mt-5 z-10 backdrop-blur-lg opacity-95">
      <div className="self-start brand">
        <Heading as="h2">Dimas</Heading>
      </div>
      <NavMenu />
    </header>
  );
}
