// Import Express
import express, { json } from 'express';
const app = express();

// Middleware to parse JSON bodies
app.use(json());

// In-memory "database"
let items = [];

// Routes
// Get all items
app.get('/azad/items', (req, res) => {
  res.json("hello");
});

// Get a single item by ID
app.get('/azad/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

// Create a new item
app.post('/azad/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an item by ID
app.put('/azad/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  item.name = req.body.name || item.name;
  res.json(item);
});

// Delete an item by ID
app.delete('/azad/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });
  items.splice(itemIndex, 1);
  res.status(204).send();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
