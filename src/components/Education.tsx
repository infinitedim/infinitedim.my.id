import { ReactElement } from "react";

interface EducationTypes {
  degree: string;
  institute: string;
  year: string;
}

const educationData: EducationTypes[] = [
  {
    degree: "Elementary School",
    institute: "SDN Antajaya 02",
    year: "2010 - 2016",
  },
  {
    degree: "Junior High School",
    institute: "Yapenhas Boedi Luhur",
    year: "2016 - 2019",
  },
  {
    degree: "Vocational High School",
    institute: "Yapenhas Boedi Luhur",
    year: "2019 - 2022",
  },
];

interface educationItemProps {
  degree: string;
  institute: string;
  year: string;
}

const EducationItem = ({
  degree,
  institute,
  year,
}: educationItemProps): ReactElement => {
  return (
    <tbody>
      <tr>
        <td>{degree}</td>
        <td>{institute}</td>
        <td>{year}</td>
      </tr>
    </tbody>
  );
};

export default function Education() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>
      {educationData.map((item, index) => {
        return (
          <EducationItem
            key={index.toString()}
            degree={item.degree}
            institute={item.institute}
            year={item.year}
          />
        );
      })}
      ;
    </table>
  );
}
