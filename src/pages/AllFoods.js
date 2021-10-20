import axios from 'axios';
import React,{useState,useEffect} from 'react'
import FoodList from '../components/food/FoodList';
import MealsImage from '../assets/meals.jpg';
import styles from './AllFoods.module.css';

function AllFoods() {


    const[foods,setFoods] =useState([]);

    useEffect(()=>{

        async function getFoods(){

            try{
                const res = await axios.get('http://localhost:8000/allfoods');
            console.log(res.data);
            setFoods(res.data);
            }
            catch(e){
                console.log(e);
            }
        }

        getFoods();


    },[]);


    return (
        <div>
          <section className={styles.imageSecton}>
          <img src={MealsImage} alt="imageFood" />
          </section>
            <FoodList foods={foods}/>
        </div>
    )
}

export default AllFoods
