const express = require('express');
const app = express();
const port = 3002;

app.use((req, res, next) => {
    res.set('X-Backend', 'B');
    next();
});

app.get('/', (req, res) => {
    res.send('Backend B is running');
});

app.get('/api/status', (req, res) => {
    res.json({ backend: 'B', status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Backend B listening on port ${port}`);
});