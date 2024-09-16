require('dotenv').config(); // load env file

const axios = require('axios');

export const sendMessageToThread = async (messageText) => {
    const threadId = process.env.THREAD_ID;
    const accessToken = process.env.ACCESS_TOKEN;

    try {
        const response = await axios.post('https://graph.facebook.com/v16.0/${threadId}',
        {
            message: {
                text: messageText
            }
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error("Error sending message", error.response ? error.response.data : error.message);
    }
};

sendMessageToThread('Hello World');