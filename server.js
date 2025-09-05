const express = require("express")
const app = express()

const PORT = 3000;

const users = [
    { 
        id: 1, 
        name: "Langavi"
    },
    { 
        id: 2, 
        name: "John"
    },
    { 
        id: 3, 
        name: "Jane"
    }
]

// Getting data from the server
app.get('/api/users', (req, res) => {
    res.json(users);
})

// Using params to get specific user
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(users.filter((user) => user.id === id));
})




app.listen(PORT, () => console.log(`The Server is running on port ${PORT}`));

