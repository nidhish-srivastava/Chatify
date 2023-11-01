const express = require('express')
const app = express()
app.use(express.json())
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const { chats } = require('./data')
const userRoutes = require('./routes/userRoutes')
const {notFound,errorHandler} = require('./middlewares/errorMiddleware')
dotenv.config()
cors()

const PORT = 5000 || process.env.PORT

app.get('/api/chat',(req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    console.log(req.params.id);
    const singleChats = chats.find(e=>e._id===req.params.id)
    res.send(singleChats);
})

app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)

const start = async () => {
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Server is listening at port ${PORT}`);
    })
}
start()