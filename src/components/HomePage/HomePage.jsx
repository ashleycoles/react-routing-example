import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HomePage() {
    const [books, setBooks] = useState([])

    useEffect(function() {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
            .then(function (res) {
                return res.json()
            })
            .then(function (bookData) {
                setBooks(bookData.data)
            })
    }, [])

    return (
        <div>
            <ul>
                {books.map(book => <li key={book.id}><Link to={'/book/' + book.id} >{book.title}</Link></li>)}
            </ul>
        </div>

    )
}

export default HomePage