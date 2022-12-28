import Link from "next/link"
export default function Project({imgUrl, name, text, source, link}) {
    return(
        <div className="plnt__projects-container_project">
        <div className="plnt__projects-container_project-image">
          <img src={imgUrl} alt="..." />
        </div>
        <div className="plnt__projects-container_project-content">
          <div>
            <p>{name}</p>
            <h3>{text}</h3>
          </div>
          <p>{source}</p>
        </div>
      </div>
    )
}