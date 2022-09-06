import React, { ReactElement } from "react";

interface EducationTypes {
  degree: string;
  department: string;
  institute: string;
  year: string;
}

const educationData: EducationTypes[] = [
  {
    degree: "Vocational High School",
    department: "Bekasi",
    institute: "Yapenhas Boedi Luhur",
    year: "2022",
  },
  {
    degree: "Vocational High School",
    department: "Bekasi",
    institute: "Yapenhas Boedi Luhur",
    year: "2022",
  },
  {
    degree: "Vocational High School",
    department: "Bekasi",
    institute: "Yapenhas Boedi Luhur",
    year: "2022",
  },
];

type educationItemProps = {
  degree: string;
  department: string;
  institute: string;
  year: string;
};

const EducationItem = ({
  degree,
  department,
  institute,
  year,
}: educationItemProps): ReactElement => {
  return (
    <tbody>
      <tr>
        <td>{degree}</td>
        <td>{department}</td>
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
          <th>Departement</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>
      {educationData.map((item, index) => (
        <EducationItem
          key={index.toString()}
          degree={item.degree}
          department={item.department}
          institute={item.institute}
          year={item.year}
        />
      ))}
    </table>
  );
}
