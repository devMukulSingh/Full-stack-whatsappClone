 
import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema( {
    members:{
        type:Array,
    },
    message:{
        type:String
    }},
    {
     timestamps:true
    }
)


const conversationModel = mongoose.model('ConversationModel',conversationSchema);

export default conversationModel;