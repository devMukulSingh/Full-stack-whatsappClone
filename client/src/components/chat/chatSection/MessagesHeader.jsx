import React, { useContext } from 'react'
import { Box, Typography ,styled } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import profileImg from "../../../images/profileImg.jpg";
import { AccountContext } from '../../../context/AccountProvider';
/////////////////////////////////////

const MainBox = styled(Box)`
    height:9vh;    
    display:flex;
    align-items:center;
    background-color:#F0F2F5;
    padding:1rem 2rem;
    white-space:nowrap;

`
const ProfileBox = styled(Box)`

`
const IconsBox = styled(Box)`
    margin-left:auto;
    & :nth-of-type(1){   
        color:#54656F;
        margin-right:2rem;
        font-size:2.5rem;
    }
    & :nth-of-type(2){
        color:#54656F;
        font-size:2.5rem;
    }
    
`
const ProfileImg = styled('img')({
    width:'4rem',
    height:'4rem',
    borderRadius:'50%',
    marginRight:'1rem',

})
const ProfileName = styled(Typography)`
    font-size:1.6rem;
    font-weight:400;
`
const Status = styled(Typography)`
    font-size:1.2rem;
    color:#54656f;
`
const MessagesHeader = ( {contactListUser}) => {
    const { activeUsers } = useContext(AccountContext);
  return (
    <>
        <MainBox>
            <ProfileImg src={contactListUser.picture} alt="profilePhoto" />
            <ProfileBox>
                <ProfileName>{contactListUser.name}</ProfileName>
                <Status>{activeUsers?.find( user => user.sub === contactListUser.sub) ? 'Online' : 'Offline' }</Status>
            </ProfileBox>
            <IconsBox>
                <SearchIcon  />
                <MoreVertIcon  />
            </IconsBox>
        </MainBox>
    
    </>
  )
}

export default MessagesHeader