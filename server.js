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



// Using params to get specific user
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(users.filter((user) => user.id === id));
})

// Getting users and limits
app.get('/api/users', (req, res) => {
    const lim = parseInt(req.query.limit);
    if(lim > 0){
        return res.json(users.slice(0, lim))
    }else{
    res.json(users);
    }
})



app.listen(PORT, () => console.log(`The Server is running on port ${PORT}`));

