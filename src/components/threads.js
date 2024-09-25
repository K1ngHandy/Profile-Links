export const getThreads = async () => {
    const threadId = process.env.THREAD_ID;
    console.log('Thread ID:', threadId);
    const accessToken = process.env.ACCESS_TOKEN;
    const url = process.env.URL;

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
        console.log(response);

        const posts = response.data.data;

        posts.forEach((post, index) => {
            console.log(`Post #${index + 1}: ${post.message}`);
        });
    } catch (error) {
        console.error("Error sending message", error.response ? error.response.data : error.message);
    }
};