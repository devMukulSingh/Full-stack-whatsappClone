import React, {  createContext, useEffect } from 'react'
import { useState, useRef } from 'react';
import { io } from "socket.io-client";

export const AccountContext = createContext(null)

const AccountProvider = ( { children } ) => {

    const [loginAccountUser , setLoginAccountUser ] = useState('');
    const [contactListUser ,setContactListUser] = useState([]);
    const [senderMessage , setSenderMessage ] = useState('');
    const [messageSendFlag , setMessageSendFlag] = useState(false);
    const [activeUsers , setActiveUsers] = useState([]);
    const[ messagesArray, setMessagesArray ] = useState([]);
    const [incomingMessage, setIncomingMessage ] = useState(null);

    const socket = useRef();

    useEffect( () => {
      socket.current = io('ws://localhost:9000');
    },[])

  return (
    <>
        <AccountContext.Provider value = {{
            loginAccountUser,
            setLoginAccountUser,
            contactListUser,
            setContactListUser,
            senderMessage,
            setSenderMessage,
            messageSendFlag,
            setMessageSendFlag,
            socket,
            activeUsers,
            setActiveUsers,
            messagesArray,
            setMessagesArray,
            incomingMessage,
            setIncomingMessage


        }}>
            {children}
        </AccountContext.Provider>
    </>
  )
}

export default AccountProvider