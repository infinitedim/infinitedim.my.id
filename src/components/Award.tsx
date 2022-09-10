/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactElement } from "react";
import { Col } from "reactstrap";
import sc_251 from "../assets/sc_251.jpg";
import sc_123 from "../assets/sc_123.jpg";
import sc_315 from "../assets/sc_315.jpg";
import sc_163 from "../assets/sc_163.jpg";

interface AwardTypes {
  image: string;
  title: string;
  year: string;
}

const awardData: AwardTypes[] = [
  {
    image: sc_123,
    title: "Web Programming Fundamental",
    year: "2021",
  },
  {
    image: sc_315,
    title: "Frontend Web For Beginer",
    year: "2021",
  },
  {
    image: sc_163,
    title: "Frontend Web Fundamental",
    year: "2021",
  },
  {
    image: sc_251,
    title: "Cloud Practitioner Essentials",
    year: "2021",
  },
];

interface AwardItemProps {
  image: string;
  title: string;
  year: string;
}

const AwardItem = ({ image, title, year }: AwardItemProps): ReactElement => {
  return (
    <Col lg="6" md="6" sm="12">
      <div className="award__item">
        <div className="award__card">
          <div className="award__image">
            <img src={image} alt={title} />
          </div>
          <h6 className="award__title">{title}</h6>
          <div className="award__year"> {year} </div>
        </div>
      </div>
    </Col>
  );
};

export default function Award() {
  return (
    <div className="award__container d-flex align-items-center flex-wrap">
      {awardData.map((item, index) => {
        return (
          <AwardItem
            key={index.toString()}
            image={item.image}
            title={item.title}
            year={item.year}
          />
        );
      })}
    </div>
  );
}
