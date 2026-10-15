import Tecniques from './Tecniques';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedTechnique, setSelectedTechnique] = useState('Alla');
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const filteredProjects =
    selectedTechnique === 'Alla'
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTechnique),
        );

  useEffect(() => {
    const resetCards = () => setHoveredProjectId(null);

    window.addEventListener('pageshow', resetCards);
    return () => window.removeEventListener('pageshow', resetCards);
  }, []);

  return (
    <>
      <Tecniques
        selectedTechnique={selectedTechnique}
        onSelectTechnique={setSelectedTechnique}
      />
      <div className="projects">
        <h2>MY PROJECTS</h2>
        <p className="projectText">
          Here are some of the projects I have worked on. Each project showcases
          my skills in frontend development and my ability to create responsive
          and user-friendly web applications.
        </p>

        {filteredProjects.map((project) => (
          <div
            className={project.layoutClass ?? 'projectCard'}
            key={project.id}
          >
            <div className="projectVisual">
              <a
                className={`projectCardWhite ${hoveredProjectId === project.id ? 'isHovered' : ''}`}
                href={project.url}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  className="projectCardWhiteImage"
                />
                <span className="projectLink">
                  {project.name
                    .trim()
                    .split(/\s+/)
                    .map((word, index) => (
                      <span key={`${word}-${index}`}>{word}</span>
                    ))}
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
