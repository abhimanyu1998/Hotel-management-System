const express=require('express');                               //Using the Express Library
const port= process.env.PORT ||8000;                                                //Port Number On which Server will Run


const app=express(); 
const layout=require('express-ejs-layouts');                   //Creating the Express Object
app.use(layout);                                               //Acceessing The  Express-EJS-layout  
app.set('view engine','ejs');                                 //Setting Up the view Engine
app.set('views','./views');                                   //Setting up The Views Folder




const data_base=require('./config/mongoose_configuration');   //Importing the Database Connectivity
app.use(express.urlencoded());                                 //For the POST type request
app.use('/',require('./routes/Hotel_Routes'));                //This landing Route for The user
app.use(express.static('assets'));                            //For Access the static file like CSS,JS and Images




// Check the Server state it is running or NOt
app.listen(port,function(err){                           

    if(err)
    {
        console.log("OOPS  ! SERVER NOT STARTED");
    }

    console.log('SERVER IS STARTING UP SUCCESSFULLY')

});