const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const userId = process.env.USER_ID;
const accessToken = process.env.ACCESS_TOKEN;

app.use(express.static('public'));

app.get('/api/recent-posts', async (req, res) => {
    const url = `https://graph.threads.com/${userId}/threads?fields=id,content,media_type,media_url,permalink,timestamp&access_token=${accessToken}`;

    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            res.json(data);
        } else {
            const text = await response.text();
            console.log('Unexpected response format:', text);
            res.status(500).json({ error: 'Unexpected response format' });
        }
    } catch (error) {
        console.error('Error fetching recent threads:', error);
        res.status(500).json({ error: 'Failed to fetch recent posts' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});