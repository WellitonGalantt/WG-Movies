import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import "../assets/css/infoMovie.css"

import { FaRegStar,FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyBillTrendUp, FaRegClock } from "react-icons/fa6";
import { GiCash } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";

const moviesUrl = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'fc2c997c85e6fbf7c40991e349f89ca9';

function Movie(){

  //?pegar o id do parametro
  const {id} = useParams();

  const [ movieInfos, setMoviesInfos] = useState<any>([]);

  async function getInfosMovie(url:string){

    await fetch(url)
    .then((e)=>e.json())
    .then((e)=>{
      setMoviesInfos(e)
    })
  }

  //?converte em formato monetario com virgula sifrao
  const formatyCurency = (num:number)=>{
    return num.toLocaleString("en-US",{
      style:"currency",
      currency: "USD"
    })
  }

  useEffect(()=>{
    const url:string = `${moviesUrl}${id}?api_key=${apiKey}&language=pt-BR`
    getInfosMovie(url);
  },[])

  return(
    <>
      <div className="movie-info-container">
      
        <div className="movie-info-box-header">

          <img src={"https://image.tmdb.org/t/p/w500/" + movieInfos.poster_path} alt="more info movie image" />
          <h2>{movieInfos.title}</h2>
          <p className='text-movie-info'><FaRegStar className="info-movie-icon" /><span> {movieInfos.vote_average}</span></p>
          <div className='text-movie-info'>
            <span><GrNotes className="info-movie-icon desc" /> Descrição: </span>
            <p>{movieInfos.overview}</p>
          </div>
        </div>

        <div className="movie-info-box">

          <div className='text-movie-info'>
            <span><FaRegCalendarAlt className="info-movie-icon desc" /> Lançamento: </span>
            <p>{movieInfos.release_date}</p>
          </div>

          <div className='text-movie-info'>
            <span><GiCash className="info-movie-icon desc" /> Orçamento: </span>
            <p>{formatyCurency(+movieInfos.budget)}</p>
          </div>

          <div className='text-movie-info'>
            <span><FaMoneyBillTrendUp className="info-movie-icon desc" /> Receita: </span>
            <p>{formatyCurency(+movieInfos.revenue)}</p>
          </div>

          <div className='text-movie-info'>
            <span><FaRegClock className="info-movie-icon desc" /> Duração: </span>
            <p>{movieInfos.runtime}</p>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Movie;