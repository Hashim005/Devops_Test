const feedback = require('./feedbackModel');

exports.createFeedback = async (feedbackData) => {
    try{
        const newFeedback = new feedback(feedbackData);
        await newFeedback.save()
        return newFeedback
    }
    catch (error){
        throw new Error('Error creating feedback')

    }
}

exports.getAllFeedbacks = async() => {
    try{
        const feedbacks = await feedback.find({});
        return feedbacks

    }
    catch (error){
        throw new Error('Error fetching feedback from the feedback database')

    }
}

exports.deleteFeedbackById = async(id) => {
    const deleteFeedback = await feedback.findByIdAndDelete(id)
    if(!deleteFeedback){
        throw new Error("feedback not found")
    }
}