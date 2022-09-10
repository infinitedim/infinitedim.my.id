import React, { ReactElement } from "react";

interface EducationTypes {
  degree: string;
  department: string;
  institute: string;
  year: string;
}

const educationData: EducationTypes[] = [
  {
    degree: "Elementary School",
    department: "Bogor",
    institute: "SDN Antajaya 02",
    year: "2010 - 2016",
  },
  {
    degree: "Junior High School",
    department: "Bekasi",
    institute: "Yapenhas Boedi Luhur",
    year: "2016 - 2019",
  },
  {
    degree: "Vocational High School",
    department: "Bekasi",
    institute: "Yapenhas Boedi Luhur",
    year: "2019 - 2022",
  },
];

interface educationItemProps {
  degree: string;
  department: string;
  institute: string;
  year: string;
}

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
