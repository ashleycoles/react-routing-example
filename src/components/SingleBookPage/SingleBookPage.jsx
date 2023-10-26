import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleBookDisplay from "./SingleBookDisplay/SingleBookDisplay"

function SingleBookPage() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [blurb, setBlurb] = useState('')
    const [error, setError] = useState(false)

    // We can acess the value of the :id param
    // By calling useParams and storing the result in
    // a variable
    
    // The curly braces are here because useParams
    // returns an object of params, so we take the specific
    // param we want and put it in a const
    const {id} = useParams()
    // Now we have the ID in here, we can do whatever we want
    // with it

    useEffect(function() {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books/' + id)
            .then(function(res) {
                return res.json()
            })
            .then(function(bookData) {
                // If bookData has a key of data, we know the request worked
                if ('data' in bookData) {
                    setTitle(bookData.data.title)
                    setAuthor(bookData.data.author)
                    setBlurb(bookData.data.blurb)
                } else {
                   setError(true)
                }
               
            })
    }, [id]) // Run this useEffect on mount + if the id changes

    return (
        <div>
            {error ? <p>404 Error - invalid mime time in the flux proximeter transfomer</p> : 
                <SingleBookDisplay title={title} author={author} blurb={blurb} />
            }
        </div>
    )
}

export default SingleBookPage