let Task = require('../models/Task');

module.exports = class TaskControllers {


    static createTask(req, res) {
        res.render('tasks/create');
    }


    static async createTaskSave(req, res) {
        try {
            let task = {
                title: req.body.title,
                description: req.body.description,
                done: false
            };

            await Task.create(task);
            res.redirect('/tasks');
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            res.status(500).send('Erro ao criar tarefa');
        }
    }


    static async removeTask(req, res) {
        try {
            let id = req.body.id;
            await Task.destroy({ where: { id: id } });
            res.redirect('/tasks');
        } catch (error) {
            console.error('Erro ao remover tarefa:', error);
            res.status(500).send('Erro ao remover tarefa');
        }
    }


    static async updateTask(req, res) {
        try {
            let id = req.params.id;
            let task = await Task.findOne({ where: { id: id }, raw: true });
            if (task) {
                res.render('tasks/edit', { task });
            } else {
                res.status(404).send('Tarefa não encontrada');
            }
        } catch (error) {
            console.error('Erro ao buscar tarefa para edição:', error);
            res.status(500).send('Erro ao buscar tarefa para edição');
        }
    }


    static async updateTaskPost(req, res) {
        try {
            let id = req.body.id;

            let task = {
                title: req.body.title,
                description: req.body.description
            };

            await Task.update(task, { where: { id: id } });
            res.redirect('/tasks');
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            res.status(500).send('Erro ao atualizar tarefa');
        }
    }


    static async toggleTaskUpdate(req, res) {
        try {
            let id = req.body.id;


            let task = await Task.findOne({ where: { id: id }, raw: true });
            if (task) {

                let updatedTask = {
                    done: !task.done
                };

                await Task.update(updatedTask, { where: { id: id } });
                res.redirect('/tasks');
            } else {
                res.status(404).send('Tarefa não encontrada');
            }
        } catch (error) {
            console.error('Erro ao atualizar estado da tarefa:', error);
            res.status(500).send('Erro ao atualizar estado da tarefa');
        }
    }


    static async showTasks(req, res) {
        try {
            let tasks = await Task.findAll({ raw: true });
            res.render('tasks/all', { tasks });
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            res.status(500).send('Erro ao buscar tarefas');
        }
    }
};