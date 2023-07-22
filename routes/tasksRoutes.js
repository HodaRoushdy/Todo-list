const express = require('express')
const router = express.Router()
const {getAllTasks , addNewTask , updateTask , deleteTask , getSingleTask} = require('../controllers/tasksControllers')

router.route('/').get(getAllTasks).post(addNewTask)
router.route('/:id').patch(updateTask).delete(deleteTask).get(getSingleTask)



module.exports=router
