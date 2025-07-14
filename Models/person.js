const mongoose = require("mongoose");
const { type } = require("os");
const bcrypt = require("bcrypt");

const usermodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "manager", "waiter"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

usermodel.pre("save", async function (next) {
  const user = this;
  try {
    //generate salt
    const salt = await bcrypt.genSalt(10);

    //generate hashpassword
    const hashedpassword = await bcrypt.hash(user.password, salt);
    user.password = hashedpassword;
    next();
  } catch (err) {
    return next(err);
  }
});

usermodel.methods.comparePassword = async function (enteredPassword) {
  try {
    const isMatch = await bcrypt.compare(enteredPassword, this.password);
    // compare -> extract salt from previous stored password --> hash(salt,enteredPassword) --> generatehash and compare
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const Person = mongoose.model("Person", usermodel, "person_details");
module.exports = Person;
