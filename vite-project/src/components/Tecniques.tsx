type TechniquesProps = {
  selectedTechnique: string;
  onSelectTechnique: (technique: string) => void;
};

const techniques = ['Alla', 'Canva', 'React', 'Node.js', 'Figma', 'TypeScript', 'MySQL', 'JavaScript'];

const Tecniques = ({
  selectedTechnique,
  onSelectTechnique,
}: TechniquesProps) => {
  return (
    <div>
      <h4 className="filterTitle">FILTER AFTER PROJECTS</h4>
      <div className="tecnicalSkills">
        {techniques.map((technique) => (
          <button
            className={selectedTechnique === technique ? 'active' : ''}
            key={technique}
            type="button"
            onClick={() => onSelectTechnique(technique)}
          >
            {technique}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tecniques;
