const Task = require('../models/taskModel');

class TaskController {
    static async getAllTasks(req, res) {
        try {
            const tasks = await Task.findAll();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async createTask(req, res) {
        try {
            const task = await Task.create(req.body);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async getTaskById(req, res) {
        try {
            const task = await Task.findById(req.params.id);
            if (!task) {
                return res.status(404).json({ message: "Task not found!" });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async updateTask(req, res) {
        try {
            const task = await Task.update(req.params.id, req.body);
            if (!task) {
                return res.status(404).json({ message: "Task not found!" });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static async deleteTask(req, res) {
        try {
            const task = await Task.delete(req.params.id);
            if (!task) {
                return res.status(404).json({ message: "Task not found!" });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

module.exports = TaskController;







