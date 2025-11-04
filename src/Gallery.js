  import React, { forwardRef } from 'react';
// Import useNavigate
  import './gallery.css';
  const Gallery = forwardRef((props, ref) => {
  // Initialize useNavigate


    return (
      <section ref={ref} id="gallery">
        <div className="gallery-section">
          <div className="gallery-container">
            <div className="gal-heading">
              <h1>
                <span style={{ color: "black" }}>Our </span>
                <span style={{ color: "#F55DAF" }}>Gallery</span>
              </h1>
              <img src="./Gallery/gal-line.png" alt="" id="gal-line" />
            </div>
            <div className="gallery-images">
              <div className="column-1">
                <img src="./Gallery/Rectangle 68.png" alt="" id="68" />
                <img src="./Gallery/Rectangle 72.png" alt="" id="72"/>
                <img src="./Gallery/Rectangle 76.png" alt="" id="76"/>
              </div>
              <div className="column-2">
                <img src="./Gallery/Rectangle 69.png" alt="" id="69"/>
                <img src="./Gallery/Rectangle 73.png" alt="" id="73"/>
                <img src="./Gallery/Rectangle 75.png" alt="" id="75"/>
              </div>
              <div className="column-3"> 
                <img src="./Gallery/Rectangle 70.png" alt="" id="70" />
                <img src="./Gallery/Rectangle 71.png" alt="" id="71"/>
                <img src="./Gallery/Rectangle 74.png" alt="" id="74"/>
              </div>
            </div>
           
          </div> 
        </div>
      </section>
    );
  });

  export default Gallery;
