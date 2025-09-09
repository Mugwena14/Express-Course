import express from "express";
const router = express.Router();

let users = [
    {id: 1, name: 'Langavi'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Jane'},
]

// Getting users and with their limits
router.get('/', )

// Getting users by their id
router.get('/:id', )

// Adding new user
router.post('/', (req, res, next) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }

    if(!newUser.name){
        const error = new Error(`Please enter your name`);
        error.status = 400;
        return next(error);
    } users.push(newUser);
    res.status(201).json(users);
});

// Updating user
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if(!user){
        const error = new Error(`User of id: ${id} not found.`);
        error.status = 404;
        return next(error);
    }

    user.name = req.body.name;
    if(!user.name){
        const error = new Error(`Please enter your name`);
        error.status = 400;
        return next(error);
    } res.status(200).json(users);
})

// Deleting users
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const newUsers = users.filter((user) => user.id !== id)
    const user = users.find((user) => user.id === id);

    if(!user){
        const error = new Error(`User of the id: ${id} not found.`);
        error.status = 404;
        return next(error);
    } res.status(200).json(newUsers);
})




export default router

