import React from 'react'
import "./heroSection.css"
import GenreList from '../../common/genreList'
// import GenreCard from '../../common/genreCard'

const HeroSection = () => {
  return (
    <div className="heroSectionWrapper">
    <div className='flex flex-col heroSection'>
        <div className="title-head max-width">
        <div className="hero-heading">Gutenberg Project</div>
        <div className="hero-subheading">A social cataloging website that allows you to freely search its database of books, annotations,
        and reviews.</div>
        </div>
        <div className="hero-category">
            <div className='categories max-width'>
                <GenreList/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection