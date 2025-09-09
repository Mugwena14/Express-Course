// @desc getting user
// @routes GET /api/users
const getUser = (req, res) => {
    const lim = parseInt(req.query.limit);
    const newUsers = users.slice(0, lim);
    if(lim > 0){
        return res.status(200).json(newUsers);
    } res.status(200).json(users)
}
