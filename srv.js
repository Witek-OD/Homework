const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on('error', (error) => console.log(error));
database.once('connected', () => console.log('Database Connected'));

// Определение схемы и модели задачи
const dataSchema = new mongoose.Schema({
    id: { required: true, type: Number },
    text: { required: true, type: String },
    isCompleted: { required: true, type: Boolean }
});
const TodoModel = mongoose.model('Todos', dataSchema);

// get all
app.get('/todos', async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// new
app.post('/task', async (req, res) => {
    const todo = new TodoModel(req.body);
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// update
app.put('/task/:id', async (req, res) => {
    try {
        const updatedTodo = await TodoModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Задача не найдена' });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// delete
app.delete('/task/:id', async (req, res) => {
    try {
        const deletedTodo = await TodoModel.findOneAndDelete({ id: req.params.id });
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Задача не найдена' });
        }
        res.json({ message: 'Задача удалена', todo: deletedTodo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});