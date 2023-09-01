import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
///////////////////////////////////////////////////////////

const MenuOption = styled(MenuItem)`
    font-size:1.4rem;
    padding: 1rem 7rem 1rem 2rem;
    display:flex;
    align-item:flex-start;
    letter-spacing:0.5px;
    font-weight:300;
`
const MorevertIcon = () => {

    const[ open, setOpen ] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
  return (
    <>
        <MoreVertIcon  fontSize="large" sx={{color:'#54656f'}} onClick={handleClick}/>
        <Menu 
            anchorEl={open}
            keepMounted
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical :'bottom',
                horizontal: 'center'
            }}
            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
            >
            <MenuOption onClick={handleClose}>New Group</MenuOption>
            <MenuOption onClick={handleClose}>Settings</MenuOption>
            <MenuOption onClick={handleClose}>Logout</MenuOption>


          </Menu>
    
    </>
  )
}

export default MorevertIcon