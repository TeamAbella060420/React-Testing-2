import React from 'react';
import ReactDOM from 'react-dom';

// JSX Rules
// return single element 
// div / section / article or Fragment /
// use camelCase for HTML attribute
// className instead of class
// close every element 
// formatting

// 1. Nested Components, React Tools
// function Greeting() {
//   return (
//     <div>
//       <Person/>
//       <Message/>
//     </div>
//   );
// }
// const Person = () => <h2>I will be a RichMan</h2>
// const Message = () => {
//   return <p>This is my Message</p>
// }

// 2. Sample code from same as Amazon

// CSS
import './index.css';
// SetUp vars

import {books} from './books'
import Book from './Book';
import { greeting } from './testing/testing';

function BookList() {
  console.log(greeting);
  return <section className='bookList'>
    {books.map((book, index) => {
    return (
    <Book key={book.id} {...book}></Book>
    );
      })}
      </section>;
}

ReactDOM.render(<BookList></BookList>, document.getElementById('root'));