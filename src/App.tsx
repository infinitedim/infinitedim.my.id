import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

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
