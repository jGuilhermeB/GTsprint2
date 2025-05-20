import { useContext } from 'react'
import tenis from '../assets/tenis.svg'
import { CartContext } from '../Context/CartContext'
import { ProductsContext } from '../Context/ProductsContext'

const produtos = [
    {
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    }, {
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    }, {
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    }, {
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    }

]

const ProductCard = () => {
    const produtos = useContext(ProductsContext)
    const { addToCart } = useContext(CartContext)
    return (
        <section className=' ml-8'>
            <h1 className='font-bold text-2xl mb-5'>Produtos Relacionados</h1>
            <ul className='flex gap-20'>
                {produtos.map((item) => (
                    <li key={item.id} className='border border-[#ccc] p-2'>
                        <div className='bg-[#E2E3FF] h-28 w-32 flex items-center justify-center rounded-sm '>
                            <img src={item.img} alt={item.produto} />
                        </div>
                        <div>
                            <h2>{item.categoria}</h2>
                            <h2 className='text-xs'>{item.produto}</h2>
                            <p>{item.preco}</p>
                            <button onClick={addToCart} className='bg-green-700 w-[80%] rounded-md'>Add</button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProductCard
