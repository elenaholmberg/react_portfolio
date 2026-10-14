import Tecniques from './Tecniques';
import { useState } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const [whiteProjectCards, setWhiteProjectCards] = useState<number[]>(
    projects.map((project) => project.id),
  );

  const toggleProjectCard = (projectId: number) => {
    setWhiteProjectCards((currentCards) =>
      currentCards.includes(projectId) ? (
        currentCards.filter((id) => id !== projectId)
      ) : (
        [...currentCards, projectId]
      ),
    );
  };
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
            <div
              className="projectVisual"
              role="button"
              tabIndex={0}
              aria-label={`Show ${project.name} image`}
              onClick={() => toggleProjectCard(project.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  toggleProjectCard(project.id);
                }
              }}
            >
              {whiteProjectCards.includes(project.id) ? (
                <div className="projectCardWhite">
                  <a href={project.url}>{project.name}</a>
                </div>
              ) : (
                <div className="projectCardImage">
                  <img src={project.image} alt={`${project.name} project`} />
                  <a href={project.url}>{project.name}</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
