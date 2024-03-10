'use client'
import { useState, useEffect } from "react"
import axios from "axios"

import Header from "@/app/components/Header"


export default function Detalhes ({ params }) {
    var sinopse = ''
    const parametro = params.id
    const [serieDetail, setSerieDetail] = useState([])

    const get = async () => {
        try{
            const response = await axios.get(`https://api.tvmaze.com/shows/${parametro}`)
            const data = response.data
            setSerieDetail(data)
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        get()
    }, [])
    function tratativa (sinopse) {
        var sinopse_text = sinopse
        if (sinopse_text != null){
            var sinopse_tratada1 = sinopse_text.replace("<p>", " ")
            var sinopse_tratada2 = sinopse_tratada1.replace("</p>", "")
            var sinopse_tratada3 = sinopse_tratada2.replace("<b>", " ")
            var sinopse_tratada4 = sinopse_tratada3.replace("</b>", "")
            return sinopse_tratada4
        }
    }


    return(
        <>
            <Header />
            <main className="principal">
                {serieDetail.length === 0 ? (
                            <p>carregando...</p>
                        ) : (
                            <>
                            {console.log(serieDetail)}
                                <div className="detail">
                                    <h1 className="title">{serieDetail.name}</h1>
                                    <div className="centraliza">
                                        <img src={serieDetail.image.medium} />
                                    </div>
                                    <div className="centraliza">
                                        <div className="info">
                                            <div className="conteiner_extra">
                                                <div className="extra">
                                                    <h4>ANO DE LANÇAMENTO:</h4>
                                                    <p>{serieDetail.premiered}</p>
                                                </div>

                                                <div className="extra">
                                                    <h4>GENEROS:</h4>
                                                    <p>{serieDetail.genres[0]} e {serieDetail.genres[1]}</p>
                                                </div>
                                            </div>

                                            <div className="conteiner_extra">
                                                <div className="extra">
                                                    <h4>SITUAÇÃO:</h4>
                                                    <p>{serieDetail.status}</p>
                                                </div>

                                                <div className="extra">
                                                    <h4>AVALIAÇÃO:</h4>
                                                    <p>{serieDetail.rating.average}</p>
                                                </div>
                                            </div>

                                            <div className="centraliza">
                                                <div className="sinopse">
                                                    <h4 className="title">SINOPSE</h4>
                                                    <p>{sinopse = tratativa(serieDetail.summary)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {}
                            </>
                        )}
            </main>
        </>
    )
}