  import React from "react";
  import { useNavigate } from "react-router-dom";
  import "./Hero.css";

  export default function Hero() {
    const navigate = useNavigate();

    const handleReadMoreClick = () => {
      navigate("/Readmore");
    };

    const handleKnowMoreClick = () => {
      navigate("/About");
    };

    return (
      <div className="main">
        <div className="hero-container">
          <div className="hero-text">
            <div className="star">
              <img src="./images/star.png" alt="star" />
              <p>Welcome to Agape Garden Play School</p>
              
            </div>
            <p id="text1">
              Build A Foundation <br /> For A Lifetime Learning
            </p>
            <button id="hero-bt" onClick={handleKnowMoreClick}>
              <img src="./images/button.png" alt="button" />
            </button>

            <div className="img3">
              <img src="./images/image-three.png" alt="s1" id="img1" />
              <img src="./images/image-two.png" alt="s2" id="img2" />
              <img src="./images/image-one.png" alt="s3" id="img3" />
              <h2>350+</h2>
              <h3>
                Happy and <br /> Engaged kids
              </h3>
            </div>
          </div>
          <div className="hero-images">
            <img src="./images/Picture1.png" alt="img" id="pic1" />
            <img src="./images/Picture2.png" alt="kid1" id="pic2" />
            <img src="./images/Picture3.png" alt="img" id="pic3" />
          </div>
        </div>
        <div className="early-education">
          <div className="early-education-container">
            <div className="early-education-text">
              <p>
                Why Early Education
                <br /> Matters
              </p>
              <div className="blue-box">
                <div className="white-box">
                  <p>The Benefits of Early Education</p>
                  <p id="box-text">
                    High quality early childhood education and care gives children
                    the best start in life. It provides important opportunities to
                    learn and develop. Early childhood education and care can help
                    your child make friends, develop ind...
                  </p>
                  <div className="box-image">
                    <img src="./images/Group.png" alt="box-image" />
                    <button onClick={handleReadMoreClick}>Read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-image2">
              <img src="./images/circle.png" alt="circle" id="circle" />
              <img src="./images/box-image.png" alt="circle" id="boximage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
