import React from "react";
import { Container, Row, Col } from "reactstrap";

interface ServicesTypes {
  icon: string;
  title: string;
  desc: string;
}

const servicesData: ServicesTypes[] = [
  {
    icon: "ri-code-line",
    title: "Web Development",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Daleniti dolorem quae voluptatum officia at repudiandae suscipit exercitationem dolor asperiores cum?",
  },
  {
    icon: "ri-router-line",
    title: "Networking",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Daleniti dolorem quae voluptatum officia at repudiandae suscipit exercitationem dolor asperiores cum?",
  },
  {
    icon: "ri-collage-fill",
    title: "Web Design",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Daleniti dolorem quae voluptatum officia at repudiandae suscipit exercitationem dolor asperiores cum?",
  },
  {
    icon: "ri-bug-fill",
    title: "Pentesting",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Daleniti dolorem quae voluptatum officia at repudiandae suscipit exercitationem dolor asperiores cum?",
  },
];

type ServicesItemProps = {
  icon: string;
  title: string;
  desc: string;
};

const ServicesItem = ({
  icon,
  title,
  desc,
}: ServicesItemProps): React.ReactElement => {
  return (
    <Col lg="4" md="6" sm="6">
      <div className="services__card">
        <span className="services__icon">
          <i className={icon}></i>
        </span>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </Col>
  );
};

export default function Services() {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="12" className="services__top mb-5">
            <h2>What Service I Provide</h2>
          </Col>
          {servicesData.map((item, index) => {
            return (
              <ServicesItem
                key={index.toString()}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
