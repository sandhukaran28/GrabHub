import React,{useState} from 'react'
import { useLocation } from 'react-router';
import axios from 'axios';
import styles from './AddFood.module.css';
const EditFood = () => {
    const locaton = useLocation();
    const{foodId,name,desc,price} = locaton.state;
    const[Fname,setName] = useState(name);
    const[Fdesc,setDesc] = useState(desc);
    const[Fprice,setPrice] =useState([price]);


    const editFood = (e)=>{
        e.preventDefault();
        const  name = e.target.elements.name.value;
        const  desc = e.target.elements.desc.value;
        const price = e.target.elements.price.value;
        axios.patch('http://localhost:8000/editFood',{id:foodId, name:name,desc:desc,price:price}).then(()=>{
            alert('Food Edited Successfully');
        })
        .catch((e)=>{
            alert("something went wrong");
        })
        document.getElementById('food-form').reset();
    }
    const nameChangeHandler = (e)=>{
        setName(e.target.value);  
    }
    const descChangeHandler = (e)=>{
        setDesc(e.target.value);  
    }
    const priceChangeHandler = (e)=>{
        setPrice(e.target.value);  
    }
    

    return (
        <div className={styles.outer}>
             <h1>Edit Food</h1>
        <form action="" onSubmit={editFood} id="food-form" >

        <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={Fname} onChange={nameChangeHandler} className={styles.addInput} required="true"/>
        
        <label htmlFor="desc">Description:</label>
            <textarea type="text" name="desc" id="desc" value={Fdesc} onChange={descChangeHandler}  className={styles.txtArea}  rows={3} required="true"/>
        
    
        <label htmlFor="price">Price:</label>
            <input type="number" name="price" id="price" value={Fprice} onChange={priceChangeHandler} className={styles.addInput} required="true"/>
           <button type="submit">Edit</button>
        
        </form>
    </div>
    )
}

export default EditFood
