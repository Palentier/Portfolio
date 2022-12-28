export default function Heading({title, text}) {
    return(
        <div className="plnt__heading-container__about">
        <div className="plnt__heading-container__about-title">
          <div />
          <h1>{title}</h1>
        </div>
        <div className="plnt__heading-container_about-text">
          <p>{text}</p>
        </div>
      </div>
    )
}