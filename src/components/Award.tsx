import React from 'react'

type AwardItemProps = {
  year: string;
  title: string;
  text: string;
}

const AwardItem = ({
  year,
  title,
  text,
}: AwardItemProps): React.ReactElement => {
  return (
    <div className="single__award">
      <div className="award__year">{year}</div>
      <h6 className="award__title">{title} - {""}
        <span>
          {text}
        </span>
      </h6>
    </div>
    )
}

const Award = () => {
  return (
      <div className="award__container d-flex align-items-center gap-5">
        <div className="award__item w-50">
          <AwardItem year="2020" title="Lorem ipsum" text="Lorem Ipsum dolor, amet sit consectetur adipicising elit. Prosenteum, molecias"/>
        </div>
      </div>
    )
}

export default Award