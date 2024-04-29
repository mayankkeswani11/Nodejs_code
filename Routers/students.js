const express=require("express");

const router=new express.Router();

const Students=require("../models/student");

// router.get("/thapa",(req,res)=>{
//     res.send("hello");
// })

router.post("/students",async(req,res)=>{
    try{
        console.log(req.body)
        const user=new Students(req.body)
        const createUser=await user.save();
        res.status(201).send(createUser)
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

router.get("/students",async(req,res)=>{
    try {
        const userData=await Students.find();
        res.status(200).send(userData);
        console.log(userData);

    } catch (error) {
        res.status(404).send(error);
    }
})

//update it by id

router.patch("/students/:id",async(req,res)=>{
    try {
       const _id=req.params.id;
    //    console.log(_id);
    //    console.log(req.body);
       const student_user=await Students.findByIdAndUpdate({_id},req.body,{
        new:true
       })
       console.log(student_user)
       res.status(201).send(student_user);
    } catch (error) {
        res.status(404).send(error);
    }
})
router.delete("/students/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const student_user=await Students.deleteOne({_id})
        console.log(student_user)
        res.status(200)
     } catch (error) {
         res.status(504).send(error);
     }
})

module.exports=router;