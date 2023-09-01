import mongoose from "mongoose";

const fileSchema = new mongoose.Schema( {
    originalName:{
        type:String
    },
    // filename:{
    //     type:String
    // },
    size:{
        type:String
    },
    data:{
        type:Buffer
    },
    contentType:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const fileModel = mongoose.model("fileModel",fileSchema);

export default fileModel;