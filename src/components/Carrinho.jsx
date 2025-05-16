import React, { useContext} from 'react'
import tenis from '../assets/tenis.svg'
import { CartContext } from '../Context/CartContext'





const Carrinho = () => {
   const { count, addToCart, removeFromCart, setCount} = useContext(CartContext)
   
   return (
    <>
  <section className='bg-white p-8'>
        <table className='w-full font-inter'>
            <thead>
                <tr className='flex text-[#474747]'>
                    <th className='flex-3 text-left'>MEU CARRINHO</th>
                    <th className='flex-1 font-medium'>QUANTIDADE</th>
                    <th className='flex-1 font-medium'>UNITÁRIO</th>
                    <th className='flex-1 font-medium'>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr className='flex border-t border-b border-[#ccc] py-5 mt-5'>
                    <td className='flex-3 flex gap-5'>
                        <div className='bg-[#E2E3FF] h-28 w-32 flex items-center justify-center rounded-sm '>
                            <img src={tenis} alt="tênis Nike" />
                        </div>
                        <div className=''>
                            <h2 className='font-bold w-60'>Tênis Nike Revolution 6 Next 
                            Nature Masculino</h2>
                            <p className='mt-[10px] mb-[5px]'><span className='text-[#8F8F8F]'>Cor:</span> Vermelho / Branco</p>
                            <p><span className='text-[#8F8F8F]'>Tamanho:</span> 42</p>
                        </div>
                    </td>
                    <td className='flex-1 text-center flex items-center flex-col justify-center gap-4'>
                        <div className=''>
                            <button disabled={count <= 0} onClick= {removeFromCart} className={`${count <= 0 ? "opacity-50 cursor-not-allowed ": "cursor-pointer" } border border-[#ccc] w-8 h-8 rounded-sm`}>-</button>
                            <span className='mx-2'>{count}</span>
                            <button onClick= {addToCart} className='border border-[#ccc] w-8 h-8 cursor-pointer rounded-sm'>+</button>
                        </div>
                        <button disabled={count == 0} onClick={()=>setCount(0)} className='text-[#474747] underline cursor-pointer'>Remover item</button>
                    </td>
                    <td className='flex-1 bg-blue-700'></td>
                    <td className='flex-1 bg-fuchsia-600'></td>
                </tr>
            </tbody>
        </table>
    </section>
    
    </>
  )
}

export default Carrinho