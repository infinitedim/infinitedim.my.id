import React, {useRef} from 'react'
import { Container, Row, Col } from 'reactstrap'

import {init} from 'ityped'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="mb-3">Welcome To My World!</p>
              <h5 className="mb-4">Hi</h5>
              <h2 className="hero__title mb-4">
              I'm <span>Dimas saputra</span></h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At labore assumenda asperiores velit excepturi animi molestiae debitis mollitia repudiandae voluptas?</p>
            </div>

            <div className="mt-4 hero__btns d-flex align-items-center gap-4">
              <button className="btn hire__btn"><a href="#">Hire Me</a></button>
              <button className="btn"><a href="#">Contact</a></button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="w-100" ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero