const express = require('express');
const app = express();

//localhost:4000/
app.get('/', (req, res) => {
    // res.status(200).send('<h1>Welcom to My Home Page</h1>');
    res.sendFile(__dirname+'/views/index.html');
});

//localhost:4000/about
app.get('/about', (req, res) => {
    res.status(200).send('<h1>This is About Page</h1>');
});

//localhost:4000/contact
app.get('/contact', (req, res) => {
    res.status(200).send('<h1>Contact Page</h1>');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
