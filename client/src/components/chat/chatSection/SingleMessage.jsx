import { Box ,Typography,styled} from '@mui/material'
import React, { useContext } from 'react'
import { formatDate } from '../../../utils/Common-utils'
import { AccountContext } from "../../../context/AccountProvider";

const ReceiverMsgBox = styled(Box)`
    background:white;
    max-width:45%;
    width:fit-content;
    word-break:break-word;
    margin-top:0.2rem;
    border-radius:0.8rem;
    margin-right:auto;
    display:flex;
    align-items:center;
    position:relative;


`
const SenderMsgBox = styled(Box)`
    background:#D9FDD3;
    max-width:45%;
    width:fit-content;
    word-break:break-word;
    margin-top:0.2rem;
    border-radius:0.8rem;
    margin-left:auto;
    display:flex;
    align-items:center;
    position:relative;



`
const MsgText = styled(Typography)`
  font-size:1.3rem;
  font-weight:300;
  padding:0.5rem 4rem 0.5rem 1rem;
`
const MsgTime = styled(Typography)`
  font-size:1rem;
  color:#667781;
  font-weight:300;
  word-break: keep-all;
  position:absolute;
  bottom:0.1rem;
  right:0.8rem;




`
const SingleMessage = ( {msg} ) => {

  const{ loginAccountUser } = useContext(AccountContext);


  return (
    <>
        {
          loginAccountUser.sub === msg.senderId ?
          <SenderMsgBox>
              <MsgText>{msg.messagetxt}</MsgText>
              <MsgTime>{formatDate(msg.createdAt)}</MsgTime>
              
          </SenderMsgBox> 
          :
          <ReceiverMsgBox>
              <MsgText>{msg.messagetxt}</MsgText>
              <MsgTime>{formatDate(msg.createdAt)}</MsgTime>
          </ReceiverMsgBox> 
        }
    </>
  )
}

export default SingleMessage