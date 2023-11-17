import React from "react";
//import axios from "axios"; // install axios using npm install axios
import { useEffect } from "react";
import HeaderSection from "./header";
import FooterSection from "./footer";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
//import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

// https://picsum.photos for getting random pictures
// npm run start
//npm run server

export default function BookDashboard() {
  const { fetchBooks } = useBooksContext(); //useContext(BooksContext);
  // This useEffect get called only first time because of empty array [] as second argument.
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  /*
  <div className='block'>
      {books.length}
        <div className='box'>
          <h1>Reading List of Books</h1>
          <div className='app'>
            <BookList
              onEdit={editBookByID}
              books={books}
              onDelete={deleteBooksById}
            />
          </div>
        </div>
      <BookCreate onCreate={createBook} />
  </div>
  */

  return (
    <div>
      <HeaderSection />
      <BookList />
      <BookCreate />
      <FooterSection />
    </div>
  );
}
