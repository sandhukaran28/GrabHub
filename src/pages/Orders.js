import axios from "axios";
import React, { useEffect } from "react";

const Orders = () => {
  useEffect(() => {
    async function getOrders() {
      try {
        const res = await axios.get("http://localhost:8000/user/orders");
        let items = [];
        const orders = res.data;
        for (let order of orders) {
          items.push(order.orderedItem);
        }
        console.log(items);
      } catch (e) {
        console.log(e);
      }
    }

    getOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
};

export default Orders;
