    import React, { useState, useEffect } from 'react';
    import BookCard from './BookCard';
    import "./BookGrid.css"

    const BooksGrid = ({results}) => {
    const [books, setBooks] = useState([]);

    // Fetch books from API
    useEffect(() => {
        const fetchBooks = async () => {
        
        const response = await fetch(`http://skunkworks.ignitesol.com:8000/books?search=${results}`)
        const data = await response.json()
        if (data.results) {
            setBooks(data.results);
        } else {
            setBooks([]);
        }
        }
        if (results) {
            fetchBooks();
        } else {
            setBooks([]); 
        }
    }, [results]);

    return (
        <div className="books-grid">
        {books.length > 0 ? (
            books.map((book, index) => (
            <BookCard
            key={book.id}
            title={book.title}
            authors={book.authors}
            coverImage={book.formats["image/jpeg"] || "default-cover.jpg"}
            />
        ))
        ) :(
            <p>No books found.</p>
        )
        }
        </div>
    );
    };

    export default BooksGrid;