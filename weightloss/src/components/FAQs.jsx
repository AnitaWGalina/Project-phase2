import React from "react";
import "./FAQs.css";

const FAQs = () => {
  return (
    <div className="background-image">
      <h1 className="faqs-title">Frequently Asked questions</h1>
      <h2 className="faqs-content">
        1.Who is the program for?
        <p className="faqs-answers">
          Anyone that would like to receive guidance on their nutrition
        </p>
        2.Is payment required to receive assistance?
        <p className="faqs-answers">No. The information is completely free.</p>
        3.How long will it take to receive the information?
        <p className="faqs-answers">
          Immediately after submitting the filled form.
        </p>
        4.How long will I have access to the curated information
        <p className="faqs-answers">
          As long as you need. There is no time limit.
        </p>
      </h2>
    </div>
  );
};
export default FAQs;
