import { FaRegStar } from "react-icons/fa";
import { NavigateFunction, useNavigate } from "react-router-dom";

function MoviesBox({movieData}:any){

  const navigate:NavigateFunction = useNavigate()

  function moreInfoMoviePage(id:number){
    navigate('/movie/' + id)
  }

  return(
    <>
      <div key={movieData.id} className="movies-cards">
        <img className="movies-cards-img" src={'https://image.tmdb.org/t/p/w500/' + movieData.poster_path} alt="movie-image" />
        
        <div className="info-filme">
          <h1 className="title-movies">{movieData.title}</h1>
            <div className="star-box-movies">
            <FaRegStar />
            {movieData.vote_average}
            </div>
          <button onClick={()=>moreInfoMoviePage(movieData.id)} className='button-more-info-movies'>Ver Detalhes</button>
        </div>
        
      </div>
    </>
  )
}

export default MoviesBox