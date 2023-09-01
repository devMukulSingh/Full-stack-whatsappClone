import React, { useContext ,useState } from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import Search from './Search';
import {styled ,Box} from '@mui/material';
import MorevertIcon from './MorevertIcon';
import { AccountContext } from '../../../context/AccountProvider';
import DrawerBox from './DrawerBox';
import Conversation from './Conversation';
/////////////////////////////////////////
const MenuIconsBox = styled(Box)`
    background-color:#ededed;
    height:6rem;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0rem 2rem;
`
const Profile = styled(Box)`
 
`
const MenuIcons = styled(Box)`
    display:flex;
    justify-content:space-between;
`
const ProfileImg = styled('img') ({
    borderRadius:'50%',
    width:'4rem',
    cursor:'pointer'

}) 
////////////////////////////////////////////////
const ContactSection = () => {
    const { loginAccountUser } = useContext(AccountContext);
    const[ open,setOpen ] = useState(false);

    const handleClick = () => { 
      setOpen(true);
    }

  return (
    <>

        <MenuIconsBox>  
            <Profile><ProfileImg src={loginAccountUser.picture} alt='profilepic' onClick={() => handleClick()}/></Profile>
            <MenuIcons>
                <DonutLargeIcon fontSize="large" sx={{color:'#54656f'}}/>
                <ChatIcon fontSize="large" sx={{color:'#54656f', margin: '0rem 2.5rem 0rem 2.5rem' }} />
                <MorevertIcon />
            </MenuIcons>
        </MenuIconsBox>
     
        <Search/>
     
        <DrawerBox open = {open} setOpen={setOpen}/>

        <Conversation/>
        
    </>
  )
}

export default ContactSection