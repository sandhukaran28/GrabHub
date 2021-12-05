import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import AuthContext from '../../store/Auth-context'

const Logout = () => {
    const history = useHistory();
    const cartCtx = useContext(AuthContext);
    const logout = async()=>{

        await axios.get('http://localhost:8000/auth/logout');
        await cartCtx.getLoggedIn();
        history.push('/');
    }
    return (
        <button onClick={logout}>
            Logout
        </button>
    )
}

export default Logout
