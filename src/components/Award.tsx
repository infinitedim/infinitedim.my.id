import React from 'react'

interface AwardTypes {
  image: string;
  title: string;
  year: string;
}

const awardData: AwardTypes[] = [
  {
    image: '../../assets/dicoding_aws_251.jp',
    title: 'Belajar Dasar Pemrograman Web',
    year: '2021',
  },
]

type AwardItemProps = {
  image: string, 
  title: string,
  year: string,
}

const AwardItem = ({
  image,
  title,
  year,
}: AwardItemProps): React.ReactElement => {
  return (
    <div className="award__card">
      <div className="award__image">
        <img src={image} />
      </div>
      <h6 className="award__title">{title}</h6>
      <div className="award__year"> {year} </div>
    </div>
    )
}

const Award = () => {
  return (
      <div className="award__container d-flex align-items-center flex-wrap justify-content-between">
        {
          awardData.map((item,index) => {
            return (
              <AwardItem
                key={index.toString()}
                image={item.image}
                title={item.title}
                year={item.year}
              />
            )
          })
        }
      </div>
    )
}

export default Award