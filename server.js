import express from "express";
import path from "path";
import users from './routes/users.js'
const app = express();
const PORT = 3000;

// Routes
app.use('/api/users', users);

app.listen(PORT, () => console.log(`The Server is running on port ${PORT}`));

