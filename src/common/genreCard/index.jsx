import React from 'react'
import "./genreCard.css"
import Next from "../../assets/Next.svg"


const GenreCard = ({logo ,genre}) => {
  return (
    <div className="genre-card flex">
        <img src={logo} alt={`${genre} logo`} className="genre-logo" />
        <span className='genre-name'>{genre}Fiction</span>
        <img src={Next} className="genre-arrow" />
    </div>
  )
}

export default GenreCard