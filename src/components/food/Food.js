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
        <div className={style.card}>
        <img width="100%" src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg" alt="food" />
        <h2>{props.name}</h2>
        <span>{props.desc}</span>
        <span>${props.price}</span>
        <div>
        
        <div className={style.options}>
          <div>
          <label >Qty</label>
            <input type="number" ref={inputRef} min="1" defaultValue="1"/>
          </div>
            <button onClick={addtoCart}>Add</button>
            </div>
            
        </div>
        </div>
    )
    }

    export default Food
