import React from 'react'
import "./BookCard.css"

const BookCard = ({ title, authors, coverImage }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt={title} className="book-cover" />
      <div className="book-details">
        <h5>{title}</h5>
        <p>{authors.map(author => author.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default BookCard