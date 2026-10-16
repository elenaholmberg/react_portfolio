import { useState } from 'react';

const circles = [
  {
    text: 'Problem solving',
    size: 120,
    top: '20%',
    left: '15%',
    duration: 12,
    delay: 0,
  },
  {
    text: 'Creative',
    size: 150,
    top: '50%',
    left: '70%',
    duration: 16,
    delay: -4,
  },
  {
    text: 'Teamwork',
    size: 120,
    top: '65%',
    left: '20%',
    duration: 10,
    delay: -2,
  },
  {
    text: 'Communication',
    size: 180,
    top: '25%',
    left: '75%',
    duration: 14,
    delay: -7,
  },
  {
    text: 'Time management',
    size: 150,
    top: '40%',
    left: '30%',
    duration: 18,
    delay: -3,
  },
  {
    text: 'Leadership',
    size: 140,
    top: '60%',
    left: '50%',
    duration: 15,
    delay: -5,
  },
  {
    text: 'Adaptability',
    size: 160,
    top: '22%',
    left: '50%',
    duration: 20,
    delay: -10,
  },
];

const FloatingCircles = () => {
  const [selectedCircles, setSelectedCircles] = useState<string[]>([]);

  const toggleCircle = (text: string) => {
    setSelectedCircles((current) =>
      current.includes(text)
        ? current.filter((circle) => circle !== text)
        : [...current, text],
    );
  };

  return (
    <div
      className={`circleContainer ${selectedCircles.length >= 4 ? 'messageVisible' : ''}`}
    >
      {circles.map((circle) => (
        <div
          key={circle.text}
          className={`circle ${selectedCircles.includes(circle.text) ? 'selected' : ''}`}
          onClick={() => toggleCircle(circle.text)}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            animationDuration: `${circle.duration}s`,
            animationDelay: `${circle.delay}s`,
          }}
        >
          {circle.text}
        </div>
      ))}
      {selectedCircles.length >= 4 && (
        <div className="circleMessage" role="status">
          <p className="messageText">
            Great choices! <br></br>You found your perfect match! <br /> Now,
            let's get in touch before someone else does!
          </p>

          <a
            href="#contact"
            className="contactSymbol"
            aria-label="Go to contact section"
            title="Go to contact section"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              chat
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingCircles;
