import express from "express"

import { create, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/userController.js";

const route = express.Router();

route.post("/user", create)
route.get("/users", getAllUsers)
route.get("/userfindbyid/:id", getUserById)
route.put("/userupdatebyid/:id", updateUser)
route.post("/userdeletebyid/:id", deleteUser)

export default route;