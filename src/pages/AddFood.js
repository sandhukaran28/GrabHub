import axios from 'axios';
import React from 'react'
import styles from './AddFood.module.css';
const AddFood = () => {

    const addFood = (e)=>{

        e.preventDefault();
        console.log('submitted');
        const  name = e.target.elements.name.value;
        const  desc = e.target.elements.desc.value;
        const price = e.target.elements.price.value;
        document.getElementById('food-form').reset();
        axios.post('http://localhost:8000/addFood',{name:name,desc:desc,price:price}).then(()=>{
            alert('Food Added Successfully');
        })
        .catch((e)=>{
            alert("something went wrong");
        })
    }

    return (
        <div className={styles.outer}>
            <h1>Add new Food</h1>
            <form action="" onSubmit={addFood} id="food-form">
    
              <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" className={styles.addInput} required="true"/>
             
               <label htmlFor="desc">Description:</label>
                <textarea type="text" name="desc" id="desc" className={styles.addInput} rows={3} required="true"/>
             
          
              <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" className={styles.addInput} required="true"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddFood
