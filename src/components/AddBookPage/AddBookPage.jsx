import { useState } from "react"

function AddBookPage() {
    // We create a bit of state to represent each of our inputs
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')

    // These functions will be in charge of taking what the user typed in, and saving it in the state
    function titleChange(event) {
        // event.target gives us the specific input the user typed into
        // .value gives us what they typed
        // We take what they typed, and we save in the state
        setTitle(event.target.value)
    }

    function authorChange(event) {
        setAuthor(event.target.value)
    }

    function genreChange(event) {
        setGenre(event.target.value)
    }

    // Now we define a function that specifies what happens when a user submits the form
    function submit(event) {
        // using preventDefault to stop the form submission from refreshing the browser
        event.preventDefault()
     
        fetch('https://book-swap-api.dev.io-academy.uk/api/books', {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            // Make sure to set the method as per the documentation for each page
            method: "POST",
            body: JSON.stringify({
                // We take the state that contains our form data, and we plug it in to the body in the fetch request
                'title': title,
                'author': author,
                'genre_id': genre
            })
        }).then(function (res) {
            return res.json()
        } )
        .then(function (data) {
            console.log(data)
        })
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="title">Title</label>

            {/* We pass the state into the value of each input */}
            <input type="text" id="title" value={title} onChange={titleChange}/>

            <label htmlFor="author">Author</label>
            <input type="text" id="author" value={author} onChange={authorChange}/>

            <label htmlFor="genre">Genre</label>
            <input type="text" id="genre" value={genre} onChange={genreChange}/>

            <input type="submit" />
        </form>
    )
}

export default AddBookPage