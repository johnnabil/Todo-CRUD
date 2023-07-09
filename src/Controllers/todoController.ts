import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

//Get All Todos
export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await prisma.todoItem.findMany()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}

//Get a Todo by ID
export const getTodoById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const todo = await prisma.todoItem.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(todo)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}

//Create a Todo
export const createTodo = async (req: Request, res: Response) => {
    const { Content, isDone, authorId } = req.body
    try {
        const todo = await prisma.todoItem.create({
            data: {
                Content: Content,
                isDone: isDone || false,
                authorId: authorId
            }
        })
        res.status(201).json(todo)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}

//Update a Todo
export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params
    const { Content, isDone } = req.body
    try {
        const todo = await prisma.todoItem.update({
            where: {
                id: Number(id)
            },
            data: {
                Content: Content,
                isDone: isDone
            }
        })
        res.status(200).json(todo)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}

//Delete a Todo
export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const todo = await prisma.todoItem.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(todo)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}

//Delete all Todos
export const deleteAllTodos = async (req: Request, res: Response) => {
    try {
        const todos = await prisma.todoItem.deleteMany()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}

//Get All Users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}

//Create a User
export const createUser = async (req: Request, res: Response) => {
    const { email, name } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name
            }
        })
        res.status(201).json(user)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}


//Get each User's Todos
export const getUserTodos = async (req: Request, res: Response)=> {
    const { id } = req.params
    try {
        const todos = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        }).todoItem()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(500).json({ 'Unexpected error': err })
    }
}