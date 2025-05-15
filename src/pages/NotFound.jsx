import React from 'react'
import { Alert } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    <section className='flex flex-col gap-10 px-5'>
        <Alert
        message="Página não encontrada!"
        description="Desculpe, a página que você procura não existe ou não foi encontrada!"
        type="error"
        showIcon
        />
        <p>Não se preocupe! Você pode voltar para nossa <span> <Link to='/' className='hover:underline text-blue-500'>página inicial</Link></span></p>
    </section>
    </>
  )
}

export default NotFound