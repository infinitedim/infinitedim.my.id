import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { getLocation } from "./utils/getLocation";

// Import pages
const Contact = lazy(async () => await import("./pages/Contact"));
const Home = lazy(async () => await import("./pages/Home"));
const Loading = lazy(async () => await import("./pages/Loading"));
const Portfolio = lazy(async () => await import("./pages/Portfolio"));

// import components
const Navbar = lazy(async () => await import("./components/Navbar"));
const Footer = lazy(async () => await import("./components/Footer"));

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      {getLocation.pathname !== "/loading" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/porfolio"
          element={<Portfolio />}
        />
      </Routes>
      {getLocation.pathname !== "/loading" && <Footer />}
    </Suspense>
  );
}
