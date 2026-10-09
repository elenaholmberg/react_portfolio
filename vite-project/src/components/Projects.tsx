const Projects = () => {
  return (
    <div className="projects">
      <span className="projectCard">
        {' '}
        <a href="https://example.com">Project 1</a>
      </span>
      <span className="projectCard">
        {' '}
        <a href="https://example.com">Project 2</a>
      </span>
      <span className="projectCard">
        {' '}
        <a href="https://example.com">Project 3</a>
      </span>
      <div className="textContainer"></div>
      <h3>MY PROJECTS</h3>
      <p className="projectText">
        Here are some of the projects I have worked on. Each project showcases
        my skills in frontend development and my ability to create responsive
        and user-friendly web applications.
      </p>

      <div className="projectCard">
        {' '}
        <a href="https://example.com">Project 4</a>
      </div>
      <div className="projectCard">
        {' '}
        <a href="https://example.com">Project 5</a>
      </div>
      <div className="projectCard">
        {' '}
        <a href="https://example.com">Project 6</a>
      </div>
    </div>
  );
};

export default Projects;
