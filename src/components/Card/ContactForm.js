import React, { useState } from "react";

const FORM_ENDPOINT = "mailto:dillanthomas88@gmail.com"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl text-center">Thank you!</div>
        <div className="text-md text-center">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0 grid content-center justify-center">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  transition hover:scale-110"
          type="submit"
        >
          Send an Email
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
