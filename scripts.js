const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

const LINE_ACCESS_TOKEN = env;

app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
    const message = req.body.message;
    const url = 'https://api.line.me/v2/bot/message/push';

    const payload = {
        to: 'USER_ID_OR_GROUP_ID',
        messages: [
            {
                type: 'text',
                text: message,
            },
        ],
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${LINE_ACCESS_TOKEN}`,
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            res.json({ status: 'Message sent!' });
        } else {
            const error = await response.json();
            res.status(response.status).json(error);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
