const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();

app.get('/', (req, res) => {
  res.sendFile('/build/index.html');
});

app.listen(PORT);
