import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import aboutImg from 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg='12'><h2>About Me</h2></Col>
          <Col lg='4' md='3'>
            <div className="about__btns">
              <button className="about__btn">About Me</button>
              <button className="about__btn">Education</button>
              <button className="about__btn">Skills</button>
              <button className="about__btn">Certificate</button>
            </div>
          </Col>
          <Col lg='8' md='9'>
            <div className="about__content__wrapper d-flex gap-5">
              <div className="about__img">
                <img src={aboutImg} alt="" />
              </div>
              <div className="about__content">

              </div>
              <div className="social__links">

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About