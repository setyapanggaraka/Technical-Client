import { useState } from "react";

const books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publisher: "Bloomsbury",
    released_date: "1997-06-26",
    isbn: "9780747532699",
    genre: "Fantasy",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publisher: "George Allen & Unwin",
    released_date: "1954-07-29",
    isbn: "9780618260307",
    genre: "Fantasy",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J. B. Lippincott & Co.",
    released_date: "1960-07-11",
    isbn: "9780446310789",
    genre: "Fiction",
  },
];

export default function Button() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <label>{books[currentIndex].title}</label>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % books.length)}
      >
        Next Book
      </button>
    </div>
  );
}
