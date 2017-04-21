const express = require('express');
const path = require('path');
const fallback = require('express-history-api-fallback');

// Constants
const root = path.resolve(__dirname, '../build/');
const PORT = 3030;

// App
const app = express();

app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.get('/', (req, res) => {
  res.sendFile(`${root}/index.html`);
});

app.listen(PORT, () => console.log('Listening to port 3030'));
