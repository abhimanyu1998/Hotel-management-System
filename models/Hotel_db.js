const mongoose=require('mongoose');//Importing the moongooose library


// Schema of the database
const Hotel_Schema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    food:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    facility:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required:true
    },
    members:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }


},{timestamps:true});

// Save this Schema in the database with a name HOTEL_DB
const Hotel_DB=mongoose.model('Hotel_DB',Hotel_Schema);


// Exporting this DATABASE
module.exports=Hotel_DB;