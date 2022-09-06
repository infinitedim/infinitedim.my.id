import React from "react";

interface SkillsTypes {
  title: string;
  width: string;
  percentage: string;
  level: string;
}

const frontendSkills: SkillsTypes[] = [
  {
    title: "JavaScript",
    width: "66%",
    percentage: "66%",
    level: "Middle",
  },
  {
    title: "VueJS",
    width: "33%",
    percentage: "33%",
    level: "Beginner",
  },
  {
    title: "ReactJS",
    width: "33%",
    percentage: "33%",
    level: "Beginner",
  },
];

const backendSkills: SkillsTypes[] = [
  {
    title: "NodeJS",
    width: "33%",
    percentage: "33%",
    level: "Beginner",
  },
  {
    title: "Python",
    width: "66%",
    percentage: "66%",
    level: "Middle",
  },
  {
    title: "Django",
    width: "33%",
    percentage: "33%",
    level: "Begginer",
  },
];

type SkillItemProps = {
  title: string;
  percentage: string;
  level: string;
};

const SkillItem = ({
  title,
  percentage,
  level,
}: SkillItemProps): React.ReactElement => {
  return (
    <div className="skill__data mb-3">
      <div className="skill__title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{level}</span>
      </div>
      <div className="skill__bar">
        <span
          className="skill__bar__percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skill">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index.toString()}
            title={item.title}
            level={item.level}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="backend__skill">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            level={item.level}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
}
