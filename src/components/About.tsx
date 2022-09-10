import { ReactElement, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Education from "./Education";
import Award from "./Award";
import Skills from "./Skills";

interface SocialTypes {
  icon: string;
  link: string;
}

const socialData: SocialTypes[] = [
  {
    icon: "ri-instagram-line",
    link: "https://instagram.com/infinite.dim_",
  },
  {
    icon: "ri-twitter-line",
    link: "https://twitte.com/yourblooo",
  },
  {
    icon: "ri-linkedin-line",
    link: "https://instagram.com/infinite.dim_",
  },
  {
    icon: "ri-github-line",
    link: "https://github.com/infinitedim",
  },
];

interface SocialItemProps {
  icon: string;
  link: string;
}

const SocialItem = ({ icon, link }: SocialItemProps): ReactElement => {
  return (
    <span>
      <a href={link}>
        <i className={icon}></i>
      </a>
    </span>
  );
};

export default function About() {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about__btns d-flex align-items-center flex-column">
              <button
                className={`about__btn ${
                  aboutFilter === "ABOUT" ? "about__btn__active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "EDUCATION" ? "about__btn__active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "SKILLS" ? "about__btn__active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "AWARD" ? "about__btn__active" : ""
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Award
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5 align-items-center">
                <div className="about__img">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                    className="w-100"
                  />
                </div>
                <div className="about__content">
                  <h2>Dimas Saputra</h2>
                  <p>
                    fresh graduate of a vocational high school in the field of
                    computer and network technology, I am a programming and
                    networking enthusiast
                  </p>
                  <div className="social__links">
                    <h6 className="mb-3">Connect With Me</h6>
                    {socialData.map((item, index) => {
                      return (
                        <SocialItem
                          key={index.toString()}
                          icon={item.icon}
                          link={item.link}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
