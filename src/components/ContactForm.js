import React from "react";

const ContactForm = () => {
  const [submit, setSubmit] = useState(false);

  return (
    <article>
      <form className="form contact-form">
        <div className="form-row">
          <label htmlFor="name">your name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email">your email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-row">
          <label htmlFor="message">message</label>
          <textarea name="message" id="message" />
        </div>
        {submit && <p>Your message has been submitted</p>}
        <button
          type="submit"
          className="btn block"
          onClick={() => setSubmit(!submit)}
        >
          submit
        </button>
      </form>
    </article>
  );
};
export default ContactForm;
