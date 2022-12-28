import Heading from '../components/Heading'

const skillsData = [
  {
    title: "JavaScript",
    text: "Javascript is used to create dynamic and interactive web content like applications and browsers."
  },
  {
    title: "NextJS",
    text: "Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites."
  },
  {
    title: "TailwindCSS",
    text: "Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application. Instead, you can use utility classes to control the padding, margin, color, font, shadow, and more of your application."
  },
  {
    title: "Node",
    text: "Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications."
  }
]
export default function Skills() {
    return (
      <div className="plnt__skills section__padding" id='skills'>
        <div className="plnt__skills-heading">
          <h1 className="gradient__text">What am I working with?</h1>
          <div className="p" style={{color: '#FF8A71'}}>These are just a few of the languages and libraries I'm currently working with</div>
        </div>
        <div className="plnt__skills-container">
        {skillsData.map((item, index) => (
        <Heading title={item.title} text={item.text} key={item.title + index} />
      ))}
        </div>
      </div>
    );
  }
  