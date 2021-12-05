    import React,{useContext} from 'react'
    import styles from './Register.module.css'
    import { useHistory } from 'react-router'
    import axios from 'axios';
    import AuthContext from '../../store/Auth-context';

    const Login = () => {

        const history = useHistory();
        const cartCtx = useContext(AuthContext);        
    const UserformSubmit = async(e)=>{

    e.preventDefault();
    const  email = e.target.elements.email.value;
    const pass = e.target.elements.pass.value;
    const data ={
        email:email,
        password:pass,
    }
    await axios.post('http://localhost:8000/auth/login',data)
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
            <h2>Log In</h2>
            <form onSubmit={UserformSubmit} >
                <label htmlFor="email">Email</label>
                <input  type="email" name="email" id="email"  placeholder="Email"/>
                <label htmlFor="pass">Password</label>
                <input  type="password" name="pass" id="pass" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
            
        </div>
        )
    }

    export default Login
