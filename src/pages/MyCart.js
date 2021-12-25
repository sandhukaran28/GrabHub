import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./MyCart.module.css";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyCart = () => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  let totalPrice = 0;

  const notify = (e) =>
    toast.success(e, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const placeOrderHandler = () => {
    cartCtx.placeOrder();
    notify("Order Placed Successfully");
  };

  return (
    <>
      <div className={styles.cart}>
        <h1>My Cart</h1>
        <hr />
        {cartCtx.cart.length === 0 ? (
          <div className={styles.empty}>
            <h3>Your Cart is Empty!</h3>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Shop Now
            </button>
          </div>
        ) : (
          <ul className={styles.cartList}>
            {cartCtx.cart.map((item) => {
              totalPrice += item.price * parseInt(item.qty);
              return (
                <li className={styles.cLi}>
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <span className={styles.itemQty}>x {item.qty}</span>
                    <p className={styles.desc}>{item.desc}</p>
                    <p className={styles.price}>${item.price}</p>
                  </div>
                  <div className={styles.cQty}>
                    <button
                      className={styles.cButton}
                      onClick={() => {
                        cartCtx.incrementItem(item.id);
                      }}
                    >
                      +
                    </button>

                    <button
                      className={styles.cButton}
                      onClick={() => {
                        cartCtx.decrementItem(item.id);
                      }}
                    >
                      -
                    </button>
                  </div>
                </li>
              );
            })}
            <li className={styles.total}>
              Total Amount: ${totalPrice}
              <span className={styles["place-order-btn"]}>
                <button onClick={placeOrderHandler}>Place Order</button>
              </span>{" "}
            </li>
          </ul>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default MyCart;
