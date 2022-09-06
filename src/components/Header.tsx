import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Services",
    url: "#services",
  },
  {
    display: "Contact",
    url: "#contact",
  },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const bodyScrollTop = () => {
    if (document) {
      return document.body.scrollTop || document.documentElement.scrollTop;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (bodyScrollTop() > 80) {
        headerRef?.current?.classList.add("header__shrink");
      } else {
        headerRef?.current?.classList.remove("header__shrink");
      }
    });
  }, [bodyScrollTop]);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Dimas</h5>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => {
                return (
                  <li key={index.toString()} className="nav__item">
                    <a href={item.url} className="nav__link">
                      {item.display}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
            <button className="btn">
              <span>Let's Talk</span>
            </button>
            <span className="mobile__menu">
              <i className="ri-menu-2-fill"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
