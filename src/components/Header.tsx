import { useState } from 'react';
import '../assets/css/header.css'

import { BiSolidCameraMovie } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

import { NavigateFunction, useNavigate } from 'react-router-dom';


function Header(){

  const [searchMovie, updtSearchMovie] = useState<string>('')

  const navigate:NavigateFunction = useNavigate();

  function submitSearch(e:any){
    e.preventDefault();

    if(!searchMovie)return;

    window.scrollTo({top:0})

    navigate(`/search?q=${searchMovie}`)
  }

  return(
    <>
    <header>
      <div className='header-box-itens'>
        <span onClick={()=>{
          navigate('/')
          updtSearchMovie('')
          window.scrollTo({top:0, behavior: 'smooth'})
          }} className='header-logo-wg-movie'>WG Movies <BiSolidCameraMovie/>
        </span>
        <form onSubmit={submitSearch}>
          <input type="text"
          placeholder='Esta procurando algum filme?'
          onChange={(e) => updtSearchMovie(e.target.value)}
          value={searchMovie}
          />
          <button><IoIosSearch /></button>
        </form>
      </div>
      
      
    </header>
    </>
  )
}

export default Header;