
import express from 'express'
import todoRoutes from './Routes/todoRoutes'

const app = express()

app.use(express.json())
app.use(todoRoutes)

const PORT = 3000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`REST API server ready at: http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();