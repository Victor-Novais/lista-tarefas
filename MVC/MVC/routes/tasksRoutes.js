let express = require('express');
let router = express.Router();

let TaskControllers = require('../controllers/TaskControllers');

router.get('/add', TaskControllers.createTask);


router.post('/add', TaskControllers.createTaskSave);


router.post('/remove', TaskControllers.removeTask);


router.get('/edit/:id', TaskControllers.updateTask); // Use GET para carregar o formulário de edição


router.post('/edit', TaskControllers.updateTaskPost);


router.post('/updatestatus', TaskControllers.toggleTaskUpdate);


router.get('/', TaskControllers.showTasks);

module.exports = router;