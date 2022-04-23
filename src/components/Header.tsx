import React, {useRef, useEffect} from 'react';
import { Container } from 'reactstrap';

const navLinks = [
  {
    display: 'Home',
    url: '#home',
  },
  {
    display: 'About',
    url: '#about',
  },
  {
    display: 'Portfolio',
    url: '#portfolio',
  },
  {
    display: 'Services',
    url: '#services',
  },
  {
    display: 'Contact',
    url: '#contact',
  },
];

const Header = () => {
  
  const headerRef = useRef(null)
  
  const bodyScrollTop = document.bodyScrollTop || document.documentElement.scrollTop
  
  useEffect(() => {
    window?.addEventListener('scroll', () => {
      if(bodyScrollTop > 80) {
        headerRef?.current?.add("header__shrink")
      } else {
        headerRef?.current?.remove("header__shrink")
      }
    }
  }, [bodyScrollTop])
  
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Dimas</h5>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => {
                return (
                  <li key={index} className="nav__item">
                    <a href={item.url} className="nav__link">
                      {item.display}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
            <button className="btn">Let's Talk</button>
            <span className="mobile__menu">
              <i className="ri-menu-2-fill"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
