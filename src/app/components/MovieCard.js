import { useRouter } from 'next/navigation'
import Link from 'next/link';


export default function MovieCard({id, poster, name}) {
    return(
        <div className="conteiner_card">
            <div className="card">
                <form className="conteiner_imagem">
                    <Link href={`/movie/${id}`}>
                        <img src={poster} />
                    </Link>
                    <h3 className="title">{name}</h3>
                </form>
            </div>
        </div>
    )
}

/*<div className="conteiner_info">
<h3 className="title">{name}</h3>
<div className="conteiner_sinopse">
    <p className="text_sinopse">{sinopse_tratada4}</p>
</div>
</div>*/