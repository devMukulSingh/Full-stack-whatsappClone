import React, { useContext } from 'react'
import { Dialog, Typography ,Box, List, ListItem , Divider} from '@mui/material';
import styled from '@emotion/styled';
import QrCode from "../images/qrCode.png"; 
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import  { AccountContext } from '../context/AccountProvider';
import { addUser } from '../api/api';

////////////////MATERIAL UI CSS///////////////////////

const MainDialogBox = {
    padding:'7rem 1rem',
    backgroundColor:'white',
    height:'90vh',
    width:'100rem',
    maxWidth:'100%',
    margin:'13rem 0rem 0rem 0rem'
}
const InnerBox = styled(Box)`
    display:flex;
    justify-content:space-around;
    margin-bottom: 4rem;
`
const QrCodeImg = styled('img') ({
    width: '30vmin',
})
const Heading = styled(Typography)`
    font-size:2.8rem;
    font-weight:300;
    margin-bottom:3rem;
    color:#4a4a4a;
`
const ListStyled = styled(List)`
    & > li {
        line-height:3rem;
        font-size:2rem;
        color:#1e272e;
        font-weight:400;
    }
`
const GoogleLoginBox = styled(Box)`
    display:flex;
    justify-content:center;
    margin: 3rem 0rem;
`

//////////////FUNCTIONS/////////////////////////////////
const LoginDialog = () => {

    const{ setLoginAccountUser } = useContext(AccountContext);

    const onLoginSuccess = async(res) =>{  
        const credentials = jwt_decode(res.credential);
        setLoginAccountUser(credentials);
        await addUser(credentials);
    }
    const onLoginError = (res) => {
        console.log(res);
    }


 ////////////////////JSX PART////////////////////////////   
  return (
      

            <Box>
               <Dialog
               open = {true} 
               PaperProps={{sx : MainDialogBox}}
               hideBackdrop={true}>
                <InnerBox>
                    <Box>
                        <Heading>Use WhatsApp on your computer</Heading>
                        <ListStyled>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                            <ListItem>3. Tap on Link a Device</ListItem>
                            <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
        
                        </ListStyled>
                    </Box>
                    <Box>
                        <QrCodeImg src={QrCode} alt="QrCode" />
                    </Box>
                </InnerBox>
        
                <Divider variant='middle' />
        
                <GoogleLoginBox>
                    <GoogleLogin
                        onSuccess= { onLoginSuccess }
                        onError = { onLoginError }/>;
                </GoogleLoginBox>
        
               </Dialog>
        
            </Box>

    
  )
}

export default LoginDialog;