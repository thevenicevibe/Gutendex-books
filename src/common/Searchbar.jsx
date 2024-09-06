import React, { useState } from 'react';
import Search from "../assets/Search.svg"
import "./Searchbar.css"

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("")
   
  const fetchData = (value) => {
    fetch("http://skunkworks.ignitesol.com:8000/books?search").then((res)=>res.json())
    .then((json)=>{
      console.log(json.results)
      const resultsArray = json.results || json.books || [];
      const result = resultsArray.filter((result) => {
        return value && result && result.title && result.authors && result.authors.name && result.name.toLowerCase().includes(value);
      });
      setResults(result)
    })
  }

  const handleChange = (value) =>{
    setInput(value)
    fetchData(value)
  }
 
  return (
    <div className="input-wrapper flex">
      <img src={Search} id='search-icon' />
      <input placeholder='Search' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
};

export default SearchBar;