const express = require('express');

// Constants
const PORT = 3030;

// App
const app = express();

app.get('/', (req, res) => {
  res.sendFile('/build/index.html');
});

app.listen(PORT, () => console.log('Listening to port 3030'));
