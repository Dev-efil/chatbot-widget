import { useState, useEffect } from 'react';
import { chatSocket } from '../api/base';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/image/logo';
import plane from '../assets/image/paper-plan';

function Chatbot(props) {
    const chatAccountKey = window.chatAccountKey;
    const { cookies, setCookie, chatBoxRef } = props;
    const [message, setMessage] = useState(cookies.conversation || []);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        chatSocket.on('serverResponse', (response) => {
            const updatedMessage = [...message, { sender: 'server', text: response }];
            setMessage(updatedMessage);
        });
    }, [message]);

    useEffect(() => {
        setCookie('conversation', message, { path: '/' });
    }, [message, setCookie]);

    useEffect(() => {
        if (chatBoxRef) {
            chatBoxRef.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [chatBoxRef])

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [message, chatBoxRef]);

    const handleMessage = () => {
        if (userInput.trim() !== '') {
            const data = { chatAccountKey, userInput }
            chatSocket.emit('userMessage', data);
            const updatedMessage = [...message, { sender: 'user', text: userInput }];
            setMessage(updatedMessage);
            setCookie('conversation', updatedMessage, { path: '/' });
            setUserInput('');
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleMessage();
        }
    };
    return (
        <motion.div className="chatbot-wrapper-chat" initial={{ scale: .5 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
            <div className="chatbot-header">
                <img className="chatbot-header-logo" src={`data:image/svg+xml,${encodeURIComponent(logo)}`} alt="" />
                <h4 className="chatbot-header-title">chatbot</h4>
            </div>
            <div className="chatbot-chat" id="chat-box" ref={chatBoxRef}>
                <AnimatePresence initial={false}>
                    {
                        message.map((response, index) => (
                            <motion.div key={index} className={`chatbot-bubble ${response.sender === 'user' ? 'sender' : 'receiver'}`} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.15 } }}>
                                <p className="chatbot-username">{response.sender === 'user' ? 'You' : 'chatbot'}</p>
                                <p className="chatbot-message">{response.text}</p>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
            <div className="chatbot-footer">
                <input type="text" className="chatbot-input" placeholder="Type your message here" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={handleKeyPress} />
                <div className="chatbot-button" onClick={handleMessage}>
                    <img className="chatbot-button-icon" src={`data:image/svg+xml,${encodeURIComponent(plane)}`} alt="" />
                </div>
                <p className="chatbot-footer-text">Developed by <span>&nbsp;Thanushkanth</span></p>
            </div>
        </motion.div>
    )
}

export default Chatbot;