import express from "express";
const router = express.Router();
import { 
    getUser, 
    getUserById, 
    addUser, 
    updateUser, 
    deleteUser } from '../controllers/userController.js'

// Getting users and with their limits
router.get('/', getUser);

// Getting users by their id
router.get('/:id', getUserById);

// Adding new user
router.post('/', addUser);

// Updating user
router.put('/:id', updateUser);

// Deleting users
router.delete('/:id', deleteUser);




export default router

