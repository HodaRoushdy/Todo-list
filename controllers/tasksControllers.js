const Task = require('../models/taskModel')
const asyncWrapper = require('../middlewares/asyncWrapper')

const getAllTasks = asyncWrapper(async(req,res)=>{
    const allTasks = await Task.find({})
    res.status(201).json({status:'success', data:{allTasks , noHits:allTasks.length}})
})

const getSingleTask = asyncWrapper( async (req,res)=>{
        const {id:taskId} = req.params
        const theTask = await Task.findOne({_id:taskId})
        if(!theTask){
            return res.status(404).json({msg:`no task with id ${taskId}`})
        } 
            res.status(200).json({theTask})
})

const addNewTask = asyncWrapper( async(req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

const updateTask= asyncWrapper( async (req,res)=>{
        const {id:taskId} = req.params
        const updatedTask = await Task.findOneAndUpdate({_id:taskId}, req.body , {
            new:true,
            runValidators:true
        })
        if(!updatedTask){
            res.status(404).json({msg:`no such task with id ${taskId}`})
        }
        res.json({updatedTask})
})

const deleteTask = asyncWrapper( async (req,res)=>{
        const {id:taskId} = req.params
        const deleteTask = await Task.findOneAndDelete({_id:taskId})
        if(!taskId){
            res.status(404).json({msg:`there is no such task with id ${taskId}`})
        }
        res.status(200).json({msg:'deleted successfully'})
        res.status(500).json({msg:err})
})

module.exports = {getAllTasks , addNewTask , deleteTask , updateTask ,getSingleTask }