import messageModel from "../modal/Message.js";
import conversationModel from "../modal/Conversation.js";
export const newMessage = async(req,res) => {
try {
        const newMessage =  new messageModel(req.body);
        await newMessage.save();
        await conversationModel.findByIdAndUpdate( req.body.conversationId , {message:req.body.messagetxt})
         res.status(200).json(`Message saved Successfully`);
} catch (error) {
         res.status(500).json(error);
}
  }

export const getMessage = async(req,res) => {
    try {
        const getMessage = await messageModel.find( {conversationId : req.params.id} );
         res.status(200).json(getMessage);
    } catch (error) {
         res.status(500).json(error);
    }
}
     
