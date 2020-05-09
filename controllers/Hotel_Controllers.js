// Access the database which is HOTEL_db
const Hotel_db=require('../models/Hotel_db');



// 1)Controller For the landing page  of the web application
module.exports.home=function(req,res){
    return res.render('Homepage');
}

// 2)Controller For the landing page of the Insert link of the nav bar
module.exports.createuserform=function(req,res){
    return res.render('Insert_data');
}


//  3)Controller For the landing page of the Update link of the nav Bar
module.exports.updateuserform=function(req,res)
{
    Hotel_db.find({},function(err,Record){

        if(err)
        {
            console.log('ERROR FOUND IN Update record');
            return;
        }
        return res.render('Update_table',{Users:Record});
       
}); 
}

//  4)Controller For the landing page of the Delete link of the nav Bar
module.exports.deleteuserform=function(req,res)
{

    Hotel_db.find({},function(err,Record){

        if(err)
        {
            console.log('ERROR FOUND IN Update record');
            return;
        }
        return res.render('Delete_data',{Users:Record});
       
});
    
}


// 5) Controller or Action  For  Inserting A New Record In database 
module.exports.create=function(req,res){
    Hotel_db.create(req.body,function(err,InsertedData){

            if(err)
            {
                console.log('Error Found In Inserting Data In database');
                console.log(err);
                return;
            }

            return res.redirect('back');
    });

}


// module.exports.create=function(req,res,next){
//     Hotel_db.create(req.body).then((user)=>{

           
//                console.log(user);
//                res.send(user);
               
//                 return;
//          }).catch(next);
// }



// 6) Controller or Action For OPen a Updating page for the user 
module.exports.update=function(req,res){

    Hotel_db.findById(req.params.id,function(err,Record){

            if(err)
            {
                console.log('ERROR FOUND IN Update record');
                return;
            }
           
            return res.render('Update_data',{User:Record,id:req.params.id});

    });
   
    


}

// 7)Controller or Action for Save the modify or updated data to the database
module.exports.savetodatabase=function(req,res){
    Hotel_db.findByIdAndUpdate(req.body.id,req.body,function(err,Record){

        if(err)
        {
            console.log('ERROR FOUND IN Update record');
            return;
        }
       
        return res.redirect('/updateuserform');

});
    
}


// 8) Controller or Action For  Reading A Single Record From database 
module.exports.read=function(req,res){
    Hotel_db.find({name:req.query.name},function(err,Record){

        if(err)
        {
            console.log("ERROR FOUND IN READ A SINGLE RECORD");
            return;
        }
        console.log(Record);

        return res.render('Read_data',{Users:Record});

         

    });
  
    


}


// 3) Controller or Action For  Deleting  A Single Record From database 
module.exports.delete=function(req,res){

    Hotel_db.findByIdAndDelete(req.params.id,function(err){
        if(err)
        {
            console.log("ERROR FOUND IN DELETING THE RECORD");
            return ;
        }
        return res.redirect('back');
         


    });
    

}


module.exports.readuserform=function(req,res)
{ 
    return res.render('Read_data',{Users:""});
}

