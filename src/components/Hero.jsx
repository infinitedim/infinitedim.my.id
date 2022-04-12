import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p>Welcome To My World!</p>
              <h5>Hi</h5>
              <p>I'm <span>Dimas saputra</span></p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At labore assumenda asperiores velit excepturi animi molestiae debitis mollitia repudiandae voluptas?</p>
            </div>

            <div className="hero__btns d-flex align-items-center gap-4">
              <button className="btn hire__btn"><a href="#" className="btn__link">Hire Me</a></button>
              <button className="btn contact__btn"><a href="#" className="btn__link">Contact</a></button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero