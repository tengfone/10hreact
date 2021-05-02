import React from 'react'

const Book = (props) => {
    const { title, author } = props; // deconstruction
    const clickHandler = () => {
        alert('hello')
    }
    const complexExample = (author) => {
        console.log(author)
    }

    return (
        <article className='book' onMouseOver={() => {
            console.log(title)
        }}>
            <img src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg" alt="" width='100' height='100' />
            <h1>{title}</h1>
            <h3>{author}</h3>
            <button type="button" onClick={clickHandler}>Example</button>
            <button type="button" onClick={() => complexExample(author)}>more examples</button>
        </article>
    );
}

export default Book
