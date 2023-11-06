import axios from 'axios';
import io from 'socket.io-client';
 
export default axios.create({
    baseURL: 'http://localhost:3500/api/v1/',
    headers: { 'Content-Type': 'application/json' },
    // withCredentials: true
});

// server url
export const chatSocket = io.connect('https://chatbot.host.com');