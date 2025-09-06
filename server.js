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

// Fetching users by id
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if(user){
        return res.status(200).json(user)
    }res.status(404).json({msg: `User of id: ${id} not found`});
})

// Fetching users and with their limit
app/get('/api/users', (req, res) => {
    const lim = parseInt(req.query.limit);
    if(lim > 0){
        return res.json(users.slice(0, lim));
    } res.json(users)
})

// Running the server
app.listen(PORT, () => console.log(`Port is running on PORT: ${PORT}`))











// Using params to get specific user
// app.get('/api/users/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const user = users.find((user) => user.id === id);

//     if(!user){
//         return res.status(404).json({msg: `User of id: ${id} was not found.`})
//     }
//         return res.status(200).json(user);
// })

// Getting users and limits
// app.get('/api/users', (req, res) => {
//     const lim = parseInt(req.query.limit);
//     if(lim > 0){
//         return res.status(200).json(users.slice(0, lim))
//     }
//     res.status(200).json(users);
// })



// app.listen(PORT, () => console.log(`The Server is running on port ${PORT}`));

