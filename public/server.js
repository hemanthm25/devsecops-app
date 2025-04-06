const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Frontend running on port 3000');
});

app.listen(PORT, () => {
  console.log(`Frontend server started on port ${PORT}`);
});
