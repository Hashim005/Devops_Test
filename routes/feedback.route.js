const express = require('express');
const router = express.Router();
const feedbackController = require('../src/feedback/feedbackController');


router.route('/').post(feedbackController.createTask);
router.route('/get-feedbacks').get(feedbackController.getAllFeedbacks);
router.route('/delete-feedbacks/:id').delete(feedbackController.deleteFeedbacks);



module.exports = router