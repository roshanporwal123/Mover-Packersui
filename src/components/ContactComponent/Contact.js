import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>

      <p>
        Have questions about our services or need a quote? Reach out to us and
        our team will assist you promptly.
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> Moving@company.com</p>
        <p><strong>Phone:</strong> +91 90000 00000</p>
        <p><strong>Service Area:</strong> All Over India</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Mobile Number" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
