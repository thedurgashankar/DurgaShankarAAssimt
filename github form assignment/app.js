const express=require('express')//function
const app=express()//module
app.use(express.urlencoded({extended:false}))
const backend=require('./routers/backend')
const frontend=require('./routers/frontend')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/employeesdata')


app.use(frontend)
app.use(backend)
app.set('view engine','ejs')
app.listen(5000,()=>{console.log('server is running on 5000')})