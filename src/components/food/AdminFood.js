import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import style from './Food.module.css';
const AdminFood = (props) => {

    const  deleteFood = async(e)=>{
        
        await axios.delete(`http://localhost:8000/delete/${props.id}`);
        console.log('sent');
        window.location.reload(false);
    }

    return (
        <li className={style.li}>
        <div className={style.food}>
        <p className={style.name}>{props.name}</p>
            <p className={style.desc}>{props.desc}</p>
            <p className={style.price}>${props.price}</p>
        </div>
        <div>
            <button onClick={deleteFood}>Delete</button>
            <Link  exact to={{
            pathname:"/editFood", state:{
                foodId:props.id,
                name:props.name,
                desc:props.desc,
                price:props.price
          }}}><button>Edit</button></Link>
        </div>
        </li>
    )
}

export default AdminFood
