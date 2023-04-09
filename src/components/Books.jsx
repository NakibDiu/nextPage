import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import Loading from "./Loading";

const Books = () => {
  const {state} = useNavigation()
  if (state === "loading") {
    return <Loading></Loading>
  }
  const { books } = useLoaderData();
  console.log(state);

  return (
    <div className="my-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <Book key={book.isbn13} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
