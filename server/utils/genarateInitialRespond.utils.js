// import router from '../config/routeConfig.js';

export const genarateInitialRespond = async () => {
    // const _getInitialMessagePath = '/api/v1/getinitialmessage/';
    try {
        // const response = await router.get(_getInitialMessagePath, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-Secure-Token': process.env.SECURE_X
        //     },
        //     withCredentials: true
        // });
        // return response.data.result;
        return `Yo! What's up?`;
    } catch (error) {
        console.error('Error processing initial message:', error);
        throw error;
    }
}