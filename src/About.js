import './About.css';
export default function About() {
  return (
    <div>
      <div className="About">
        <div className="about-container">
          <div className="about-text">
             <div className="about-image">
            <img src="./images/poly1.png" alt="img"></img>
          </div>
           <h1 className="about-heading"> About <span className="pink-underline">Us</span></h1>
           <div className="about-text-box">
  <p className="about-text">
    🎓 Discover Agape Garden, where we celebrate eight years of nurturing
    young minds through God's grace. Our preschool program is meticulously
    crafted with a deep understanding of the extraordinary brain development
    that occurs in a child's first six years.
  </p>
  <p className="about-text">
    🌱 At Agape Garden, we embark on a journey of lifelong learning with
    your child, laying a robust foundation for academic and social growth.
    Our focus is on fostering independent learning, creative thinking, and
    effective communication skills to prepare children for success in
    tomorrow's world.
  </p>
  <p className="about-text">
    🏫 Our school features thoughtfully designed classrooms and play areas
    that serve as dynamic learning environments. Each space is tailored to
    cater to the unique needs, abilities, and developmental stages of every
    child. We prioritize a clean, comfortable atmosphere where children thrive.
  </p>
</div>

          </div>
        </div>
      </div>
      <img src="./images/curve.png" alt="curve" style={{width:"100%"}}></img>
      <div className="about-container2">
        <div className="mission">
          <div className="mission-container">
            <div className="mission-image">
              <img src="./motion/blue.png" alt="img"></img>
            </div>
            <div className="mission-text">
              <h3>Mission</h3>
              <p>
                Our mission is to nurture an Agape (Unconditional) love of
                learning in children through play. We strive to foster a
                commitment to exploration, embrace and value differences, and
                support academic growth within our cooperative family of
                families.
              </p>
            </div>
          </div>
          <img src="./motion/line.png" alt="img" id="line"></img>
        </div>
        <div className="vision">
          <img src="./motion/green-star.png" alt="img" id="green-star"></img>
          <div className="vision-container">
            <div className="vision-text">
              <h3>Vision</h3>
              <p>
                Our vision is to be the leading play school, preparing today’s
                children to become tomorrow’s innovators and leaders. We achieve
                this by utilizing engaging hands-on activities and play-based
                learning.
              </p>
            </div>
            <div className="vision-image">
              <img src="./motion/green1.png" alt="img"></img>
            </div>
          </div>
        </div>
        <div className="award">
          <div className="award-container">
            <div className="award-image">
              <img src="./motion/blue.png" alt="img"></img>
            </div>
            <div className="award-text">
              <h3>Award</h3>
              <p>
                We are proud to have received recognition for our commitment to
                excellence in early childhood education, including awards for
                innovation in play-based learning and community impact.
              </p>
            </div>
          </div>
          <img src="./motion/pink-star.png" alt="img" id="pink-star"></img>
        </div>
      </div>
    </div>
  );
}