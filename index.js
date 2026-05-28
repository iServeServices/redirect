const express = require('express');
const app = express();

app.get('/privacy-policy', (req, res) => {
  res.redirect(301, 'https://anonymoustoc.com/#privacypolicy');
});

app.get('/terms-and-conditions', (req, res) => {
  res.redirect(301, 'https://anonymoustoc.com/#termsofuse');
});

app.get('/end-user-license-agreement', (req, res) => {
  res.redirect(301, 'https://anonymoustoc.com/#eula');
});

app.get('/csam', (req, res) => {
  res.redirect(301, 'https://anonymoustoc.com/#csam');
});

app.get('*', (req, res) => {
  res.redirect(301, 'https://anonymoustoc.com');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
