'use client'
import { useState, useEffect } from "react"
import axios from "axios"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Header from "./Header"
import MovieCard from "./MovieCard"

export default function Lista ({pesquisa, nome}) {
    const [lista, setLista] = useState([])

    const getList = async () => {
        try{
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${pesquisa}`)
            const data = response.data
            setLista(data)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getList()
    }, [])

    return(
        <>
            <div className="conteiner_movies">
                <h2 className="tag">{nome}:</h2>
                <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={3}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                >
                    {lista.length === 10 ? (
                        <>
                        {console.log(lista)}
                        {lista.map((item, index) => (
                            <>
                                <SwiperSlide key={index}>
                                <MovieCard id={item.show.id} name={item.show.name} poster={item.show.image.medium} />
                                </SwiperSlide>
                            </>
                        ))}
                        </>
                    ) : (
                        <p>carregando...</p>
                    )}
                </Swiper>
            </div>
    </>
    )

}