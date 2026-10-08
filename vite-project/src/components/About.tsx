import Header from './Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="aboutConatiner">
        <span className="aboutText">
          <h3>WHO I AM</h3>
          <h4>
            I am a frontend developer with a passion for creating beautiful and
            functional web applications. I have experience working with React,
            TypeScript, and other modern web technologies. I am always eager to
            learn new skills and take on new challenges.
          </h4>
        </span>

        <img src="./public/Motiv2.png" alt="Motiv" className="aboutImage" />
      </div>
    </>
  );
};

export default About;
