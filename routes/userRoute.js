import express from "express";
import { createClient, deleteClientById, getClientById, login, register, updateClientById, verifyJWT } from "../controllers/userController.js";


const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post('/create-client', verifyJWT,createClient);

router.get('/get-client/:id', verifyJWT, getClientById);

router.put('/update-client/:id', verifyJWT, updateClientById);

router.delete('/delete-client/:id', verifyJWT, deleteClientById);

export default router;

