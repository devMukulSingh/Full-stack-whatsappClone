import userModel from "../modal/User.js";

export const addUser = async(req,res) => {
   try {
     let exist = await userModel.findOne( {sub: req.body.sub } );
     
     if(exist){
         res.status(200).json(`User already exists`);
     }
     else{
         const newUser = new userModel(req.body);
         await newUser.save();
         res.status(200).json(newUser)
     }
 }
 catch (error) {
     res.status(500).json(error.message)
    }
}

export const getUser = async( req,res ) => {
    try {
        const usersData = await userModel.find({})
        return res.status(200).json(usersData);
    } catch (error) {
        return res.status(500).json(error);
    }
}