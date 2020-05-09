const express=require('express');//Using the Express Library

// port Number on which Server will run
const port=8000;

// Create a Router Object
const hotel_routes=express.Router();

// Importing the model for accessing the Record For THE CRUD OPeration
const Hotel=require('../controllers/Hotel_Controllers');
// =======================================================================



// Route for the Landing page of the Web Application
hotel_routes.get('/',Hotel.home);


// ==============================Insert data int database================================= 

// 1) Route For  Inserting A New Record In database 
hotel_routes.post('/create',Hotel.create);
hotel_routes.get('/createuserform',Hotel.createuserform);

// ========================================================================================


// =============================Update Data int the database===============================

// 2) Route For  Updating A New Record In database 
hotel_routes.get('/update/:id',Hotel.update);
hotel_routes.get('/updateuserform',Hotel.updateuserform);
hotel_routes.post('/update/savetodatabase',Hotel.savetodatabase);
// ========================================================================================




//===============================Read Record From The database============================= 

// 3) Route For  Read A Single Record From database 
hotel_routes.get('/read/readuser',Hotel.read);
hotel_routes.get('/readuserform',Hotel.readuserform);

// ========================================================================================



// ===============================Delete Record From The database==========================
// 5) Route For  Delete A  Record From database 
hotel_routes.get('/delete/:id',Hotel.delete);
hotel_routes.get('/deleteuserform',Hotel.deleteuserform);

// ========================================================================================


// EXporting  the Routes 
module.exports=hotel_routes;