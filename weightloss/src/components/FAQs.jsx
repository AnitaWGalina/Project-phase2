import React from 'react'
import "./FAQs.css";
const FAQs = () => {
  return (
    <div>
      <div className="faqs">
       
      </div>
      <h1 className="faqs-title">Frequently Asked questions</h1>
      <h3 className="faqs-content">
        1.Who is the program for?
        <h4 className="faqs-answers">
          Anyone that would like to receive guidance on their nutrition
        </h4>
        2.Is payment required to receive assistance?
        <h4 className="faqs-answers">
          No. The information is completely free.
        </h4>
        3.How long will it take to receive the information?
        <h4 className="faqs-answers">
          Immediately after submitting the filled form.
        </h4>
        4.How long will I have access to the curated information
        <h4 className="faqs-answers">
          As long as you need. There is no time limit.
        </h4>
      </h3>
    </div>
  );
}
export default FAQs;