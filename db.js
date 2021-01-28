var mongoose = require('mongoose').set('debug',true);

var mongoDB = 'mongodb://127.0.0.1:27017/imgDb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function () {
     console.log("DB Connected");  
});