import React, { createContext, useEffect, useState } from 'react'

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
const [produtos, setProdutos] = useState([])
useEffect(()=>{

    fetch('http://localhost:3000/produtos')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erro ${res.status}: ${res.statusText}`)

               
            }

            return res.json()
        })
        .then(data =>
            setProdutos(data)
        )
        .catch(err =>
            console.error("erro ao buscar produtos", err)
        )
   
},[])
return (
        <>

            <ProductsContext.Provider value={produtos}>
                {children}
            </ProductsContext.Provider>

        </>
)   
}

export { ProductsContext, ProductsProvider }
