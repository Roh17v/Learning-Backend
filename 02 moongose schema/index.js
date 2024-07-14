import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5173;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/profile', (req, res) => {
    res.send('Enter Your Details');
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

