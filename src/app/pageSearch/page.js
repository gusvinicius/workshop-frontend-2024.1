'use client'
import Header from "../components/Header"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import axios from "axios"

export default function Search () {
    const [result, setResult] = useState()
    const [busc, setBusc] = useState()

    const getList = async () => {
        try{
            const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${busc}`)
            const data = response.data
            setResult(data)
            console.log(result)
            router.push(`/movie/${result.id}`)
        }catch (error) {
            console.log(error)
        }
    }
    function pesquisa () {
        getList()
    }

    const handlechange = (event) =>{
        setBusc(event.target.value)
        console.log(busc)
    }


    return (
        <>
            <Header/>
            <main className="principal">
                <h2 className="title">PESQUISAR</h2>
                <div className="conteiner_pesquisa">
                    <input onChange={handlechange} className="entrada" type="text" placeholder="nome do filme em inglês"/>
                    <button onClick={pesquisa} className="btn">PESQUISAR</button>
                </div>
            </main>
        </>
    )
}