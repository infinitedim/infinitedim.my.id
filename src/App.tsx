import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Import pages
const Home = lazy(
  async (): Promise<typeof import("c:/dev/portfolio/src/pages/Home")> =>
    await import("./pages/Home"),
);
const Contact = lazy(
  async (): Promise<typeof import("c:/dev/portfolio/src/pages/Contact")> =>
    await import("./pages/Contact"),
);
const Portfolio = lazy(
  async (): Promise<typeof import("c:/dev/portfolio/src/pages/Portfolio")> =>
    await import("./pages/Portfolio"),
);
const Resume = lazy(
  async (): Promise<typeof import("c:/dev/portfolio/src/pages/Resume")> =>
    await import("./pages/Resume"),
);

export default function App(): JSX.Element {
  return (
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Suspense>
  );
}
