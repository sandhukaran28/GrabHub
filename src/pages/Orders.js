import axios from 'axios'
import React, { useEffect } from 'react'

const Orders = () => {

    useEffect(()=>{

        async function getOrders(){
            try{
           const res =  await axios.get('http://localhost:8000/user/orders');
                console.log(res.data);
            }
            catch(e){
                console.log(e);
            }

        }

        getOrders();
    },[])


    return (
        <div>
            <h1>Orders</h1>
        </div>
    )
}

export default Orders