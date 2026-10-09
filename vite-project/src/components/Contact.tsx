import Header from './Header';

const Contact = () => {
  return (
    <>
      <Header />

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
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
