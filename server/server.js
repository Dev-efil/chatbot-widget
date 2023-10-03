import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { genarateInitialRespond } from './utils/genarateInitialRespond.utils.js';
import { genaratedMessage } from './utils/genarateRespond.utils.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define the server port
const PORT = process.env.PORT || 5000;

// Start the server
const server = app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Creating a new instance of the Socket.IO server.
const io = new Server(server, {
    cors: {
        origin: '*'
    },
});
// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:3000'
//     },
// });

io.on('connection', async (socket) => {
    console.log('New user connected', socket.id);
    try {
        const conversationCookie = socket.handshake.headers.cookie?.split(';')
            .map((cookie) => cookie.trim())
            .find((cookie) => cookie.startsWith('conversation='));

        // Process the initial message and generate a response only if conversation cookie is not set
        if (!conversationCookie) {
            const initialResponse = await genarateInitialRespond();

            // Emit the initial response to the client
            socket.emit('serverResponse', initialResponse);
        }
        else {
            console.log('here');
        }
    } catch (error) {
        console.error('Error processing initial message:', error);
    }

    // Event handler for receiving user messages
    socket.on('userMessage', async (data) => {
        try {
            // Process the message and generate a response
            const response = await genaratedMessage(data);

            // Send the response back to the client after a delay of 2 seconds
            setTimeout(() => {
                socket.emit('serverResponse', response);
            }, 2000);
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    // Event handler for socket disconnection
    socket.on('disconnect', () => {
        console.log(`Socket disconnected 🔌 : ${socket.id}`);
    });
});