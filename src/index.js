const express = require("express");
const app = express();
require("../db/connection");

const Students = require("../models/student");

app.use(express.json());

const studentRouter = require("../Routers/students");

app.use(studentRouter);

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log("connection succesful");
});

























// app.patch("/students/:idOrName", async (req, res) => {
//     try {
//         const identifier = req.params.idOrName;
//         console.log(identifier);
//         console.log(req.body);

//          //this  below line is not working
//         const student_user = await Students.updateOne({name:identifier}, req.body, {
//             new: true
//         });

//         console.log(student_user);
//         res.status(201).send(student_user);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// });
