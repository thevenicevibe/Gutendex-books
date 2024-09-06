import React, {useState} from 'react'
import Back from "../../assets/Back.svg"
import Search from "../../assets/Search.svg"
import "./BookList.css"
import SearchBar from '../../common/Searchbar'
import BooksGrid from '../../common/BookGrid'

const BookList = () => {
  const [results, setResults] = useState([])

  return (
    <div className='booklistWrapper'>
      <div className='flex flex-col max-width book-header'>
        <div className="header-title absolute-center">
            <img src={Back} className='title-logo' />
            <span className='ftitle'>Fiction</span>
        </div>
          <SearchBar setResults={setResults}/>
          <BooksGrid results={results}/>
      </div>
    </div>
  )
}

export default BookList