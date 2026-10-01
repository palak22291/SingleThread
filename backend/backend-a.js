const express = require('express');
const app = express();
const port = 3001;

// Middleware to add the custom header to every response
app.use((req, res, next) => {
    res.set('X-Backend', 'A');
    next();
});

app.get('/', (req, res) => {
    res.send('Backend A is running');
});

app.get('/api/status', (req, res) => {
    res.set('Cache-Control', 'max-age=60'); // Tells the browser to remember this for 60 seconds
    res.json({ backend: 'A', status: 'ok' });
});
// Binding to 0.0.0.0 ensures it is LAN-accessible, not just restricted to localhost
app.listen(port, '0.0.0.0', () => {
    console.log(`Backend A listening on port ${port}`);
});