const app = require('./app');
const cloudinary = require("cloudinary");
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');


//handling uncaught exception

process.on("uncaughtException",(err)=>{
    console.log(`error: ${err.message}`);
    console.log("Shutting down the server due to uncaught error");
    process.exit(1);
});


// Connecting to database
connectDatabase();


//config
dotenv.config({path:"backend/config/config.env"});


cloudinary.config({
    cloud_name: dkfluicrq,
    api_key:498273459345824,
    api_secret: L7knExblN3tIVO2XcEYl2njanYc,
  });



const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost: ${process.env.PORT}`);
});



//unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`error: ${err.message}`);
    console.log("shutting down the server due to unhandled promise rejection"); 
    server.close(()=>{
        process.exit(1);
    });
});

