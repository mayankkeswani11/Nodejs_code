const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email already exists"],
    validate: {
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("email is not valid please enter valid email");
        }
      },
    },
  },
  phone: {
    type: Number,
    minlength: 10,
    unqiue: [true, "phone number should be  unique"],
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});


const Students = new mongoose.model("student", StudentSchema);

module.exports = Students;
