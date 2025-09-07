import express from "express";
const app = express();
import users from './routes/users.js';
const PORT = 3000;

// Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', users);


// Running the server
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))