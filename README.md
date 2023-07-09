# Todo CRUD Application

This is a simple todo list application developed with TypeScript, Express.js, and Prisma.

## Features

- List all todos.
- Get details of specific todo.
- Create a new todo.
- Update a specific todo.
- Delete a specific todo.

## Technologies

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM

## Setup

First, you need to clone the repository:


```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```
Next, install the dependencies:
```bash
npm install
```
Ensure you have PostgreSQL running on your machine and set the DATABASE_URL in your .env file:
```bash
DATABASE_URL="postgresql://sammy:your_password@localhost:5432/mydb?schema=public"
```
Finally, you can start the server with:
```bash
npm start
```

Your server should now be running at http://localhost:3000.
