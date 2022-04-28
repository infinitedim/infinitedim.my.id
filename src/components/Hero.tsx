import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { init } from 'ityped';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef?.current as unknown as Element, {
      backDelay: 2000,
      showCursor: true,
      typeSpeed: 50,
      strings: [
        'Dimas Saputra',
        'a Freelancer',
        'a Frontend Web Developer',
        'a Network Engineer',
        'a Student',
      ],
      placeholder: false,
    });
  }, []);

  return (
    <section className="hero" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              {/* <p className="mb-3">Welcome To My World!</p> */}
              <h1 className="mb-4">Hi</h1>
              <h2 className="hero__title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                labore assumenda asperiores velit excepturi animi molestiae
                debitis mollitia repudiandae voluptas?
              </p>
            </div>

            <div className="mt-4 hero__btns d-flex align-items-center gap-4">
              <button className="hero__btn">
                <a href="/#">Hire Me</a>
              </button>
              <button className="hero__btn">
                <a href="/#">Contact</a>
              </button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero__img">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
