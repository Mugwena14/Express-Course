import express from "express";
const router = express.Router();

const users = [
    {id: 1, name: Langavi},
    {id: 2, name: John},
    {id: 3, name: Jane},
]

// Getting users and with their limits
router.get('/', (req, res) => {
    const lim = parseInt(req.query.limit);
    const newUsers = users.slice(0, lim);
    if(lim > 0){
        return res.status(200).json(newUsers);
    } res.status(200).json(users)
})

// Getting users by their id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if(user){
        return res.status(200).json(user);
    } res.status(404).json({msg: `User of the id: ${id} not found.`})
})

// Adding new user
router.post('/', (req, res) => {
    const newUser = [
        {id: users.length + 1},
        {name: req.body.name}
    ]

    if(!newUser.name){
        return res.status(400).json({msg: `Please enter your name`})
    } users.push(newUser);

    res.status(201).json(users);
});

// Updating user
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    user.name = req.body.name;
    if(!user.name){
        return res.status(400).json({msg: `Please enter your name`})
    } res.status(200).json(users)
})

// Deleting users
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter((user) => user.id !== id)

    if(!user){
        return res.status(404).json({msg: `User of id: ${id} not found`})
    } res.status(200).json(users);
})




export default router