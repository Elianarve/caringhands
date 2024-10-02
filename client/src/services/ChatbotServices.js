import axios from 'axios';

const API_URL_CHATBOT = 'http://127.0.0.1:8000/ask';

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL_CHATBOT, { question: message });
    return response.data; //la respuesta de la IA esté en este campo???
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};