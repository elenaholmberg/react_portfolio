import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <div className="contactFlexer">
        <div className="leftContactColumn">
          <h2>LET'S CHAT</h2>
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
        <Footer />
      </div>
    </>
  );
};

export default Contact;
