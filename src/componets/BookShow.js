import React from "react";
import { useState } from "react";
//import BooksContext from "../context/books";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useBooksContext(); //useContext(BooksContext)

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    //id, newTitle
    setShowEdit(false);
    //onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} showEdit />;
  }

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
}
