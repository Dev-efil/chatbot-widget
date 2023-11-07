import React, { useState, useEffect, useRef } from 'react';
import { chatSocket } from '../../api/base';
import { useCookies } from 'react-cookie';
import ChatComponent from '../../components/chatbot';
import { motion } from "framer-motion";
import logo from '../../assets/image/logo';

function ChatbotPage() {
    const [cookies, setCookie] = useCookies(['conversation']);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [message, setMessage] = useState(cookies.conversation || []);
    const [newMessageCount, setNewMessageCount] = useState(0); // New state variable for message count
    const chatBoxRef = useRef(null);


    useEffect(() => {
        if (!cookies.conversation) {
            chatSocket.on('serverResponse', (response) => {
                const updatedMessage = [...message, { sender: 'server', text: response }];
                setMessage(updatedMessage);
                console.log('updated message', typeof updatedMessage);
                setNewMessageCount((prevCount) => prevCount + 1); // Increment new message count
                setCookie('conversation', updatedMessage, { path: '/' });
            });
        }
    }, [message, setCookie, cookies.conversation,]);

    // Function to toggle the popup
    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
        setNewMessageCount(0); // Reset new message count when popup is opened
    };

    return (
        <div className="chatbot">
            <motion.div className={`chatbot-wrapper-logo ${newMessageCount > 0 && !isPopupOpen ? 'chatbot-new-message' : ''}`} onClick={togglePopup} whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
                {newMessageCount > 0 && !isPopupOpen && <div className="chatbot-new-badge">{newMessageCount}</div>}
                <img className="chatbot-logo" src={`data:image/svg+xml,${encodeURIComponent(logo)}`} alt="" />
            </motion.div>
            {isPopupOpen && <ChatComponent cookies={cookies} setCookie={setCookie} chatBoxRef={chatBoxRef} logo={logo} />}
        </div>
    );
}

export default ChatbotPage;
