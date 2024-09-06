import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroSection from './components/heroSection'
import BookList from './components/BookList'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/booklist/:genreName" element={<BookList/>}/>
      </Routes>
    </Router>
  )
}

export default App