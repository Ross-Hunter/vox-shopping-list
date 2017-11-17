const express = require('express');
const app = express();

const orm = require('./orm');

const PORT = process.env.PORT || 5000;

app.get('/api/items', (req, res) => {
  res.send(orm.readAll());
});

app.post('/api/items', (req, res) => {
  const newItem = { name: 'foo', price: 0.25 };
  const dbResult = orm.create(newItem);
  res.send(dbResult);
});

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
})
