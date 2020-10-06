const express=require("express")
const app=express()
const mongoose=require("mongoose")
const PORT=5000
const {MONGOURL}=require("./key")
require('./models/user')

app.use(express.json() )
console.log(1)
app.use(require('./routes/auth'))
console.log(2)
mongoose.connect(MONGOURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
console.log(3)
mongoose.connection.on('connected',()=>{
    console.log("connected to Server")
})
console.log(4)
mongoose.connection.on('error',(err)=>{
    err && console.log("error",err)
})
/*const customMiddleware=(req,res,next)=>{
    console.log("Middleware Executed")
    next()
}

app.get('/',customMiddleware,(req,res)=>{
    console.log("Home")
    res.send("Hello World")
})
app.get('/about',(req,res)=>{
    console.log("about")
    res.send("About Page")
})*/

app.listen(PORT,()=>{
    console.log("Server is running at",PORT)
})