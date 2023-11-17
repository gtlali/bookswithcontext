// import React from 'react'
import { createContext, useState ,useCallback } from "react";
import axios from "axios"; // install axios using npm install axios
const BooksContext = createContext();

function Provider({ children }) {
  /* const [count, setCount] = useState(5);
    const valueToShare = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        },
        
    };*/
  const [books, setBooks] = useState([]); //defaulted to empty array of books

  // Get the books from the rest api
  const fetchBooks = useCallback(async () => {
    const fResp = await axios.get("http://localhost:3020/books");
    setBooks(fResp.data);
  },[]);

  // function to actually update the booklist
  const editBookByID = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3020/books/${id}`, {
      title: newTitle,
    });
    if (response.statusText === "OK") {
      console.log(response);
    }
    // function to update the element inside an array.
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } // { ...book, title: newTitle };

      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3020/books/${id}`);
    if (response.statusText === "OK") {
      console.log(response);
    }
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };
  const createBook = async (title) => {
    const creresp = await axios.post("http://localhost:3020/books", {
      title: title,
    });
    console.log(creresp.data);
    const updatebooks = [
      ...books,
      creresp.data,
      //{ id: Math.round(Math.random() * 99), title: title },
    ];
    console.log("need sometitle", title);
    setBooks(updatebooks);
  };

  //create valueToShare object that can be shared with entire app.
  const valueToShare = {
    books: books,
    deleteBookById: deleteBookById,
    editBookByID: editBookByID,
    createBook: createBook,
    fetchBooks: fetchBooks,
  };

  //valueToShare is commented from the return method of jsx
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// how to import this into file
// import BooksContext, {Provider} from "./context/books";
// import BooksContext  from "./context/books";
// import  {Provider} from "./context/books";
