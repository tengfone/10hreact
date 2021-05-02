import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [{
  id: 1,
  title: 'My First Book',
  author: 'My First Author'
},
{
  id: 2,
  title: 'My Second Book',
  author: 'My Second Author'
}]

const names = ['john', 'peter', 'susan']
const newName = names.map((name) => {
  return <h1>{name}</h1>
})

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

// const Greeting = () => {
//   return React.createElement('h1',{},'hello world')
// }

const Book = (props) => {
  const {title,author} = props;
  const clickHandler = () =>{
    alert('hello')
  }
  return (
    <article className='book'>
      <img src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg" alt="" width='100' height='100' />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>Example</button>
    </article>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root'))