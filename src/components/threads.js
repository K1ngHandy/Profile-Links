export const getThreads = async () => {
    const threadId = process.env.THREAD_ID;
    const accessToken = process.env.ACCESS_TOKEN;
    const url = `https://graph.facebook.com/v16.0/${threadId}/feed`;

    try {
        const response = await axios.get(url,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                limit: 5
            }
        });

        const posts = response.data.data;

        posts.forEach((post, index) => {
            console.log(`Post #${index + 1}: ${post.message}`);
        });
    } catch (error) {
        console.error("Error sending message", error.response ? error.response.data : error.message);
    }
};