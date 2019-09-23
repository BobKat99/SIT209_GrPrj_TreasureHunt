const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const base = `${__dirname}/public`;

app.use((req, res, next) => {     
    res.header("Access-Control-Allow-Origin", "*");     
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");     
    next(); 
});

app.use(express.static('public'));

app.get('/login', function (req, res) {
    res.sendFile(`${base}/login.html`);
});

app.get('/progress', (req, res) => {
    res.sendFile(`${base}/progress.html`);
});

app.get('/stores', (req, res) => {
    res.sendFile(`${base}/stores.html`);
});

app.get('/package', (req, res) => {
    res.sendFile(`${base}/package.html`);
});

app.get('/virtual_items', (req, res) => {
    res.sendFile(`${base}/virtual_items.html`);
});

app.get('/registration', (req, res) => {
    res.sendFile(`${base}/registration.html`);
});

app.get('/journey', (req, res) => {
    res.sendFile(`${base}/journey.html`);
});

app.get('/marker', (req, res) => {
    res.sendFile(`${base}/marker.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});