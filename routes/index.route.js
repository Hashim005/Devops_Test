const express = require('express');
const router = express.Router();
const assignTaskRouter = require('./assign.task.route');
const feedbackRouter = require('./feedback.route');
const userRouter = require('./user.route'); 



router.use('/users',userRouter)
router.use('/api',userRouter)
router.use('/feedback',feedbackRouter);
router.use('/assign-task', assignTaskRouter);

module.exports = router;