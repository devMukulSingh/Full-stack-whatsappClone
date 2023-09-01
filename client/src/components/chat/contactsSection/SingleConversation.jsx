import React, { useContext, useEffect, useState } from 'react'
import {AccountContext} from "../../../context/AccountProvider";
import { formatDate } from '../../../utils/Common-utils';
import { Box ,Typography,styled ,Divider} from "@mui/material";
import { getConversationApi } from '../../../api/api'
import { setConversationApi } from '../../../api/api';

////////////////////////////////////////////////
const MainBox = styled(Box)`
overflow:overlay;
`
const UserDetailsBox = styled(Box)`
display:flex;  
align-items:center;
padding:1.5rem 2rem;
cursor:pointer;
height:100%;
&:hover{
  background-color:#F0F2F5;
}
position:relative;
`
const NameBox = styled(Typography)`
  font-size:1.6rem;
  font-weight:400;

  & :nth-child(2){
    fontSize:1.4rem;
    marginLeft:auto;
  }
`
const ImgBox = styled(Box)`
& :first-of-type{
  border-radius:50%;
  width:5rem;
  margin-right:1rem;
}
`
const LatestMessage = styled(Typography)`
  font-size:1.4rem;
  font-weight:300;
  color:#3B4A54;
`

const DividerStyled = styled(Divider)`
font-color:#E9EDEF
`

const SingleConversation = ( { user }) => {

    const { loginAccountUser } = useContext(AccountContext);
  const {setContactListUser , messageSendFlag } = useContext(AccountContext);
  const [latestMessage , setLatestMessage ] = useState();
  const{ incomingMessage  } = useContext(AccountContext);
  const { messagesArray,socket } = useContext(AccountContext);
  const[ message , setMessage] = useState();

//Setting Conversation Details( senderId and receiverId ) so that a conversation starts between two party(sender and receiver)
  const getUserData = async(clickedUser) => {
    setContactListUser(clickedUser);
    await setConversationApi({ senderId:loginAccountUser.sub, receiverId:clickedUser.sub });
}
////Getting Latest Message Data using getConversationApi() to show at Contact List at componentDidUpdate - messageSendFlag
useEffect( () => {
    const getConversationDetails = async() => {
      const conversationData = await getConversationApi( { senderId:loginAccountUser.sub, receiverId:user?.sub } );
      setLatestMessage( { message:conversationData?.message , timeStamp: conversationData?.updatedAt});
    }
    getConversationDetails();
  },[messageSendFlag]);

// useEffect ( () => {
//     socket.current.on('getLatestMessage', data => {
//         console.log(data);
//         setMessage( {...data,createdAt: Date.now()});  ///setting real time messages in IncomingMessage state along with time
//     })
//     console.log(message);
//     message && setLatestMessage( {message:message.messagetxt ,timeStamp:message.createdAt} )
// },[messageSendFlag,message])
////////////////////////////////////////////JSX PART////////////////////////////////////////
  return (
    <>
    <MainBox>
            <UserDetailsBox onClick={ ()=> getUserData(user)} >
              <ImgBox><img src={user.picture} alt="profileimage" /></ImgBox>
              <Box >
                <NameBox>{user.name} 
                    <Typography component='span' sx={{ fontSize:'1.2rem',position:'absolute',right:'20px',color:'#667781',top:'22px'}} >
                        { latestMessage?.message && formatDate(latestMessage?.timeStamp)}
                    </Typography>
                </NameBox>
                <LatestMessage>{ latestMessage?.message }</LatestMessage>
              </Box>
            </UserDetailsBox>
           
          <DividerStyled variant="inset"/>
        </MainBox>
    
    </>
  )
}

export default SingleConversation