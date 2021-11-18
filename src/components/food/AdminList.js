import React from 'react'
import styles from './AdminList.module.css'
import AdminFood from './AdminFood'
const AdminList = ({foods}) => {
    return (
        <ul className={styles['food-list']}>
       { foods.map((food)=>{
            return <AdminFood
             id={food._id} 
             name={food.name}
             desc={food.desc}
             price={food.price}
             />
        }) }
        </ul>
    )
}

export default AdminList
