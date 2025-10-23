const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Define some sample product data
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 45 },
];

// Define a route to get the products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});