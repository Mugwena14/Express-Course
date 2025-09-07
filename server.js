import express from "express";
const app = express();
import users from './routes/users';
const PORT = 3000;

// Routes
app.use('/api/users', users);

// Running the server
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))