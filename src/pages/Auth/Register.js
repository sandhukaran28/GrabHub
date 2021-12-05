import axios from 'axios';
import React,{useContext} from 'react'
import { useHistory } from 'react-router';
import AuthContext from '../../store/Auth-context';
import styles from './Register.module.css'
const Register = () => {

    const history = useHistory();
    const cartCtx = useContext(AuthContext);   
    const UserformSubmit = async(e)=>{

        e.preventDefault();
        console.log("here");
        const name = e.target.elements.name.value;
        const  email = e.target.elements.email.value;
        const pass = e.target.elements.pass.value;
        const verify = e.target.elements.confirm.value;
        const data ={
            name:name,
            email:email,
            password:pass,
            passwordVerify:verify

        }
        await axios.post('http://localhost:8000/auth/new',data)
        .then(()=>{
            console.log("done");
        })
        .catch((e)=>{
            console.log(e);
        })
        await cartCtx.getLoggedIn();
    history.push('/');
    }

    return (
        <div id={styles.register}>
            <h2>Register a New Account</h2>
            <form onSubmit={UserformSubmit} >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input  type="email" name="email" id="email"  placeholder="Email"/>
                <label htmlFor="pass">Password</label>
                <input  type="password" name="pass" id="pass" placeholder="Password" />
                <label htmlFor="verify">Confirm Your Password</label>
                <input type="password" name="confirm" id="confirm" placeholder="Confirm Your Password" />
                <button type="submit">Register</button>
            </form>
           
        </div>
    )
}

export default Register
