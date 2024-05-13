import { useState, useEffect} from "react";
import MoviesBox from "../components/MoviesBox";
import '../css/home.css'


const moviesUrl = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'fc2c997c85e6fbf7c40991e349f89ca9';


function Home(){

  const [ratedMovies, setRatedMovies] = useState<any[]>([])

  const [popularMovies, setPopularMovies] = useState<any[]>([])
  const [page, updatePage] = useState<number>(1)



  async function bestRatedFilmes(url:string){

    await fetch(url)
    .then(async e=>await e.json())
    .then((m)=>{
      setRatedMovies(m.results)
    }).catch((e)=>{console.error(e)})
  }

  async function popularFilmes(url:string){

    await fetch(url)
    .then(async e=>await e.json())
    .then((m)=>{
      setPopularMovies(m.results)
    }).catch((e)=>{console.error(e)})
    
  }

  useEffect(()=>{
    const url:string = `${moviesUrl}top_rated?api_key=${apiKey}&language=pt-BR`
    bestRatedFilmes(url)
  }, [])

  useEffect(()=>{
    const url:string = `${moviesUrl}popular?page=${page}&api_key=${apiKey}&language=pt-BR`
    popularFilmes(url)
  }, [page])

  return(
    <>
      <div className="home-page-container-todo">

        <h2 className="rated-movies-title">Os top 20 melhores filmes.</h2>
        <div className="rated-movies-list-box">

          {ratedMovies.length > 0 &&
            ratedMovies.map((e:object)=> <MoviesBox movieData={e} />)
          }
        </div>

        <h2 id="movies" className="rated-movies-title">Exprole mais</h2>
        <div className="rated-movies-list-box">

          {popularMovies.length > 0 &&
            popularMovies.map((e:object)=> <MoviesBox movieData={e} />)
          }

          <div className="box-button-charge-more-movies">
            <button className="button-charge-more-movies" onClick={()=>updatePage(1)}>
              <a href="#movies">Voltar Primeira pagina</a>
            </button>

            <button className="button-charge-more-movies" onClick={()=>updatePage(page+1)}>
              <a href="#movies">Carregar Mais...</a>
            </button>
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Home