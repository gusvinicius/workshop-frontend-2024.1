import Link from 'next/link';
import Image from 'next/image'



export default function Header () {

    return(
        <header>
        <div>
          <h1 className='netflix'>NETFLIX</h1>
        </div>
        <nav className="navgation">
          <li> <Link className='link' href="/">INICIO</Link> </li>
          <li> <Link className='link' href="/pageMovies">FILMES</Link></li>
          <li> <Link className='link' href="/pageSearch">BUSCAR</Link> </li>
        </nav>
      </header>
    )
}