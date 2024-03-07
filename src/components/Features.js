import React from 'react';
import chatIcon from './icon-chat.png';
import moneyIcon from './icon-money.png';
import securityIcon from './icon-security.png';
import "./main.css"; // Importez votre fichier main.css en utilisant un chemin relatif

const Features = () => {
  return (
    <section className="features">
      <div className="feature-item">
        <img src={chatIcon} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className="feature-item">
        <img src={moneyIcon} alt="Money Icon" className="feature-icon" />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>
          The more you save with us, the higher your interest rate will be!
        </p>
      </div>
      <div className="feature-item">
        <img src={securityIcon} alt="Security Icon" className="feature-icon" />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money
          is always safe.
        </p>
      </div>
    </section>
  );
};

export default Features;

