import React, {useState} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Education from './Education'
import Award from './Award'
import Skills from './Skills'


const About = () => {
  
  const [aboutFilter, setAboutFilter] = useState('ABOUT')
  
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg='12'><h2>About Me</h2></Col>
          <Col lg='4' md='3'>
            <div className="about__btns d-flex align-items-center flex-column">
              <button className="about__btn about__btn-active" onClick={() => setAboutFilter('ABOUT')}>About Me</button>
              <button className="about__btn" onClick={() => setAboutFilter('EDUCATION')}>Education</button>
              <button className="about__btn" onClick={() => setAboutFilter('SKILLS')}>Skills</button>
              <button className="about__btn" onClick={() => setAboutFilter('AWARD')}>Award</button>
            </div>
          </Col>
          <Col lg='8' md='9'>
            {
              aboutFilter === 'ABOUT' &&             <div className="about__content__wrapper d-flex gap-5 align-items-center">
              <div className="about__img w-25">
                <img src="https://images.unsplash.com/photo-1649773965074-26c817bc7636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="w-100" />
              </div>
              <div className="about__content">
                <h2>I'm Dimas Saputra</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum adipisci commodi dolore tenetur ad. Adipisci vero cupiditate quia, optio incidunt est. Quas eveniet distinctio explicabo molestias nesciunt, dolore labore maxime!</p>
              <div className="social__links">
                <h6 className="mb-3">Connect With Me</h6>
                <span><a href="#"><i class="ri-instagram-line"></i></a></span>
                <span><a href="#"><i class="ri-facebook-line"></i></a></span>
                <span><a href="#"><i class="ri-youtube-line"></i></a></span>
                <span><a href="#"><i class="ri-github-line"></i></a></span>
                <span><a href="#"><i class="ri-linkedin-line"></i></a></span>
              </div>
              </div>
            </div>
            }
            {
              aboutFilter === 'EDUCATION' && <Education />
            }
            {
              aboutFilter === 'SKILLS' && <Skills />
            }
            {
              aboutFilter === 'AWARD' && <Award />
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About