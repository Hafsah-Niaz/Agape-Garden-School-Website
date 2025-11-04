import React, { forwardRef, useState } from 'react';
import './faq.css';
const Faq = forwardRef((props, ref) => {
  const [visibleId, setVisibleId] = useState(null);

 const sentences = [
  {
    id: 1,
    q: "What educational approach does Agape Garden follow?",
    paragraph:
      "At Agape Garden, we follow a structured and child-centered curriculum designed to foster holistic development.\n\nPlaygroup & Pre-KG: Montessori Method\nLKG & UKG: CBSE Curriculum"
  },
  {
    id: 2,
    q: "What age group does Agape Garden cater to?",
    paragraph:
      "Agape Garden offers programs for children between 2 to 6 years, categorized as follows:\n\nPlaygroup: 2 – 3 years\nPre-KG: 3 – 4 years\nLKG: 4 – 5 years\nUKG: 5 – 6 years"
  },
  {
    id: 3,
    q: "How are teachers selected and trained at Agape Garden?",
    paragraph:
      "Our teachers are carefully selected based on their Montessori qualifications and passion for early childhood education.\nThey undergo regular training to ensure high-quality, nurturing, and engaging learning experiences for every child."
  },
  {
    id: 4,
    q: "What sets Agape Garden apart from other preschools?",
    paragraph:
      "At Agape Garden, we emphasize practical learning that helps children develop real-world understanding and essential life skills, preparing them for future academic success."
  }
];

  const toggleParagraph = (id) => {
    setVisibleId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className='bg-faq'>
        <img src='./images/tower-icon.png' alt='tower' id='tower' />
        <img src='./images/puzzle-icon.png' alt='puzzle' id='puzzle' />
        <img src='./images/curvyline.png' alt='curvyline' id='curvyline' />
          <div className="faq-heading">
            <h1 style={{paddingBottom:"50px"}}>
              <span className="black-text">Frequently Asked </span>
              <span className="pink-text" style={{color:"#F55DAF"}}>Questions</span>
            </h1>
          </div>
          <div ref={ref} className="faq-container">
          <div className="faq-content">
            {sentences.map(({ id, q, paragraph }) => (
              <div key={id} className="faq-item">
                <div className="faq-question-container">
                  <p className="faq-question" style={{textAlign:"left"}}>{q}</p>
                  <button onClick={() => toggleParagraph(id)} className="transparent-button">
                    {visibleId === id ? (
                      <img src="./images/minus.png" alt="minus" />
                    ) : (
                      <img src="./images/plus.png" alt="plus" />
                    )}
                  </button>
                </div>
                {visibleId === id && <p style={{color:"#F55DAF"}}> {paragraph}</p>}
                <div className="faq-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src='./images/light-pink.png' alt='waves' style={{width:"100%"}} />
    </div>
  );
});

export default Faq;
