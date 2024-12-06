const feedbackService = require('./feedbackService');


function createTask(req, res){
    const feedbackData = req.body
    feedbackService.createFeedback(feedbackData)
    .then(newFeedbackData => {
        res.status(200).json(newFeedbackData)
    })
    .catch(error => {
        res.status(500).json({message:"Error submitting feedback", error})
    })

}

function getAllFeedbacks(req, res){
    feedbackService.getAllFeedbacks()
    .then(feedbacks => {
        res.status(200).json(feedbacks)
    })
    .catch(error => {
        res.status(500).json({message:"error fetching feedbacks", error})
    })
}

function deleteFeedbacks(req, res){
    const {id} = req.params;
    feedbackService.deleteFeedbackById(id)
    .then(()=>{
        res.status(200).json({message:"feedback is deleted successfully"});
    })
    .catch(error => {
        res.status(500).json({message:"error deleting feedback", error});
    })

}


module.exports = {
    createTask,
    getAllFeedbacks,
    deleteFeedbacks

}