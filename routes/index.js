const express = require('express');
const router = express.Router();
const taskController = require('../controller/task_controller.js');

console.log('Router Loaded');

router.get('/', taskController.home);
router.post('/create-task',taskController.newTask);
// router.get('/completed-task',homeController.completedTask);
router.get('/delete-task',taskController.deleteTask);


module.exports = router;