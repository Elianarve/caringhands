import React, { useState } from 'react';
import { sendMessage } from '../../services/ChatbotServices';
import ChatIcon from '../../assets/images/ChatBotIcon.svg';
import './Chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message };
    setMessages([...messages, userMessage]);

    try {
      const botResponse = await sendMessage(message);
      const botMessage = { sender: 'bot', text: botResponse };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error enviando el mensaje:', error);
      const errorMessage = { sender: 'bot', text: 'Hubo un error al procesar la solicitud.' };
      setMessages([...messages, userMessage, errorMessage]);
    }

    setMessage('');
  };

  return (
    <div>
      <div className="chat-icon-button" onClick={() => setIsOpen(!isOpen)}>
      <img src={ChatIcon} alt="Chatbot"className="chat-icon" />
      </div>
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-modal-content">
            <span className="close-button" onClick={() => setIsOpen(false)}>&times;</span>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu pregunta..."
              />
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;