import React, { useEffect } from "react";
import './readmore.css';

const Readmore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="title">
        <h2 className="title">
  The Importance of Early Childhood <span className="pink-underline">Education</span>
</h2>
      </div>
      <div className="background">
      <div className="title-text1">
      <div className="title-image">
        <img src="./images/title.png" alt="title" id="title"></img>
      </div>
      <div className="curved-box">
        <p>🎓 Early childhood education is a vital part of every child’s development, shaping them into successful, socially competent individuals. From infancy through pre-kindergarten, children gain essential skills through play-based learning, helping them grow socially, emotionally, and cognitively. Activities such as counting, matching, and dramatic play not only enhance literacy and numeracy but also promote creativity, social behavior, and problem-solving abilities. A nurturing environment with positive interactions builds trust, confidence, and effective communication in young learners.</p>

<p>🤝 Early education also helps children develop values like respect, empathy, and cooperation. Exposure to diverse cultures, beliefs, and lifestyles broadens their worldview, encouraging acceptance and critical thinking. These experiences contribute to their emotional maturity and help form healthy peer relationships.</p>

<p>🌱 The impact of early childhood education goes beyond academics — it lays the foundation for lifelong success. Children develop essential life skills, motor abilities, and mental resilience, preparing them not just for school, but for meaningful participation in society.</p>

<p>🚀 Investing in early childhood education is a strategic move toward a better future. By nurturing young minds during this crucial phase, we foster a generation of confident, curious, and capable individuals. These are the minds that will shape tomorrow — in classrooms today and in the world tomorrow.</p>
 </div>
 </div></div>
          </div>
  );
};

export default Readmore;