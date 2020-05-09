const mongoose=require('mongoose');//Importing The moongoose library

// const db= 'mongodb://localhost/hotel_db';

mongoose.connect('mongodb+srv://abhiman:herohere@cluster0-8s4cf.mongodb.net/registration?retryWrites=true&w=majority');//Create connection with database

const data_base=mongoose.connection;

data_base.on('error',console.error.bind(console,'DataBase Not Connected'));//Chek the Connection exists or Not


//When The Database Successfully Connected
data_base.once('on',function(){
    console.log('DATABASE SUCCESSFULLY CONNECTED');
});

