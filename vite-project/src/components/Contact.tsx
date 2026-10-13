

const Contact = () => {
  return (
    <>
      <div className="contactFlexer">
        <div className="leftContactColumn">
          <h3>LET'S CHAT</h3>
          <img src="/Motiv3.png" alt="contact image" />
        </div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea
            className="message"
            id="message"
            name="message"
            required
          ></textarea>
          <label className="checkboxLabel" htmlFor="subscribe">
            <input
              className="checkbox"
              type="checkbox"
              id="subscribe"
              name="subscribe"
            />
            check this box to recieve my CV in your inbox
          </label>
          <button className="submitButton" type="submit">
            Send
          </button>
        </form>

        <ul className="contactInfo">
          <li>Phone: +46 70 123 45 67</li>
          <li>Email: example@example.com</li>
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
    </>
  );
};

export default Contact;
