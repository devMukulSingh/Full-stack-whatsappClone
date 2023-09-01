import { Server } from "socket.io";

const io = new Server (9000, {
    cors:{
        origin: 'http://localhost:3000'
    }  
});
  
let users = [];
////////////////////////////////////////////////////////////////////////////

const addUser = (userData , socketId) =>{   //adding active users into the users array as soon as the user Logins
    !users.some( user => user.sub === userData.sub ) &&  users.push( {...userData , socketId});  ///Setting the users[] array declared above only if it doesn't already exist;
}
//getting the Receiver user to whom message to be send ///used in Conversation.jsx
const getUser = (userId) => {  
    return users.find( user => user.sub === userId);
}

///////////////////////////////////////////////////////////////////////////
//establishing the connection to backend
io.on( 'connection' , (socket) => { 
    console.log(`User Connected`);  
    ///Adding Active Users into users array to get the status online or offline
    socket.on("addUsers", userData => {    /// userData==loginAccountUser , passing loginAccountUser data from Conversation.jsx in 
        addUser(userData, socket.id); 
        io.emit('getUsers',users);        // sending the users array of active users to frontend using emit method // using in conversation.jsx
    }) 

    // using receiver User here got above using getUser, to send the message to receiver in real time
    socket.on( 'sendMessage' , data => {
        const receiverUser = getUser(data.receiverId);                                        
        io.to(receiverUser?.socketId).emit("getMessage",data); 
    })   

});  