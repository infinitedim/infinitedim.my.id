import React from "react";
import { Container } from "reactstrap";

const navLinks = [
  {
    display: 'Home',
    url: '#home'
  },
  {
    display: 'About',
    url: '#about'
  },
  {
    display: 'Portfolio',
    url: '#portfolio'
  },
  {
    display: 'Contact',
    url: '#contact'
  },
];

const Header = () => {
  return <header className="header">
    <Container>
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <h5>Infinitedim</h5>
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            {
                navLinks.map((item, index) => <li key={index} className="nav__item">
                  <a href={item.url} className="nav__link">{item.display}</a></li>
            )}
            </ul>
          </div>

          <div className="nav__right">
            <button className="btn">Let's Talk</button>
            <span className="mobile__menu">
              <i class="ri-menu-2-fill"></i>
            </span>
          </div>
        </div>
      </Container>
  </header>
}

export default Header