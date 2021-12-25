import axios from "axios";
import React, { useState, useEffect } from "react";
import FoodList from "../components/food/FoodList";
import Banner from "../assets/banner.png";
import styles from "./AllFoods.module.css";

function AllFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function getFoods() {
      try {
        const res = await axios.get("http://localhost:8000/allfoods");
        setFoods(res.data);
      } catch (e) {
        console.log(e);
      }
    }

    getFoods();
  }, []);

  return (
    <div>
      <section className={styles.imageSecton}>
        <img src={Banner} alt="imageFood" />
      </section>
      <div className={styles.menu}>
        <h3 className={styles.heading}>Today's Special</h3>
        <hr />
        <FoodList foods={foods} />
      </div>
    </div>
  );
}

export default AllFoods;
