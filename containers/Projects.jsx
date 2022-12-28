
import Project from '../components/Project';


export default function Projects() {
    return (
      <div className="plnt__project section__padding" id="projects">
      <div className="plnt__project-heading">
        <h1 className="gradient__text">I haven&apos;t worked on much,<br /> But here&apos;s what I got.</h1>
      </div>
      <div className="plnt__project-container">
        <div className="plnt__project-container_groupA">
          <Project imgUrl='/tj2ceob.png' name="Nov 18, 2022" text="Profile Card Template" source='Source Code'/>
        </div>
        <div className="plnt__project-container_groupB">
          <Project imgUrl='/opera_Jvpi2QiY2K.png' name="Nov 16, 2022" text="This Website" source='Source Code' />
          <Project imgUrl='/i2oR6Xki.png' name="Jul 17, 2021" text="The Coding Society"  source="Not open source" />
        </div>
      </div>
    </div>
    );
  }
  