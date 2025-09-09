// @desc getting user
// @routes GET /api/users
const getUser = (req, res) => {
    const lim = parseInt(req.query.limit);
    const newUsers = users.slice(0, lim);
    if(lim > 0){
        return res.status(200).json(newUsers);
    } res.status(200).json(users)
}

// @desc Getting user by id
// @routes GET /api/users/:id
const getUserById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);

    if(!user){
        const error = new Error(`User of the id: ${id} not found.`)
        error.status = 404;
        return next(error);
    } res.status(200).json(user);
}
