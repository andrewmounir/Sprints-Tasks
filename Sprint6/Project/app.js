const express = require('express')
const mongoose = require('mongoose')
// getting user routes and product routes to make the code more organized and short.
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')

const app = express()
// assigning port 3000 or any availaible port on server
const port = process.env.PORT || 3000
// middlewares to be used 
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

//................
// connectin node app with our local database
mongoose.connect('mongodb://localhost:27017/mongoproject').then(()=>{
    console.log('Connected to MongoDB')
})
// opening port 3000 or any availaible port on server

app.listen(port, ()=>{
    console.log('Server is up on http://localhost:'+port)
})