import axios from 'axios';
import React from 'react'
import styles from './Register.module.css'
const Register = () => {

    const UserformSubmit = async(e)=>{

        e.preventDefault();
        console.log("here");
        const  email = e.target.elements.email.value;
        const pass = e.target.elements.pass.value;
        const verify = e.target.elements.confirm.value;
        const data ={
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
    }

    return (
        <div id={styles.register}>
            <h2>Register a New Account</h2>
            <form onSubmit={UserformSubmit} >
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
