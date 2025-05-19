import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    function addToCart() {
        setCount((count) => count + 1)
    }
    function removeFromCart() {
        setCount((count) => count -1)
    }function removeItem() {
       setCount(0)
    }
    return (
        <>
            <CartContext.Provider value ={{count, addToCart, removeFromCart, setCount}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export { CartContext, CartProvider }