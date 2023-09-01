import express from "express";
import { addUser ,getUser} from "../controller/userController.js"
import { newConversation } from "../controller/conversationController.js";
import { getConversation } from "../controller/conversationController.js";
import { newMessage } from "../controller/messageController.js";
import { getMessage } from "../controller/messageController.js";
import  { upload } from "../utils/uploadFile.js";
import { addFile } from "../controller/fileController.js";
import { uploadMiddleware } from "../utils/uploadMiddleware.js";

const route = express.Router();

route.post('/add', addUser);
route.get('/users',getUser);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);

route.post('/file/upload',uploadMiddleware , addFile);
// upload.single('file')
export default route;