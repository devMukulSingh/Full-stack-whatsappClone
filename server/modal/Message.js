import mongoose from "mongoose";

const messageSchema = mongoose.Schema( {
    senderId:{
        type:String
    },
    receiverId:{
        type:String
    },
    conversationId:{
        type:String
    },
    messagetxt:{
        type:String
    },
    type:{
        type:String
    }},
    {
        timestamps:true
    }
)

const messageModel = mongoose.model('messageModel',messageSchema);
export default messageModel;