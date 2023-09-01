import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
///////////////////////////////////////////////
const MainChatBox = styled(Box)`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const ImageBox = styled(Box)`
    & :first-of-type{
        width:40rem;
    }
`
const TextBox = styled(Box)`
    margin-top:2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    & :nth-of-type(1){
        text-align:center;
        font-size:3rem;
        font-weight:300;
        color:#41525d;
    }
    & :nth-of-type(2){
        text-align:center;
        font-size:1.4rem;
        margin-top:2rem;
        font-weight:300;
        letter-spacing:0.05rem;
        color:#667781;
    }
 
`
const FooterBox = styled(Box)`
    display:flex;
    align-items:center;
    position:absolute;
    bottom:3rem;
    & :nth-of-type(2){
        font-size:1.4rem;
        margin-left:0.5rem;
        color:#8696a0;


    }
`
const EmptyChat = () => {
  return (
    <>
        <MainChatBox>
            <ImageBox>
                <img src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg" alt="emptychatImg" />
            </ImageBox>
            <TextBox>
                <Typography>WhatsApp Web</Typography>
                <Typography>Send and receive messages without keeping your phone online.<br/>
                Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                </Typography>
            </TextBox>
            <FooterBox>
                <LockIcon/>
                <Typography>End-to-end encrypted</Typography>
            </FooterBox>

        </MainChatBox>
    </>
  )
}

export default EmptyChat