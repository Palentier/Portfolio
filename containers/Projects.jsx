
import Project from '../components/Project';
import { profile, portfolio } from '../imports/assets/others/index';


export default function Projects() {
    return (
      <div className="plnt__project section__padding" id="blog">
      <div className="plnt__project-heading">
        <h1 className="gradient__text">I don&apos;t work on much,<br /> But here&apos;s what I got.</h1>
      </div>
      <div className="plnt__project-container">
        <div className="plnt__project-container_groupA">
          <Project imgUrl={profile} name="Nov 18, 2022" text="Profile Card Template" />
        </div>
        <div className="plnt__project-container_groupB">
          <Project imgUrl={portfolio} name="Nov 16, 2022" text="This Website" />
          <Project imgUrl={portfolio} name="Jul 17, 2021" text="The Coding Society" />
        </div>
      </div>
    </div>
    );
  }
  