import React, { useRef, useContext } from "react";
import CartContext from "../../store/cart-context";
import style from "./Food.module.css";
import AuthContext from "../../store/Auth-context";
import { useHistory } from "react-router-dom";
function Food(props) {
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.loggedIn;
  let history = useHistory();

  const addtoCart = () => {
    if (!loggedIn) {
      history.push("/login");
      return;
    }

    let item = {
      id: props.id,
      name: props.name,
      desc: props.desc,
      price: props.price,
      qty: inputRef.current.value,
      image: props.image,
    };
    cartCtx.addItemHandler(item);
    const msg = `${inputRef.current.value} ${props.name} added to your cart`;
    alert(msg);
  };

  return (
    <div className={style.card}>
      <img
        width="100%"
        height="180px"
        className={style.foodImg}
        src={props.image}
        alt="food"
      />
      <div className={style.details}>
        <h4>{props.name}</h4>
        <hr />
        <span className={style.desc}>{props.desc}</span>
        <span className={style.price}>&#8377;{props.price}</span>
        <div>
          <div className={style.options}>
            <div>
              <label>Qty</label>
              <input type="number" ref={inputRef} min="1" defaultValue="1" />
            </div>
            <button onClick={addtoCart}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
