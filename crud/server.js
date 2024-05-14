const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

let items = [];

// Routes
app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).send();
});

app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  items[id] = updatedItem;
  res.status(200).send();
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  items.splice(id, 1);
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
