import React, { useContext, useEffect, useState } from 'react'
import MessagesFooter from './MessagesFooter';
import MessagesHeader from './MessagesHeader';
import MessagesSection from './MessagesSection';
import { styled, Box } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { addMessageApi, getConversationApi } from "../../../api/api";
////////////////////////////////////////////////////////////////////////////

const MainBox = styled(Box)`
height:100%;
width:100%;
`
///////////////////////////////////////////////////////////////////////@ts-check
const ChatMessages = () => {
  const [ userInfo ,setUserInfo ] = useState()
  const { senderMessage ,setSenderMessage ,socket} = useContext(AccountContext);
  const { contactListUser ,loginAccountUser } = useContext(AccountContext);
  const {setMessageSendFlag } = useContext(AccountContext);
///////////////////////////////////////////////////////////////////////////////////////////
  useEffect( () => {
      const getConversationDetails = async() => {
        let data = await getConversationApi( { senderId:loginAccountUser.sub , receiverId:contactListUser.sub });
        setUserInfo(data);
      }
      getConversationDetails();
  },[contactListUser.sub])


////////////////////////////////////////////////////////////////////////////////
  const messageSend = async(e) => {
    if(e.key==='Enter'){
        let message = {
          senderId: loginAccountUser.sub,
          receiverId: contactListUser.sub,
          conversationId: userInfo?._id,
          messagetxt:senderMessage,
          type:'text',
        }
        socket.current.emit('sendMessage', message);// sending the whole message object (got above) to socket.io(index.js) using emit method
        await addMessageApi(message);
        setSenderMessage('');
        setMessageSendFlag( prev => !prev);
    }
  }
  const [file,setFile ] = useState();
 
  return (
    <>
    <MainBox>
        <MessagesHeader contactListUser = { contactListUser } />
        <MessagesSection userInfo={userInfo} />
        <MessagesFooter messageSend= { messageSend } file={file} setFile={setFile}/>
    </MainBox>
    </>
  )
}

export default ChatMessages