import "./styles.css";
import React, { useState } from "react";
var booksinDb = {
  Classic: [
    {
      name: "Treasure Island",
      rating: "⭐  4.5",
      author: "Robert Louis Stevenson"
    },
    {
      name: "A Midsummer Night's Dream",
      rating: "⭐  4.8",
      author: "William Shakespeare"
    },
    {
      name: "Pride & Prejudice",
      rating: "⭐  4.7",
      author: "Jane Austen"
    }
  ],
  "Sci-Fic": [
    {
      name: "The Lord Of The Rings",
      rating: "⭐  4.9",
      author: "J.R.R. Tolkien"
    },
    {
      name: "The Princess Bride",
      rating: "⭐  4.1",
      author: "William Goldman"
    },
    {
      name: "The Martian Chronicles",
      rating: "⭐  4.5",
      author: "Ray Bradbury"
    }
  ],
  Fiction: [
    {
      name: "Harry Potter",
      rating: "⭐  4.9",
      author: "J. K. Rowling"
    },
    {
      name: "Frankenstein",
      rating: "⭐  4.2",
      author: "Mary Shelley"
    },
    {
      name: "The Hare",
      rating: "⭐  4.7",
      author: "Melanie Finn"
    }
  ],
  Mystery: [
    {
      name: "THE SILENT PATIENT",
      rating: "⭐  4.8",
      author: "ALEX MICHAELIDES"
    },
    {
      name: "GONE GIRL",
      rating: "⭐  4.4",
      author: "GILLIAN FLYNN"
    },
    {
      name: "REBECCA ",
      rating: "⭐  4.8",
      author: "DAPHNE DU MAURIER"
    }
  ]
};

export default function App() {
  const [inputBook, setinputBook] = useState("Mystery");
  function bookEventHandler(event) {
    setinputBook(event);
  }
  return (
    <div className="App">
      <div className="block">
        <h1>
          <span style={{ color: "silver" }}>Read📚Good </span>
        </h1>
        <p>Here are my favorite books. Select genres below to know more.</p>
        <ul className="genreList">
          {Object.keys(booksinDb).map((event) => (
            <li key={event}>
              <button onClick={() => bookEventHandler(event)}>{event}</button>
            </li>
          ))}
        </ul>
        <hr />
        <br />
        <div className="recomm">
          <ul>
            {
              booksinDb[inputBook].map((book) => (
                <li className="item" key={book.name}>
                  <span style={{ fontSize: "larger", color: "white" }}>
                    {book.name}
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: "smaller", color: "white" }}>
                    {book.rating}
                  </span>
                  <br />
                  <span style={{ fontSize: "smaller", color: "white" }}>
                    {book.author}
                  </span>
                </li>
              ))
              //console.log(recommendationDatabase.Classics[0]);
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
