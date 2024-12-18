// Import Express
import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config'
import cookieParser from 'cookie-parser';


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(json());

// In-memory "database"
let items = [];

// Routes
// Get all items
app.get('/', (req, res) => {
  res.json("hello");
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
