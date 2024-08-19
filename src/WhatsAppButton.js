import React from 'react';
import whatsappImage from './assets/images/WhatsAppButtonGreenLarge.png'; // Adjust the path accordingly
import './WhatsAppButton.css'; // Ensure the correct path to your CSS file

function WhatsAppButton() {
  return (
    <div className="whatsapp-button-container">
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/9942531150?text=Hello%20there!"
      >
        <img
          alt="Chat on WhatsApp"
          src={whatsappImage}
          className="responsive-img"
        />
      </a>
    </div>
  );
}

export default WhatsAppButton;
