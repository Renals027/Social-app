var express = require("express");
var app = express();

const cors = require("cors");
require("./db");
const Userdetail = require("./userSchema");
const Image = require("./imgUpSchema");

app.use(cors());

var bodyParser = require("body-parser");
const { db } = require("./userSchema");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// img--------------------
app.post("/imgUpload", function (req, res) {
  const Uploadimg = new Image({
    img: req.body.url,
    emailid: req.body.mailName,
    textstatus: req.body.texting,
  });
  Uploadimg.save(function (err) {
    if (err) {
      console.log("error");
    } else {
      console.log("image saved");
      res.send(true);
    }
  });
  console.log("imgDetails", req.body.url);
});

// login------------------
app.post("/login", function (req, res) {
  var query = Userdetail.find({
    email: req.body.personEmail,
    Password: req.body.personPassword,
  });
  console.log(" req.body.personEmail", req.body.personEmail);
  console.log(" req.body.personEmail", req.body.personPassword);
  query.exec(function (err, data) {
    if (err) {
      console.log("error", err);
    } else {
      console.log("data", data);
    }
    res.send(data);
  });
});

app.get("/getalldata",function(req,res) {
  Image.find((err,images)=>{
    if(err){
      console.log("error");
    }else{
      images.forEach(Image =>{
        console.log(Image);
      })
    }
    res.send(images.reverse());
  });
 

});


// register----------------
app.post("/saveLoginData", function (req, res) {
  console.log(" req.body.EmailId", req.body.EmailId);
  var user = new Userdetail({
    email: req.body.EmailId,
    Password: req.body.newPassword,
  });
  user.save(function (err, data) {
    if (err) {
      console.log("error in finding users");
    } else {
      console.log("user exists with name ", data);
      res.send(true);
    }
  });
});


var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
