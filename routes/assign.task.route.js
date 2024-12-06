const express = require('express');
const router = express.Router();
const assignTaskController = require('../src/assignTask/assignTaskController');

router.route('/').post(assignTaskController.createAssignTask);
router.route('/get-tasks').get(assignTaskController.getFindAllAssignTask);
router.route('/get-tasks/:id').get(assignTaskController.getTaskById);
router.route('/update-tasks/:id').put(assignTaskController.updateAssignTask);
router.route('/get-task-list').get(assignTaskController.getAssignTaskFromUsers);
router.route('/delete-task/:id').delete(assignTaskController.deleteAssignTask);


module.exports = router