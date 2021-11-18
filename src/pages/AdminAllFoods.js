        import axios from 'axios';
        import React, { useEffect, useState } from 'react'
        import { Link } from 'react-router-dom'
    import AdminList from '../components/food/AdminList';
        import styles from './AdminAllFoods.module.css';
        const AdminAllFoods = () => {

        const[foods,setfood] = useState([]);

        useEffect(()=>{

            async function getFoods(){

                try{
                    
                    const res = await axios.get('http://localhost:8000/allfoods');
                    setfood(res.data);
                    console.log(res.data);
                }
                catch(e){

                    console.log(e);
                }
            }

            getFoods();
        },[])

        return (
            <div>
                <Link to="/addFood"><button>Add New Food</button></Link>
                <div  id={styles.adminDiv}>
                <AdminList foods={foods} />
                </div>
            </div>
        )
        }

        export default AdminAllFoods
