import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

 const AuthContext = createContext();

function AuthContextProvider(props){

    const[loggedIn,setLoggedIn] = useState(undefined);


    async function getLoggedIn(){

        const loggedIn = await axios.get('http://localhost:8000/auth/isLoggedIn');
        setLoggedIn(loggedIn.data);
    }

    useEffect(()=>{
        getLoggedIn();
    },[]);

    return <AuthContext.Provider value = {loggedIn,getLoggedIn}>
    {props.children}
    </AuthContext.Provider>
}

export default AuthContext
export {AuthContextProvider}
