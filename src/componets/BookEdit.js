import React from "react";
import { useState } from "react";
//import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({ book, onSubmit }) {
  const [edtitle, setEdTitle] = useState(book.title);

  const { editBookByID } = useBooksContext(); //useContext(BooksContext);

  const handleTitleEditChange = (event) => {
    setEdTitle(event.target.value);
  };
  const handleSubmitforSave = (event) => {
    event.preventDefault();
    //setEdTitle(edtitle);
    //console.log("new title", book.title);
    //onEdit(book.id, edtitle);
    onSubmit();
    editBookByID(book.id, edtitle);
  };
  return (
    <div>
      <form className='book-edit' onSubmit={handleSubmitforSave}>
        <label>Title</label>
        <input
          className='input'
          value={edtitle}
          onChange={handleTitleEditChange}
        ></input>
        <button className='button is-primary'>save</button>
      </form>
    </div>
  );
}
