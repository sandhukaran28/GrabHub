import React from 'react'
import { Link } from 'react-router-dom'

const AdminAllFoods = () => {
    return (
        <div>
           <Link to="/addFood"><button>Add New Food</button></Link>
        </div>
    )
}

export default AdminAllFoods
