import express from "express";
const app = express();
import users from './routes/users.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
const PORT = 3000;

// Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Routes
app.use('/api/users', users);

// Errors
app.use(errorHandler);


// Running the server
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))