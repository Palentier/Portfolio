import Heading from '../components/Heading'
export default function About() {
    return (
      <div className=" plnt__about section__margin"  id="about">
      <div className=" plnt__about-heading">
        <Heading title="Who am I?" text="Hello, as stated before I&apos;m Palentier, Chase for short. I&apos;m a front-end developer based in the United States. Some things I enjoy doing is web developing, designing, and helping others. I also enjoy designing things utilizing Node.js, modern Javascript libraries, and 
frameworks such as React.js and Next.js wherever feasible. " />
      </div>
      <div className=" plnt__about-heading">
        <h1 className="gradient__text">Get to know a little bit more about me.</h1>
        <p>Let&apos;s Connect</p>
      </div>
      <div className=" plnt__about-container">
        <Heading title="My Mission" text="As a self-taught developer, I strive to create each website with love and care, while also making them accessible for all mobile devices and visually appealing." />
        <Heading title="Knowledgebase" text="I am a self-taught developer with extensive experience in a variety of languages, frameworks, and additional tools such as Figma and Git." />
        <Heading title="Education" text="I am currently in 11th grade, I plan on early graduating and going to college for Computer Science and Business" />
      </div>
    </div>
    );
  }
  