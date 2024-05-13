import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import MoviesBox from "../components/MoviesBox";

import '../css/movies.css'

const moviesUrl = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'fc2c997c85e6fbf7c40991e349f89ca9';

function Search(){

  //desestruturando o metodo useSearchParams
  const [searchParams]:any = useSearchParams();

  //variavel com as lista dos filmes
  const [movies, updtMovies] = useState<any[]>([]);

  //pegando o valor do parametro 'q' na url
  const query = searchParams.get('q');

  async function getSearchMovies(url:string){

    //ler a api e tranfromar em json
    await fetch(url)
    .then(async e=>await e.json())
    .then((m)=>{
      updtMovies(m.results)
    }).catch((e)=>{console.error(e)})
    
  }

  //use effect para chamar a funcao apenas quando entrar na pagina
  useEffect(()=>{
    const url:string = `${moviesUrl}?query=${query}&api_key=${apiKey}&language=pt-BR`
    getSearchMovies(url)
  }, [query])

  return(
    <>
      <div className="home-page-container-todo">

        <h2 className="rated-movies-title">Resultados Para:{query}</h2>
        <div className="rated-movies-list-box">

        {movies.length > 0 &&
            movies.map((e:object)=> <MoviesBox movieData={e} />)
          }
        
        </div>
      </div>
      
    </>
  )
}

export default Search