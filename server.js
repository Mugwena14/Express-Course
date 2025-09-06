const express = require("express")
const app = express();
const users = require("./routes/users.js")
const PORT = 3000;

// Routes
app.use('/api/users', users);

app.listen(PORT, () => console.log(`The Server is running on port ${PORT}`));

