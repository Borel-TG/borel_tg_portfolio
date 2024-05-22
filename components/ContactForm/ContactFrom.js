"use client";
import React from "react";
import Button from "../Button/Button";

function ContactFrom() {
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    if (form.get("name") && form.get("email") && form.get("message")) {
      setErrors([]);
    } else {
      let err = [];
      if (!form.get("name")) err.push("name");
      if (!form.get("email")) err.push("email");
      if (!form.get("message")) err.push("message");
      setErrors([...errors, ...err]);
      console.log("errors");
    }
  };

  return (
    <form
      id="form"
      name="contactForm"
      className="flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row">
        <div>
          <input
            className="input-style"
            name="email"
            type="email"
            autoComplete="false"
            placeholder="your@email.com"
          />
          {errors.find((x) => x == "email") && (
            <span className="text-sm relative -top-4 text-red-900">
              Please fill in your email
            </span>
          )}
          {console.log("er::::", errors["name"])}
        </div>

        <div>
          <input
            className="input-style ms-0 md:ms-3"
            name="name"
            type="text"
            autoComplete="false"
            placeholder="Your Name"
          />
          {errors.find((x) => x == "name") && (
            <span className="text-sm relative -top-4 text-red-900">
              Please fill in your name
            </span>
          )}
        </div>
      </div>

      <div>
        <textarea
          className="input-style "
          name="message"
          autoComplete="false"
          placeholder="Your message ..."
        />
        {errors.find((x) => x == "message") && (
          <span className="text-sm relative -top-5 text-red-900">
            Please fill in your message
          </span>
        )}
      </div>

      <Button
        className="w-fit "
        label="Send Message"
        type="submit"
        cssClass="mt-5 border border-black/10 w-fit"
      />
    </form>
  );

  // );
}

export default ContactFrom;
