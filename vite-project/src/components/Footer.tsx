const Footer = () => {
  return (
    <div className="contactInfo">
      <ul className="ulLeft">
        <li>Phone: +46 70 123 45 67</li>
        <li>Email: example@example.com</li>
      </ul>
      <ul className="ulRight">
        <li>
          Github:{' '}
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/example
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/example
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
