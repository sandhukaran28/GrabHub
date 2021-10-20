import React from 'react'
import Food from './Food';
import styles from './FoodList.module.css';
function FoodList({foods}) {
    return (
        <ul className={styles['food-list']}>
       { foods.map((food)=>{
            return <Food
             id={food._id} 
             name={food.name}
             desc={food.desc}
             price={food.price}
             />
        }) }
        </ul>
    )
}

export default FoodList
