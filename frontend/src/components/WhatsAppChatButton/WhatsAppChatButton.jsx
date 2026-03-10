import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppChatButton.module.css';

const WhatsAppChatButton = () => {
  const phoneNumber = '233596905337';
  const message = 'Hi, TechTen, I have a question';
  const chatLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className={styles.whatsAppButton}
      href={chatLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TechTen on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppChatButton;
