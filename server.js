const express = require("express")
const app = express();
const users = require("./routes/users") 

const PORT = 3000;

// Routes
app.use('/api/users', users)

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

