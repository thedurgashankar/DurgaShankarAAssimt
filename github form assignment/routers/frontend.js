const router=require('express').Router()//module
const Emp=require('../models/emp')


router.get('/',(req,res)=>{
    res.render('form.ejs')
})
router.post('/emprecord',(req,res)=>{
   const{ename,email,phoneno,city,zip,address1,address2,doe,dob}=req.body
   const record=new Emp({name:ename,email:email,phone:phoneno,join:doe,dob:dob,city:city,zip:zip,address1:address1,address2:address2})
   record.save()
   res.redirect('/emprecordfile')

}) 

router.get('/emprecordfile',async(req,res)=>{
    const record=await Emp.find()
   res.render('employeesdatashow.ejs',{record}) 
})
router.get('/delete/:abc',async(req,res)=>{ 
    const id=req.params.abc
    await Emp.findByIdAndDelete(id)
    res.redirect('/emprecordfile')
})
router.get('/update/:xyz',async(req,res)=>{
    const id=req.params.xyz
    const record= await Emp.findById(id)
    res.render('updateform.ejs',{record})
})
router.post('/updaterecord/:mn',async(req,res)=>{
    const id=req.params.mn
    const{ename,email,phoneno,city,zip,address1,address2,doe,dob}=req.body
    await Emp.findByIdAndUpdate(id,{name:ename,email:email,phone:phoneno,join:doe,dob:dob,city:city,zip:zip,address1:address1,address2:address2})
    res.redirect('/emprecordfile')
})






module.exports=router 