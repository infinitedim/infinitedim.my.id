import React from 'react'

const frontendSkills = [
  {
    title: 'JavaScript',
    width: '85%',
    percentage: '85%'
  },
  {
    title: 'VueJS',
    width: '80%',
    percentage: '80%'
  },
  {
    title: 'ReactJS',
    width: '70%',
    percentage: '70%'
  },
  ]

const backendSkills = [
  {
    title: 'NodeJS',
    width: '80%',
    percentage: '80%'
  },
  {
    title: 'Python',
    width: '70%',
    percentage: '70%'
  },
  {
    title: 'Django',
    width: '75%',
    percentage: '75%'
  },
  ]

const Skills = () => {
  return (
    <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skill w-50">
      {
        frontendSkills.map((item, index) => {
          <SkillItem key={index} title={item.title} percentage={item.percentage} />
        })
      }
      </div>
      <div className="backend__skill">
        {
          backendSkills.map((item,index) => {
            <SkillItem key={index} title={item.title} percentage={item.percentage} />
          })
        }
      </div>
    </div>
    )
} 

const SkillItem = (item, percentage) => {
  return <div className="skill__data mb-3">
    <div className="skill__title d-flex align-items-center justify-content-between">
      <h6>{item}</h6>
      <span>{percentage}</span>
     </div>
     <div className="skill__bar">
       <span className="skill__bar__percentage" style={{ width: `${percentage}` }}>
       </span>
      </div>
     </div>
};

export default Skills