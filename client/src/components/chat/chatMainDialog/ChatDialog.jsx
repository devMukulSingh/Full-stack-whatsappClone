import React, { useContext } from 'react';
import ContactSection from "../contactsSection/ContactSection";
import EmptyChat from '../chatSection/EmptyChat';
import ChatMessages from '../chatSection/ChatMessages';
import { AppBar ,styled, Dialog , Box , TextField , InputBase , PaperProps} from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider';
////////////////////////////////////////////////////

//////Material UI Styled Components
const Header = styled(AppBar)`
    background-color: #00a884;
    height:120px;
    box-shadow:none;
`
const MainDialog = {
    maxHeight:'100%',
    height:'95vh',
    backgoundColor: '#ededed',
    borderRadius:'0px',
    maxWidth:'100%',
    width:'1500px',
}
const MainChatBox = styled(Box)`
    display:flex;
    height:100%;
    width:100%;
    background-color: #ededed;
`
const ContactBox = styled(Box)`
    width:30%;
    min-width:300px;
    height:100%;
    background-color:white;
`
const ChatBox = styled(Box)`
    width: 70%;
    min-width:350px;
    height:100%;
    background:#f8fafb;

`

const ChatDialog = () => {
    ///////////JSX PART/////////////////////////////////
    const { contactListUser } = useContext(AccountContext);
    return (
    <Box>
        <Header/>
        <Dialog 
            open={true}
            PaperProps={{ sx:MainDialog }}
            hideBackdrop={true}>

            <MainChatBox>

                <ContactBox>
                    <ContactSection/>
                </ContactBox>

                <ChatBox>
                   { Object.keys(contactListUser).length ? <ChatMessages/> : <EmptyChat/> }
                </ChatBox>
                
            </MainChatBox>

        </Dialog>
    </Box>
  )
}

export default ChatDialog