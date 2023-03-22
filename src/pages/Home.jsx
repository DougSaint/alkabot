import React from 'react'
import ListPosts from '../components/ListPosts';


export default function Home() {

    
  return (
    <main>
        <h1 className="text-center text-[18px] ]md:text-[32px] mt-5 text-[#222328]">Seja bem vindo ao blog</h1>
        <ListPosts page = { 0 }/>
        <div></div>
    </main>
  )
}
