const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const { chats } = require('./data')
dotenv.config()
cors()
app.use(express.json())

const PORT = 5000 || process.env.PORT

app.get('/api/chat',(req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    console.log(req.params.id);
    const singleChats = chats.find(e=>e._id===req.params.id)
    res.send(singleChats);
})

const start = async () => {
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Server is listening at port ${PORT}`);
    })
}
start()