import conversationModel from "../modal/Conversation.js";

export const newConversation = async(req,res) => {

   try {
     let senderId = req.body.senderId;
     let receiverId = req.body.receiverId;
     const exist = await conversationModel.findOne( { members:{ $all:[senderId,receiverId] }});

     if(exist){
         res.status(200).json(`Conversation already exists`);
         return;
     }

     const newConversation = new conversationModel({
         members: [senderId,receiverId]
     })

     const savedConversation =  await newConversation.save();
     return res.status(200).json(savedConversation);
     
   }

    catch (error) {
        console.log(error);
   }
}

export const getConversation = async(req,res) => {
  try {

      const Conversation = await conversationModel.findOne( {members : { $all : [ req.body.senderId , req.body.receiverId]}})
      return res.status(200).json(Conversation);
  }
    catch (error) {
        return res.status(500).json(error);
  }
}
