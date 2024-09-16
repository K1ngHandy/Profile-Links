require('dotenv').config(); // load env file

const axios = require('axios');

export const getRecentThreads = async () => {
    const threadId = process.env.THREAD_ID;
    const accessToken = process.env.ACCESS_TOKEN;

    try {
        const response = await axios.get(`https://graph.facebook.com/v16.0/${threadId}/feed`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                limit: 5
            }
        });

        const posts = response.data.data;
        console.log(posts);
        debugger;
        posts.forEach((post, index) => {
            console.log(`Post #${index + 1}: ${post.message} || 'No content'}`);
        });
    } catch (error) {
        console.error("Error sending message", error.response ? error.response.data : error.message);
    }
};

getRecentThreads('Hello World');