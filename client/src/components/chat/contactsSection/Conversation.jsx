import React, { useContext, useEffect, useState } from 'react'
import { getUserFromApi } from '../../../api/api'
import {AccountContext} from "../../../context/AccountProvider";
import SingleConversation  from "./SingleConversation";


/////////////////////Functions STARTS///////////////////////////////////////////
const Conversation = () => {
  const { loginAccountUser,socket ,setActiveUsers} = useContext(AccountContext);
  const[ allUsers,setAllUsers ] = useState([]);

//Getting all the available Users from DB using api and storing in User state(Array) once only at componentDidmount
  useEffect( () => {
    const fetchData = async() => {
      let res = await getUserFromApi();
      setAllUsers(res);
      return res;
    } 
    fetchData();
  },[]);

//////////////////SOCKET SECTION starts//////////////

// adding the logged in user(online User) into users[] arry in index.js(socket) and getting online Users from index.js and storing 
// in ActiveUsers(state) array at componentDidUpdate - loginAccountUser
useEffect( () => {
  socket.current.emit('addUsers', loginAccountUser);  //add the active users into array as soon as the user logins , called at index.js(socket)
  socket.current.on('getUsers',user => {    //getUsers will get Active user from the backend of socket.io using current.on method
    setActiveUsers(user);
  })
},[loginAccountUser]);

//////////////////SOCKET SECTION ends//////////////
 
//////////////////////JSX PART starts////////////////////////////
  return(
    <>
    {
      allUsers && allUsers.map( (user,index)=> {
        return(
          user?.sub !== loginAccountUser?.sub &&
          <SingleConversation user={user} key={index}/>
        )
      })
    }
  </>
)}
export default Conversation;
//////////////////////JSX PART ends////////////////////////////
