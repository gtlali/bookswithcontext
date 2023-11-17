import React from "react";
import { useState } from "react";
//import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

export default function BookCreate() {
  const [title, setTitle] = useState("");

  const { createBook } = useBooksContext()//useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className='box'>
      <div className='book-create'>
        <h3>Add Book</h3>
        <form onSubmit={handleSubmit}>
          <label> Title </label>
          <input className='input' value={title} onChange={handleChange} />
          <button className='button'>Create!</button>
        </form>
      </div>
    </div>
  );
}
