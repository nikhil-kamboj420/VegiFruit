function Contact() {
  return (
  <div className="page contact">
      <h1>Contact Us</h1>

      <p>Email: support@travelworld.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: New Delhi, India</p>

      <h2>Send us a message</h2>

      <form>
        <input type="text" placeholder="Your Name" /><br /><br />
        <input type="email" placeholder="Your Email" /><br /><br />
        <textarea placeholder="Your Message"></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
    );
}
export default Contact;