import Tecniques from './Tecniques';

const Projects = () => {
  return (
    <>
      <Tecniques />
      <div className="projects">
        <h3>MY PROJECTS</h3>
        <p className="projectText">
          Here are some of the projects I have worked on. Each project showcases
          my skills in frontend development and my ability to create responsive
          and user-friendly web applications.
        </p>

        <div className="projectCard">
          <img src="./IKEA.jpg" alt="" />
          <a href="https://example.cohttps://elenaholmberg.github.io/IKEA-escaperoom/m">
            Project 8
          </a>
        </div>
        <div className="projectCard">
          <img src="./Juniper.jpg" alt="" />
          <a href="https://medieinstitutet.github.io/fed25d-grafiska-verktyg-vector-graphics/">
            Project 9
          </a>
        </div>
        <div className="projectCard">
          <img src="./public/Calippo.jpg" alt="" />
          <a href="https://example.com">Project 10</a>
        </div>

        <div className="projectCardRow2">
          <img src="./zara.jpg" alt="" />
          <a href="https://example.comhttps://www.figma.com/design/KFIQf0mL3rUkseyearcPuu/TEAM-The-A-B-Testers?node-id=54620-75&p=f&t=m7IsLgye82wqSbnN-0">
            Project 4
          </a>
        </div>
        <div className="projectCard">
          <img src="./svg.jpg" alt="" />
          <a href="https://medieinstitutet.github.io/fed25d-grafiska-verktyg-individuell-elenaholmberg/">
            Project 5
          </a>
        </div>

        <div className="projectCard">
          <img src="./CINK_003.jpg" alt="" />
          <a href="https://example.com">Project 7</a>
        </div>
      </div>
    </>
  );
};

export default Projects;
