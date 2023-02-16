import React from "react";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/infomationcontentner.sass'

const InformationContentner = () => {
  return (
    <section id="infomation">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div className="info-box-message">
          <h3>Telephone</h3>
          <p>0925976205</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div className="info-box-message">
          <h3>E-mail</h3>
          <p>nathachai13011997@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon"/>
        <div className="info-box-message">
          <h3>Location</h3>
          <p>Khlong Toei</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContentner;
