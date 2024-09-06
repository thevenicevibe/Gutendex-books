import React from 'react'
import { Link } from 'react-router-dom'
import Adventure from "../assets/Adventure.svg"
import Drama from "../assets/Drama.svg"
import Fiction from "../assets/Fiction.svg"
import History from "../assets/History.svg"
import Humour from "../assets/Humour.svg"
import Philosophy from "../assets/Philosophy.svg"
import Politics from "../assets/Politics.svg"
import GenreCard from './genreCard/index'
import "./genreList.css"
const genres = [
    {logo: Adventure, genre: 'Adventure'},
    {logo: Drama, genre: 'Drama'},
    {logo: Fiction, genre: 'Fiction'},
    {logo: History, genre: 'History'},
    {logo: Humour, genre: 'Humour'},
    {logo: Philosophy, genre: 'Philosophy'},
    {logo: Politics, genre: 'Politics'},
]

const GenreList = () => {
  return (
    <div className='genre-list'>
        {genres.map((genre, index)=>(
            <div key={index} className='genre-item'>
              <Link key={index} to={`/booklist/${genre.genre.toLowerCase()}`} className='genre-item'>
                  <GenreCard logo={genre.logo} genre={genre.genre} />
               </Link>
             {/* <img src={genre.logo} className="genre-logo" />
             <span className='genre-name'>{genre.name}</span> */}
            </div>
        ))}
    </div>
       
  )
}

export default GenreList