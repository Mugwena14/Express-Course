// @desc getting user
// @routes GET /api/users
export const getUser = (req, res) => {
    const lim = parseInt(req.query.limit);
    const newUsers = users.slice(0, lim);
    if(lim > 0){
        return res.status(200).json(newUsers);
    } res.status(200).json(users)
}

// @desc Getting user by id
// @routes GET /api/users/:id
export const getUserById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if(!user){
        const error = new Error(`User of the id: ${id} not found.`)
        error.status = 404;
        return next(error);
    } res.status(200).json(user);
}


// @desc Adding user
// @routes POST /api/users/
export const addUser = (req, res, next) => {
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
}


// @desc Updating User
// @route PUT /api/users/:id
export const updateUser = (req, res, next) => {
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
}

// @desc Delete User
// @route PUT /api/users/:id
export const deleteUser = (req, res, next) => {
    const id = parseInt(req.params.id);
    const newUsers = users.filter((user) => user.id !== id)
    const user = users.find((user) => user.id === id);

    if(!user){
        const error = new Error(`User of the id: ${id} not found.`);
        error.status = 404;
        return next(error);
    } res.status(200).json(newUsers);
}