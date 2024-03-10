'use client'
import { useState, useEffect } from "react"
import axios from "axios"


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Header from "../components/Header"
import MovieCard from "../components/MovieCard"
import Lista from "../components/Lista";



export default function Movies () {
    const [listCom, setListCom] = useState([])

    const getList = async () => {
        try{
            const response = await axios.get("https://api.tvmaze.com/search/shows?q=girls")
            const data = response.data
            setListCom(data)
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getList()
    }, [])





    return (
        <>
            <Header/>
            <main className="principal">
                <h2 className="title">CATALOGO DE FILMES</h2>

                <div className="conteiner_movies">
                    <h2 className="tag">COMEDIAS:</h2>
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
                        {listCom.length < 10 ? (
                            <p>carregando...</p>
                        ) : (
                            <>
                            {console.log(listCom)}
                            {listCom.map((item, index) => (
                                <>
                                    <SwiperSlide key={index}>
                                        <MovieCard id={item.show.id} name={item.show.name} poster={item.show.image.medium} />
                                    </SwiperSlide>
                                </>
                                ))}
                            </>
                        )}
                    </Swiper>
                </div>
                <Lista pesquisa="car" nome="CARROS" />
                <Lista pesquisa="war" nome="GUERRA" />
            </main>
        </>
    )
}