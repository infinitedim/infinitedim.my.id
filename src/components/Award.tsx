/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactElement } from "react";
import { Col } from "reactstrap";
import sc_251 from "../assets/sc_251.jpg";
import sc_123 from "../assets/sc_123.jpg";
import sc_315 from "../assets/sc_315.jpg";
import sc_163 from "../assets/sc_163.jpg";
import sc_256 from "../assets/sc_256.jpg";
import sc_403 from "../assets/sc_403.jpg";
import sc_169 from "../assets/sc_169.jpg";

interface AwardTypes {
  image: string;
  title: string;
  year: string;
}

const awardData: AwardTypes[] = [
  {
    image: sc_123,
    title: "Belajar Dasar Pemrograman Web",
    year: "2022",
  },
  {
    image: sc_315,
    title: "Belajar Membuat Frontend Web Untuk Pemula",
    year: "2021",
  },
  {
    image: sc_163,
    title: "Belajar Fundamental Frontend Web Development",
    year: "2021",
  },
  {
    image: sc_251,
    title: "Cloud Practitioner Essentials",
    year: "2021",
  },
  {
    image: sc_169,
    title: "Belajar Prinsip Pemrograman SOLID",
    year: "2022",
  },
  {
    image: sc_403,
    title: "Membuat Aplikasi Web Dengan React",
    year: "2022",
  },
  {
    image: sc_256,
    title: "Belajar Dasar Pemrograman Javascript",
    year: "2022",
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
