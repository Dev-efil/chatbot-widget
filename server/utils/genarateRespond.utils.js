import router from '../config/routeConfig.js';

// Function to process the incoming message and generate a response
export const genaratedMessage = async (data) => {
    const _getAnswerPath = '/api/v1/getanswer/';
    const requestData = {
        /**
         * this client_reference token provided by the product(Us) to the customers(Our), 
         * by this token we can track which customer's user is requesting the answer.
         */
        client_referance: data.accountKey,
        customer_query: data.userInput
    };
    try {
        // Call the API to get the response based on the customer's query
        const response = await router.post(_getAnswerPath, requestData, {
            headers: {
                'Content-Type': 'application/json',
                'X-Secure-Token': process.env.SECURE_X
            },
            withCredentials: true
        });
        return response.data.result;
    } catch (error) {
        console.error('Error processing message:', error);
        throw error;
    }
}