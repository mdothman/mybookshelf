import React from "react";
import API from "../../utils/API"
import Button from "../Button";
import "./style.css";

// This button takes the props from the button and stores it in the object we call "book"
function SaveButton(props){
  
 const postToDB = (book) => {

  API.saveBook(book)
      .then( () => console.log(`You added ${book.title} to your bookshelf`))
      .catch(err => console.log(err))
          }
      return (
        <div>
        <Button type="primary" onClick={() => 
          {postToDB(props)}
          }>
          Save Book
      </Button>
      </div>
      );
  }


export default SaveButton;