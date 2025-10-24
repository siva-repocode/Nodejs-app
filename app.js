const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "MyApp";

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to ${APP_NAME}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
