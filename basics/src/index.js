import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {data} from './books'
import Book from './Book'

const names = ['john', 'peter', 'susan']
const newName = names.map((name) => {
  return <h1>{name}</h1>
})

function Booklist() {
  return (
    <section className="booklist">
      {data.map((book) => {
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

ReactDom.render(<Booklist />, document.getElementById('root'))

// onClick={() this bracket makes it run on click, without it, it will run auto}
// ... is called the spread operator {...books} pass in everything as a obj