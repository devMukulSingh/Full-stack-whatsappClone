import React, { useContext } from 'react';
import { Drawer, Typography ,Box, } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountContext } from '../../../context/AccountProvider';
import styled from '@emotion/styled';

///////////////////Styled Components//starts//////////////////////////////////////
const StyledDrawer = {
  left: '32px',
  top: '17.5px',
  width: '442px',
  boxShadow:'none',
  height:'95vh',
}
const MainDrawerBox = styled(Box)`
  height:100%;
  width:100%;
`
const HeaderBox = styled(Box)`
  height:17%;
  background:#008069;
  display:flex;
  padding:6.5rem 0rem 0rem 0rem; 
   & > svg{
    color:white
  }
  & > p{
    font-size:1.8rem;
    color:white;
    margin-left:2.5rem;
    font-weight:500;
  }
`
const ProfileDetailsBox = styled(Box)`
  height:83%;
  background:#e7e8e9;
  display:flex;
  flex-direction:column;

`
const ProfilePhotoBox = styled(Box)`
  display:flex;
  align-items:center;
  justify-content:center;
  height:45%;
    & > img{
    
      border-radius:50%;
      width:20rem
}
`
const ProfileNameBox = styled(Box)`
  background:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:17%;
  padding-left:3rem;
  box-shadow: 0px 0px 10px 0px rgba(201,201,201,0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(201,201,201,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(201,201,201,0.75);

    & :nth-of-type(1){
    font-size:1.4rem;
    color:#008069;
    font-weight:400;
    margin-bottom:2rem
    }
    & :nth-of-type(2){
      font-size:1.6rem;
    }
`
const DisclaimerBox = styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;
    height:15%;
     & :first-of-type{
       color:#667781;
       font-size:1.4rem;
       font-weight:300;
       letter-spacing:0.3pxx
     }
     padding:0rem 2rem;
`
const ProfileAboutBox =styled(Box)`
  background:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  min-height:16%;
  padding-left:3rem;
  box-shadow: 0px 0px 10px 0px rgba(201,201,201,0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(201,201,201,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(201,201,201,0.75);

    & :nth-of-type(1){
    font-size:1.4rem;
    color:#008069;
    font-weight:400;
    margin-bottom:2rem
    }
    & :nth-of-type(2){
      font-size:1.6rem;
    }
`
///////////////////Styled Components ends////////////////////////////////////////

const DrawerBox = ( {open , setOpen} ) => {
  const { loginAccountUser } = useContext(AccountContext); 
  const handleClose = () => {
    setOpen(false);
  }

  ///////////////////JSX PART/////////////////////
  return (
    <>
      <Drawer
            open={open}
            onClose={handleClose}
            PaperProps = {{ sx:StyledDrawer }}
            style={{ zIndex:'1500'}} 
            hideBackdrop={true}
            >
            
        <MainDrawerBox>
          <HeaderBox>
            <Typography> <ArrowBackIcon fontSize='large' color='white' onClick={handleClose} sx={{cursor:'pointer'}}/> </Typography>
            <Typography >Profile</Typography>
          </HeaderBox>
          <ProfileDetailsBox>

              <ProfilePhotoBox>
                <img src={loginAccountUser.picture} alt="profile" />
              </ProfilePhotoBox>
              <ProfileNameBox>
                  <Typography>Your Name</Typography>
                  <Typography>{loginAccountUser.name}</Typography>
              </ProfileNameBox>

              <DisclaimerBox>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
              </DisclaimerBox>

              <ProfileAboutBox>
                  <Typography>About</Typography>
                  <Typography>Jai Shree Raam</Typography>
              </ProfileAboutBox>
          </ProfileDetailsBox>
        </MainDrawerBox>

      </Drawer>

    </>
  )
}

export default DrawerBox