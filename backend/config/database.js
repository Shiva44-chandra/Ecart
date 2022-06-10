const mongoose = require("mongoose");



/*mongoose.connect("mongodb://localhost:27017/ecart",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
    console.log(`Mongodb Connected with with Server : ${data.connection.host}`);
  }).catch((err)=>{
      console.log(err);
  });*/
  mongoose.connect("mongodb://localhost:27017/ecart");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;



