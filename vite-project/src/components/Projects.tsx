import Tecniques from './Tecniques';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedTechnique, setSelectedTechnique] = useState('Alla');
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [lockedProjectId, setLockedProjectId] = useState<number | null>(null);

  const filteredProjects =
    selectedTechnique === 'Alla'
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTechnique),
        );

  useEffect(() => {
    const resetCards = () => {
      setHoveredProjectId(null);
      setLockedProjectId(null);
    };

    window.addEventListener('pageshow', resetCards);
    return () => window.removeEventListener('pageshow', resetCards);
  }, []);

  return (
    <>
      <div className="projects">
        <h2 className="myProjectsTitle">MY PROJECTS</h2>
        <p className="projectText">
          Here are some of the projects I have worked on. Each project showcases
          my skills in frontend development and my ability to create responsive
          and user-friendly web applications.
        </p>

        <Tecniques
          selectedTechnique={selectedTechnique}
          onSelectTechnique={setSelectedTechnique}
        />

        {filteredProjects.map((project) => (
          <div
            className={project.layoutClass ?? 'projectCard'}
            key={project.id}
          >
            <div className="projectVisual">
              <a
                className={`projectCardWhite ${hoveredProjectId === project.id || lockedProjectId === project.id ? 'isHovered' : ''}`}
                href={project.url}
                title={project.name}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={(event) => {
                  if (lockedProjectId !== project.id) {
                    event.preventDefault();
                    setLockedProjectId(project.id);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className="projectCardWhiteImage"
                />
                <span className="projectLink">
                  <p className="projectName">{project.name}</p>
                  <p className="projectDescription">
                    {project.description?.trim()}
                  </p>
                  <p className="projectCheckout">{project.checkout}</p>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
