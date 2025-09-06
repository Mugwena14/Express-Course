const express = require("express");
const router = express.Router();

let users = [
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
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if(!user){
        return res.status(404).json({msg: `User of id: ${id} was not found.`})
    }
        return res.status(200).json(user);
})

// Getting users and limits
router.get('/', (req, res) => {
    const lim = parseInt(req.query.limit);
    if(lim > 0){
        return res.status(200).json(users.slice(0, lim))
    }
    res.status(200).json(users);
});

// Creating a user
router.put('/', (req, res) => {
    const newPost = [
        {id: users.length + 1},
        {name: req.body.name}
    ]

    if(!newPost.name){
        res.status(400).json({msg: `Please insert your name`});
    }

    res.status(201).json(users);
})

// Updating the user
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    user.name = req.body.name;
    res.status(200).json(users);
})





module.exports = router;