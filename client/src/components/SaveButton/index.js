import React,{ useState } from "react";
import axios from "axios"
import Button from "./Button";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props){
 const [book, setBook]=useState({})
  const postToDB = (book) => {
      setBook(props, {
        title: book.title,
        author: book.authors,
        
      })

      console.log(props)
      axios.post("api/books",book)
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