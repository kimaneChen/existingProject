
const express = require('express');

const router = new express.Router();
const usersControllers = require('../../controllers/api/v1/users');
const tasksControllers = require('../../controllers/api/v1/tasks');  
const myTasksControllers = require('../../controllers/api/v1/mytasks');
const taskerDetailsControllers = require('../../controllers/api/v1/taskerDetails');
const { login } = require('../../controllers/api/v1/auth');

// User router
router.get('/users', usersControllers.index);
router.get('/users/:id', usersControllers.show)
router.put('/users/:id', usersControllers.update);
router.delete('/users/:id', usersControllers.destroy);

// Task router
router.post('/tasks', tasksControllers.createTask);
router.get('/tasks', tasksControllers.index);
router.get('/tasks/:id', tasksControllers.show);
router.put('/tasks/:id', tasksControllers.update);
router.delete('/tasks/:id', tasksControllers.destroy);

// Tasker detail router
router.get('/taskerDetails', taskerDetailsControllers.index);
router.get('/taskerDetails/:id', taskerDetailsControllers.show)
router.put('/taskerDetails/:id', taskerDetailsControllers.update);
router.post('/taskerDetails', taskerDetailsControllers.store);
router.delete('/taskerDetails/:id', taskerDetailsControllers.destroy);

//MyTasks router
router.get('/mytasks', myTasksControllers.showByClientId);


// SignUp Procedure
router.post('/users', usersControllers.store);

//Log in 
router.post('/auth', login);



module.exports = router;

