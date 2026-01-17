import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const confirmationMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Feedback: ${formData.feedback}
            Rating: ${formData.rating}
        `;
    const isConfirmed = window.confirm(
      `Please confirm your details: \n\n ${confirmationMessage}`
    );
    if (isConfirmed) {
      console.log("Submitting feedback", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: "",
      });
      alert("Thank your for your valueable feedback!");
    }
  };

  const renderRadioGroup = () => {
    const radioGroup = [];
    for (let index = 1; index <= 5; index++) {
      const radioId = "radio" + index;
      radioGroup.push(
        <div>
          <input
            id={radioId}
            type="radio"
            value={index}
            onChange={handleChange}
            name="rating"
          />
          <label for={radioId}>{index}</label>
        </div>
      );
    }

    return radioGroup;
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>

        <fieldset>
          <legend>Rate us:</legend>

          {renderRadioGroup()}
        </fieldset>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
