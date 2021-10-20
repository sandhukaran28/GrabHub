import React, {
    createContext,
    useState
} from 'react'

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addItemHandler: (item) => {},
    incrementItem: (itemId) => {},
    decrementItem: (itemId) => {},
    placeOrder: () => {}
})




export const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addItemHandler = (item) => {
        setCart([...cart, item]);
        console.log(cart);

    }
    const incrementQtyHandler = (itemId) => {
        setCart((prev)=>{
            return prev.map((food)=> food.id===itemId? {...food,qty:parseInt(food.qty)+1}:{...food});
        })

    }
    const decrementQtyHandler = (itemId) => {
        setCart((prev)=>{
            return prev.map((food)=> food.id===itemId? {...food,qty:parseInt(food.qty)>1?parseInt(food.qty)-1:food.qty}:{...food});
        })
    }

    const placeOrderHandler = (itemId) => {

    }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addItemHandler: addItemHandler,
        incrementItem: incrementQtyHandler,
        decrementItem: decrementQtyHandler,
        placeOrder: placeOrderHandler
    }

    return ( <
        CartContext.Provider value = {
            context
        } > {
            props.children
        } <
        /CartContext.Provider>
    )
}

export default CartContext