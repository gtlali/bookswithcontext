//import { useContext } from "react";
//import BooksContext from "../context/books";
import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

// Receive the props called books from dashboard.
export default function BookList() {
  const { books } = useBooksContext(); //useContext(BooksContext);

  //const nvalue = useContext(BooksContext);
  // const { count, incrementCount } = useContext(BooksContext);
  //onEdit={onEdit} onDelete={onDelete}

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  // comment the jsx from return method
  // {count}
  // <button onClick={incrementCount}>Click</button>
  return <div className='book-list'>{renderedBooks}</div>;
}
