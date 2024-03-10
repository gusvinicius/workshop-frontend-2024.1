'use client'
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header"
import Lista from "./components/Lista";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="principal">
        <div className="conteiner_text">
        <h2 className="title_home">SÓ NA NETFLIX</h2>
          <p className="text">Na Netflix você acha conteúdo original incrível, que não pode ser encontrado em nenhum outro lugar. Filmes, séries, especiais... Todos feitos especialmente para você!</p>
        </div>

        <Lista pesquisa="hero" nome= "DESTAQUES" />

      </main>
    </>
  );
}
