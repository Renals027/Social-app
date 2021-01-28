const mongoose = require("mongoose");
const Image = require("./imgUpSchema");


const userDetailsSchema = new mongoose.Schema({
    email: String,
    Password: String
  });

  const Userdetail = mongoose.model("userdetail", userDetailsSchema );
  module.exports = Userdetail
  