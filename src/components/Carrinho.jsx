import React, { useState } from 'react'
import tenis from '../assets/tenis.svg'

const produtos = [
    {
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    },{
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    },{
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    },{
        produto: 'K-Swiss V8 - Masculino',
        categoria: 'Tenis',
        preco: 200,
        img: tenis
    }
]



const Carrinho = () => {
    const [count, setCount] = useState(0)
    function addToCart(){
        setCount((count) => count + 1)
    }
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
                            <button disabled={count <= 0} onClick= {() => setCount(count - 1)} className={`${count <= 0 ? "opacity-50 cursor-not-allowed ": "cursor-pointer" } border border-[#ccc] w-8 h-8 rounded-sm`}>-</button>
                            <span className='mx-2'>{count}</span>
                            <button onClick= {() => setCount(count + 1)} className='border border-[#ccc] w-8 h-8 cursor-pointer rounded-sm'>+</button>
                        </div>
                        <button className='text-[#474747] underline cursor-pointer'>Remover item</button>
                    </td>
                    <td className='flex-1 bg-blue-700'></td>
                    <td className='flex-1 bg-fuchsia-600'></td>
                </tr>
            </tbody>
        </table>
    </section>
    <section className=' ml-8'>
        <h1 className='font-bold text-2xl mb-5'>Produtos Relacionados</h1>
        <ul className='flex gap-20'>
            {produtos.map((item)=> (
                <li className='border border-[#ccc] p-2'>
                    <div className='bg-[#E2E3FF] h-28 w-32 flex items-center justify-center rounded-sm '>
                            <img src={item.img} alt={item.produto} />
                    </div>
                    <div>
                        <h2>{item.categoria}</h2>
                        <h2 className='text-xs'>{item.produto}</h2>
                        <p>{item.preco}</p>
                        <button onClick={()=>addToCart(item)} className='bg-green-700 w-[80%] rounded-md'>Add</button>
                    </div>
                </li>
            ))}
        </ul>
    </section>
    </>
  )
}

export default Carrinho