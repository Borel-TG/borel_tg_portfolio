"use client";
import React from "react";
import Button from "../Button/Button";

function ContactForm() {
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    // const email = form.get("email");
    const email = "tchassemborel@gmail.com";
    const message = form.get("message");

    const newErrors = {};

    // Validation
    if (!name) newErrors.name = "Please fill in your name";
    // if (!email) newErrors.email = "Please fill in your email";
    if (!message) newErrors.message = "Please fill in your message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully!");

      // Create the mailto link
      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\nFrom: ${name}\nEmail: ${email}`
      );
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

      // Open the user's email client with the pre-filled information
      window.location.href = mailtoLink;
    }
  };

  return (
    <form
      id="form"
      name="contactForm"
      className="flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row mb-3">
        {/* <div className={"ms-0 md:me-3"}>
          <input
            className={`input-style ${errors.email ? "border-red-900" : ""}`}
            name="email"
            type="email"
            autoComplete="off"
            placeholder="your@email.com"
            aria-describedby="emailError"
          />
          {errors.email && (
            <span id="emailError" className="text-sm text-red-900 mt-1">
              {errors.email}
            </span>
          )}
        </div> */}

        <div>
          <input
            className={`input-style  ${errors.name ? "border-red-900" : ""}`}
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Your Name"
            aria-describedby="nameError"
          />
          {errors.name && (
            <span id="nameError" className="text-sm text-red-900 mt-1">
              {errors.name}
            </span>
          )}
        </div>
      </div>

      <div>
        <textarea
          className={`input-style ${errors.message ? "border-red-900" : ""}`}
          name="message"
          autoComplete="off"
          placeholder="Your message ..."
          aria-describedby="messageError"
        />
        {errors.message && (
          <span id="messageError" className="text-sm text-red-900 mt-1">
            {errors.message}
          </span>
        )}
      </div>

      <Button
        className="w-fit"
        label="Send Message"
        type="submit"
        cssClass="mt-5 border border-black/10 w-fit"
      />
    </form>
  );
}

export default ContactForm;
