const mongoose = require("mongoose");
const Userdetail = require("./userSchema");

const ImageSchema = new mongoose.Schema({
    img : {
        type : "string"
    },
    emailid : {
        type : "string"
    },
    textstatus : {
        type : "string"
    }
});

const Image = mongoose.model("image", ImageSchema);
module.exports = Image;