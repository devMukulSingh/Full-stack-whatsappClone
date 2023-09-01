import axios from 'axios';

const url = 'http://localhost:8000' ;

export const addUser = async(data) =>{
    try {
        await axios.post(`${url}/add`,data);
    } catch (error) {
        console.log(error);
    }
}

export const getUserFromApi = async( ) => {
    try {
        let res = await axios.get(`${url}/users`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const setConversationApi = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`,data);
    } catch (error) {
        console.log(error);
    }
}

export const getConversationApi = async (data) => {
    try {
        let res = await axios.post(`${url}/conversation/get`,data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const addMessageApi = async(data) => {
    try {
        let res = await axios.post( `${url}/message/add`,data);
        return res.data;
        
    } catch (error) {
            console.log(error);
    }   
}

export const getMessageApi = async(id) => {
   try {
     let res = await axios.get(`${url}/message/get/${id}`);
     return res.data;
   } catch (error) {
        console.log(error);
   }
}

export const addFileApi = async(data) => {
    try {
         return await axios.post(`${url}/file/upload`,data ,{
            headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log(data);

    } catch (error) {
            console.log(`Error In addFileApi ${error}`);
    }
}