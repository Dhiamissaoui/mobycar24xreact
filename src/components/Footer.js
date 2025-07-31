import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>MOBYCAR24</h2>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur. Adipiscing Morbi Tellus Arcu Sed Morbi. Nihil Amet<br />
            Dignissim in Ac Duis Eliam Consectetur Dolor Utilities.
          </p>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <h3 className="x">Brand</h3>
            <h3>Rent A Car</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Condition</h3>
            <h3>FAQs</h3>
            <h3>Contact Us</h3>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Mobycar24. All rights reserved.</p>
          <p>Website Design by Wedaktines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;