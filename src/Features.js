import React, { forwardRef } from 'react';
import './features.css';
const Features = forwardRef((props, ref) =>{
  return (
    <section ref={ref}>
    <div className="features-container" id="Features">
      <div className="feature-heading">
      <img src='./images/strikeline.png' alt='strikeline' id='strikeline' />
      <h1>
          <span style={{ color: "black" }}>Agape </span>
          <span style={{ color: "#F55DAF" }}>Features</span>
        </h1>
        <p>
          See what makes Agape Garden Play School special with our unique
          features.
        </p>
      </div>
      <div className="feature-cards">
        <div className="row">
          <div className="card">
            <img src="./cards/card1.png" alt="card1"></img>
            <p>Vibrant Play Area</p>
            <div className="card-text">
              <p>
                A colorful and stimulating space for children to safely explore
                and play creatively and joyfully.
              </p>
            </div>
          </div>
          <div className="card">
          <img src="./cards/card2.png" alt="card2"></img>
            <p>Dedicated Caregivers</p>
            <div className="card-text">
              <p>
              Caregivers who nurture children with the care and attention of a family member.
              </p>
            </div>
          </div>
          <div className="card">
          <img src="./cards/card3.png" alt="card3"></img>
            <p>Safe Environment</p>
            <div className="card-text">
              <p>
              A secure setting ensuring your child's safety, with non-toxic toys throughout.
              </p>
            </div>
          </div>
          <div className="card">
          <img src="./cards/card4.png" alt="card4"></img>
            <p>Emphasis On Hygiene</p>
            <div className="card-text">
              <p>
              High standards of cleanliness and hygiene maintained at all times.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card">
          <img src="./cards/card5.png" alt="card5"></img>
            <p>Air Conditioned</p>
            <div className="card-text">
              <p>
              Comfortable, climate-controlled environment for all seasons.
              </p>
            </div>
          </div>
          <div className="card">
          <img src="./cards/card6.png" alt="card6"></img>
            <p>Healthy Snacks</p>
            <div className="card-text">
              <p>
              Nutritious snacks provided to support your child's growth and health.
              </p>
            </div>
          </div>
          <div className="card">
          <img src="./cards/card7.png" alt="card7"></img>
            <p>Transport Available</p>
            <div className="card-text">
              <p>
              Convenient transportation options for easy drop-off and pick-up.
              </p>
            </div>
          </div>
          <div className="card">
          <img src="./cards/card8.png" alt="card8"></img>
            <p>Annual Memory Book</p>
            <div className="card-text">
              <p>
              Yearly compilation of your child's cherished moments and achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
});

export default Features;