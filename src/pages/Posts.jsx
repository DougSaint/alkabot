import React from 'react'
import { useParams } from 'react-router-dom'
import ListPosts from '../components/ListPosts';

export default function Posts() {
    const { page } = useParams();
   
  return (
    <div>
        <h1 className='text-center text-[18px] ]md:text-[32px] mt-5 text-[#222328] dark:text-slate-200'> Exibindo a pagina {page} </h1>
        <ListPosts page = {page}/>
    </div>
  )
}
