const path = require('path');
const express = require('express');
const { publicRoot } = require('../shared/constants.js');

const app = express();

const _port = process.env.PORT || 4000;
app.listen(_port, err => {
    if (!err) {
        console.log(`Listening in port ${_port}`);
    }
});

app.use(express.static(publicRoot));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicRoot, 'index.html'));
});
