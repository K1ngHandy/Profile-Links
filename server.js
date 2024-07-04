const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const userId = 'YOUR_USER_ID';
const accessToken = 'YOUR_ACCESS_TOKEN';

app.use(express.static('public'));

app.get('/api/recent-posts', async (req, res) => {
    const url = `https://graph.threads.com/${userId}/threads?fields=id,content,media_type,media_url,permalink,timestamp&access_token=${accessToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching recent threads:', error);
        res.status(500).json({ error: 'Failed to fetch recent posts' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});