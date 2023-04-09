import React from "react";
import { Link, useNavigation } from "react-router-dom";

const Book = ({ book }) => {
  const { state } = useNavigation();
  if (state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="relative">
        <div className="px-6 py-4 shadow-lg hover:shadow-2xl rounded-lg">
          <img
            src={book.image}
            alt={book.title}
            className="object-cover h-56 md:h-60 xl:h-80 w-full "
          />
        </div>
        <div className="flex flex-col rounded-lg bg-black bg-opacity-75 opacity-0 hover:cursor-pointer hover:opacity-100 transition-opacity duration-200  px-6 py-4 gap-10 absolute inset-0">
          <h2 className="text-gray-100 font-bold text-xl">{book.title}</h2>
          <p className="text-gray-300 tracking-wide text-base">
            {book.subtitle.substring(0, 45)}...
          </p>
          <p className="text-gray-300 tracking-wide text-base mt-auto">
            Price: {book.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
