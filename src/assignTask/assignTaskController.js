const assignTaskService = require('./assignTaskService');


function createAssignTask(req, res){
    const taskData = req.body
    assignTaskService.addAssignTask(taskData)
    .then(newTask => {
        res.status(200).json(newTask)
    })
    .catch(error => {
        res.status(200).json({message:"error creating task", error})
    })
}


function getFindAllAssignTask(req, res){
    assignTaskService.getAllAssignTask()
    .then(assignTasks => {
        res.status(200).json(assignTasks)
    })
    .catch(error => {
        res.status(500).json({message:"error fetching assignTask details", error})
    })

}

function getTaskById(req, res){
    const {id} = req.params
    assignTaskService.assignTaskById(id)
    .then(task => {
        if(task){
            res.status(200).json(task)
        }
        else{
            res.status(404).json({message:"assign task cannot found"})
        }
    })
    .catch(error => {
        res.status(500).json({message:"error fetching by id"});
    })
}

function updateAssignTask(req, res){
    const {id} = req.params;
    const updateAssignTaskData = req.body;
    assignTaskService.updateTaskById(id, updateAssignTaskData)
    .then(updateTask => {
        res.status(200).json(updateTask)
    })
    .catch(error => {
        res.status(500).json({message:"failed to update in assign task", error})
    })

}


function getAssignTaskFromUsers(req, res){
    const {userId} = req.query
    assignTaskService.getAssignTaskByUserId(userId)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(error => {
        res.status(500).json({message:"error fetching task", error})
    })
}

function deleteAssignTask(req, res){
    const {id} = req.params;
    assignTaskService.deleteAssignTaskById(id)
    .then(() => {
        res.status(200).json({message:"assign task is deleted successfully"})
    })
   .catch(error => {
    res.status(500).json({message:"Error deleting assign task"});
   })


}

module.exports = {
    createAssignTask,
    getFindAllAssignTask,
    getTaskById,
    updateAssignTask,
    getAssignTaskFromUsers,
    deleteAssignTask
}