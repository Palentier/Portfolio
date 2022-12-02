export default function Heading({title, text}) {
    return(
        <div className="plnt__heading-container__feature">
        <div className="plnt__heading-container__feature-title">
          <div />
          <h1>{title}</h1>
        </div>
        <div className="plnt__heading-container_feature-text">
          <p>{text}</p>
        </div>
      </div>
    )
}