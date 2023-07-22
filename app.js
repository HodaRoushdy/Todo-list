const connectDB = require('./database/connection')
const express = require('express')
const app = express()
const taskSchema = require('./models/taskModel')
require('dotenv').config()
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.static('./public'))
app.use(express.json())



const tasks = require('./routes/tasksRoutes')
app.use('/api/tasks',tasks)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 4000

const starter = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`app listen on ${port}`)
        })
    }catch (error){
        console.log(error)
    }
}

starter()
