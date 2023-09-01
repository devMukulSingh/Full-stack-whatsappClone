import React, { useContext } from 'react'
import { Box , AppBar , styled ,Typography } from '@mui/material';
import LoginDialog from './LoginDialog.jsx';
import logo from "../images/logo.png";
import  { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/chatMainDialog/ChatDialog.jsx';

/////////////////////////////////////////////////////////////////
const Header = styled(AppBar)`
    background-color: #00a884;
    height:220px;
    box-shadow:none;
`
const Component = styled(Box)`
    background-color: #eae6df;
    height:100vh;
    display:flex;
    justify-content:center;
    overflow:hidden;
`
const LogoBox = styled(Box)`
  display:flex;
  align-items:center;
  // position:absolute;
  margin-left:270px;
  margin-top:30px;
`
const LogoImg = styled('img')({
  width:'4rem',
  marginRight:'1rem'
})
const LogoName = styled(Typography)`
  font-weight:500;
  font-size:1.6rem
`
const Messenger = () => {

  const{ loginAccountUser } = useContext(AccountContext);

  return (
    <Component>
      {
        loginAccountUser ? <ChatDialog/> :
          <>
        <Header>
          <LogoBox>
            <LogoImg src={logo} alt="logo" />
            <LogoName variant="h5">WHATSAPP WEB</LogoName>
          </LogoBox>
        </Header>
      <LoginDialog/>    
        </>
        }
        </Component>
  )
}

export default Messenger