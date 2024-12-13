import express from "express"
import * as todoControllers from "../controllers/todoController"

const todoRoutes = express.Router()

todoRoutes
    .get("/", todoControllers.getTodos)
    .post("/", todoControllers.addTodo)
    .put("/:id", todoControllers.updateTodo)
    .delete("/:id", todoControllers.deleteTodo)



export default todoRoutes