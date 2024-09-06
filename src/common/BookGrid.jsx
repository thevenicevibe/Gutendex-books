import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import "./BookGrid.css"

const BooksGrid = ({results}) => {
  const [books, setBooks] = useState([]);

  // Fetch books from API
  useEffect(() => {
    fetch("http://skunkworks.ignitesol.com:8000/books?search=")
      .then(response => response.json())
      .then(data => {
        setBooks(data.results); // Assuming the array is in data.results
      })
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="books-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          authors={book.authors}
          coverImage={book.formats["image/jpeg"] || "default-cover.jpg"}
        />
      ))}
    </div>
  );
};

export default BooksGrid;