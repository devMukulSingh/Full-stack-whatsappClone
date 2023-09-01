import React, { useContext, useEffect ,useState} from 'react'
import { styled ,Box } from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'
import { getMessageApi } from '../../../api/api';
import SingleMessage from "./SingleMessage";

///////////////////////////MATERIAL UI//////////////
const MainBox = styled(Box)`
    background-image : url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`});
    backorund-size:50%;
    height:77vh;
    overflow-y:scroll;
    padding:3rem 5rem;

`
const SingleMsgBox = styled(Box)`

`
//////////////////////FUNCTIONS///////////////////////////
const MessagesSection = ( {userInfo} ) => {

    const{ messagesArray, setMessagesArray } = useContext(AccountContext);
    const { contactListUser } = useContext(AccountContext);
    const { messageSendFlag, socket } = useContext(AccountContext);
    const { incomingMessage, setIncomingMessage } = useContext(AccountContext);


    useEffect( () => {
     try {
       const getAllMessages = async() => {
         let messages = await getMessageApi(userInfo?._id);
         setMessagesArray(messages);
       }
       userInfo?._id && getAllMessages();
     } catch (error) {
        console.log(`error in getAllMessages ${error}`);
     }
     
    },[contactListUser?._id ,userInfo?._id , messageSendFlag])

    useEffect( () => {
      socket.current.on('getMessage', data => {
        setIncomingMessage( {...data,createdAt: Date.now()});  ///setting real time messages in IncomingMessage state along with time
      })
    },[])

    useEffect( () => {
        incomingMessage && userInfo?.members?.includes(incomingMessage.senderId) &&
        setMessagesArray( prev => [...prev, incomingMessage]);  //setting incomingMessage in MessagesArray to loop dowm using map function and display
      }, [incomingMessage, userInfo])
  

  return (
    <MainBox>   
        {
          <>  
           { 
              messagesArray && messagesArray.map((msg, index) => (
                <SingleMessage key={index} msg = {msg}/>
                ))}
        </>
        }
    </MainBox>
  )
}

export default MessagesSection