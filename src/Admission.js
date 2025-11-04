import React, { useState, forwardRef } from "react";
import "./admission.css";

const Admission = forwardRef((props, ref) => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pin: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "YOUR_ACCESS_KEY"); // your Web3Forms key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("pin", formData.pin);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Enquiry sent successfully!");
        setFormData({ name: "", email: "", phone: "", pin: "" });
      } else {
        setResult("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      setResult("Error occurred while sending enquiry.");
    }
  };

  return (
    <div className="admission-main" ref={ref}>
      <div className="admin-heading" id="admin-heading">
        <h1>
          <span style={{ color: "black" }}>Admission </span>
          <span style={{ color: "#F55DAF" }}>Enquiry</span>
        </h1>
      </div>
      <div className="adm-strike">
        <img src="./images/strike.png" alt="strike" id="adm-strike" />
      </div>

      <div className="admission-content">
        <div className="adm-details">
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>Complete and submit the inquiry form with your details.</p>
          </div>
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>We will assist you in scheduling a visit to Agape Garden Play School.</p>
          </div>
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>Explore our campus and connect with our educators.</p>
          </div>
          <div className="adm-text">
            <img src="./images/arrow.png" alt="" />
            <p>Enroll your child and become a part of our nurturing community.</p>
          </div>
        </div>

        <div className="adm-cred">
          <h4>Enquire Now</h4>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                required
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Pin Code"
                required
                id="pin"
                value={formData.pin}
                onChange={handleChange}
              />
            </div>
            <button type="submit" id="submit">Submit</button>
          </form>

          {result && <p className="form-result">{result}</p>}
        </div>
      </div>
    </div>
  );
});

export default Admission;
