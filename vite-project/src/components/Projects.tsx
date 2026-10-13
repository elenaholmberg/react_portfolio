import Tecniques from './Tecniques';
import { projects } from '../data/projects';

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

        {projects.map((project) => (
          <div
            className={project.layoutClass ?? 'projectCard'}
            key={project.id}
          >
            <img src={project.image} alt={`${project.name} preview`} />
            <a href={project.url}>{project.name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
