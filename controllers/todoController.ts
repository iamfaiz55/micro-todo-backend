import { Request, Response } from "express";
import Todo from "../models/Todo";

// Get all todos
// controllers/todoController.ts

// controllers/todoController.ts

export const getTodos = async (_req: Request, res: Response) => {
    try {

        const result = await Todo.find();
        res.status(200).json({ message: "All Todos Fetch Success", result, });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message || "Something Went Wrong" });
    }
};


// Add a new todo
export const addTodo = async (req: Request, res: Response) => {
    try {
        await Todo.create(req.body);
        console.log(req.body);
        res.status(201).json({ message: "Todo Add Success" });
    } catch (error) {
        // TypeScript error handling - assert error type as any
        res.status(500).json({ message: (error as Error).message || "Something Went Wrong" });
    }
};

// Update an existing todo
export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);

    try {
        const { task, desc, priority, isComplete } = req.body;
        await Todo.findByIdAndUpdate(id, { task, desc, priority, isComplete });
        console.log("req.body", req.body);

        res.status(200).json({ message: "Todo Update Success" });
    } catch (error) {
        // TypeScript error handling - assert error type as any
        res.status(500).json({ message: (error as Error).message || "Something Went Wrong" });
    }
};

// Delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Todo Delete Success" });
    } catch (error) {
        // TypeScript error handling - assert error type as any
        res.status(500).json({ message: (error as Error).message || "Something Went Wrong" });
    }
};
