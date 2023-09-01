import React, { useContext, useState } from 'react'
import { Box, styled ,InputBase } from "@mui/material";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { AccountContext } from '../../../context/AccountProvider';
import { useEffect } from 'react';
import { addFileApi } from '../../../api/api'; 

const MainBox = styled(Box)`
    background-color:#f0f2f5;
    height:9vh;
    display:flex;
    align-items:center;
    padding:1rem 2rem;
    gap:10px;

        & :nth-child(2){
            font-size:3rem;
            color:#54656F
        }
        & :nth-child(5){
            font-size:3rem;
            color:#54656F
        }

`
const InputMessage = styled(InputBase)`
    background-color:#fff;
    width:90%;
    height:4rem;
    padding:0.5rem 1.5rem;
    border-radius:1rem;
    font-size:1.4rem ;
    color:black ;
    font-weight:400;
`
const MessagesFooter = ( { messageSend ,file,setFile } ) => {
    useEffect( () => {
        const addFile = async() => {
            try {
                if(file){
                   const data = new FormData();
                   data.append("file",file);
                   await addFileApi(data);
                   console.log(data);
                }
            } catch (error) {
                console.log(`error in addFile ${error}`);
            }
        }
        addFile();
    },[file])

    const { senderMessage, setSenderMessage } = useContext(AccountContext);
    const addFileBtn = (e) => {
        setFile(e.target.files[0]);
        setSenderMessage(e.target.files[0].name)
    }
  return (
    <MainBox>
        <EmojiEmotionsOutlinedIcon sx={{ fontSize:'3rem',color:'#54656f'}}/>
        <label htmlFor="fileInput">
            <AddOutlinedIcon style={{fontSize:'3rem', cursor:'pointer'}}/>
        </label>
        <form action="file/upload" method = "POST" enctype="multipart/form-data">
            <input type="file" id="fileInput" name='file' style={{display:'none'}} onChange={ addFileBtn }/>
        </form>
        <InputMessage placeholder='Type a message' onChange={ (e) => setSenderMessage(e.target.value) }
         onKeyDown={ (e) => messageSend(e) }
         value={senderMessage}/>
        <MicIcon/>
    </MainBox>
  )
}

export default MessagesFooter