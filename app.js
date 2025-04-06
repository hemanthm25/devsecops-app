const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Correct way to serve public folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: send index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
