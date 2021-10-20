import React,{useRef,useContext} from 'react'
import CartContext from '../../store/cart-context';
import style from './Food.module.css';
function Food(props) {

    const inputRef = useRef();
    const cartCtx = useContext(CartContext);

    const addtoCart =()=>{
       let item ={
           id:props.id,
           name:props.name,
           desc:props.desc,
           price:props.price,
           qty:inputRef.current.value
       }
       cartCtx.addItemHandler(item);
    }

    return (
        <li className={style.li}>
        <div className={style.food}>
        <p className={style.name}>{props.name}</p>
            <p className={style.desc}>{props.desc}</p>
            <p className={style.price}>${props.price}</p>
        </div>
        <div className="qty">
        <div>
            <label >Quantitiy</label>
            <input type="number" ref={inputRef} min="1" defaultValue="1"/>
            </div>
            
            <button onClick={addtoCart}>Add</button>
            
        </div>
        </li>
    )
}

export default Food
