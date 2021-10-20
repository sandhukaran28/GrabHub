import React,{useContext} from 'react'
import CartContext from '../store/cart-context'
import styles from './MyCart.module.css'


const MyCart = () => {

    const cartCtx = useContext(CartContext);
    const cart = cartCtx.cart;
    let totalPrice = 0;

    // if(cart.length === 1){
    //     totalPrice = cart[0].price*cart[0].qty;
    // }
    // else if (cart.length>1) {
    //     totalPrice = cart.reduce((prev, curr) =>{
    //         let p = prev.price* parseInt(prev.qty) + curr.price* parseInt( curr.qty);
    //         console.log('p: '+p);
    //         return parseFloat(p);
    //     },0 );
    // }

  

    return (
        <div className={styles.cart}>
            <h1>My Cart</h1>
            <ul>
               { cartCtx.cart.map((item)=>{
                  totalPrice+=item.price*parseInt(item.qty);
                   return <li className={styles.cLi}>
                        <div>
                        <p className={styles.name}>{item.name}</p>
                         <span className={styles.itemQty}>x {item.qty}</span>
                        <p className={styles.desc}>{item.desc}</p>
                        <p className={styles.price}>${item.price}</p>
                        </div>
                        <div className={styles.cQty}>
                        <button className={styles.cButton} onClick={()=>{cartCtx.incrementItem(item.id)}}>+</button>
                    
                        <button className={styles.cButton} onClick={()=>{cartCtx.decrementItem(item.id)}}>-</button>
                        </div>
                    </li>
                })}
                <li className={styles.total}>Total Amount: ${totalPrice}</li>
            </ul>
        </div>
    )
}

export default MyCart
