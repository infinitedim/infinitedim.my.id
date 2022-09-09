import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </React.Fragment>
  );
}
