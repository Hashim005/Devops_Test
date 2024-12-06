const AssignTask = require('./assignTaskModel');

exports.addAssignTask = async(taskData) => {
    try{
        const newTask = new AssignTask(taskData);
        await newTask.save();
        return newTask

    }
    catch(error){
        throw new Error('error creating assign task');

    }

}

exports.getAllAssignTask = async() => {
    try{
        const assignTask = await AssignTask.find({})
        return assignTask
    }
    catch (error){
        throw new Error('error fetching from the assignTask database');

    }
}

exports.assignTaskById = async(id) => {
    try{
        const task = await AssignTask.findById(id)
        return task;
    }
    catch (error){
        throw new Error('error fetching assign task by id')

    }

}

exports.updateTaskById = async(id, updateTask) => {
    try{
        const updateAssignTask = await AssignTask.findByIdAndUpdate(id, updateTask, {new:true});
        return updateAssignTask

    }
    catch (error){
        throw new Error("Error updating assign Task")

    }
}

exports.getAssignTaskByUserId = async(userId) => {
   try{
    const task = await AssignTask.find({ userId });
    return task
   }
   catch (error){
    throw new Error("error user found assign task");

   }
} 

exports.deleteAssignTaskById = async(id) => {
    const deleteAssignTask = await AssignTask.findByIdAndDelete(id);
    if(!deleteAssignTask){
        throw new Error("assign task not found");
    }
}