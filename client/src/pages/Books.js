import React, { useState, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveButton from "../components/SaveButton"
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";


function Books() {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState("")

  


  function handleChange(event){
    const {value} = event.target
    
    setQuery(value)
// console.log("Your query is:",query)

  }
  function handleSubmit(event){
    event.preventDefault()
    if(query){
      API.googleBook(query)
      .then(res => {
      setBooks(res.data.items)
    })
    .catch(err=>{console.log(err)})
    }  
    
  }
//  console.log(books)
// if don't have a button type that is submit, the "Enter" key will refresh your page.
function handleEnterKey(event){
  if(event.target.value === "Enter"){
    
    handleSubmit()
  }

}


  return ( 
  <Container fluid>
    <Row>
   
    <Col size="md-12">
      <Jumbotron>
      <h1>USE GOOGLE BOOKS</h1>
      </Jumbotron>
    <form>
     <Fragment> 
      <Input
        autoComplete="off" 
        type="text"
        value={query}
        onChange={handleChange}
        onKeyPress={handleEnterKey}
        
      /> 
       <FormBtn
         type="submit"
         onClick={handleSubmit}
       >
         Search
      </FormBtn>
      </Fragment>
  </form>
       <ul>
         {books.map(book => (
        <li key={book.id}>
          <Row>
            <Col size="sm-2">
              {/* Fun fact, if you have an undefined value in the parent element, your page will error out. */}
              <img src={book.volumeInfo && 
              book.volumeInfo.imageLinks && 
              book.volumeInfo.imageLinks.thumbnail ?
              book.volumeInfo.imageLinks.thumbnail : "#"}
              // it is important to look after people who are hard of hearing, 
              // that is why it is always important to have an alt for your image
              alt={book.volumeInfo &&
                book.volumeInfo.title ? 
                book.volumeInfo.title : ["No known title"]}>
              </img>

            </Col>
            <Col size="sm-10">

              <h3>{book.volumeInfo &&
                book.volumeInfo.title ?  
              book.volumeInfo.title : ["No known title"]}</h3>

              <strong>{book.volumeInfo &&
              book.volumeInfo.authors ? 
              book.volumeInfo.authors.join(",") : 
              ["No known Authors"]}
              </strong>
        
              <p>{book.volumeInfo.description ? 
                  book.volumeInfo.description : 
                  ["No description available"] }</p>
              
              <a href={book.volumeInfo.infoLink}>More Info</a>
              
              <SaveButton
              title={book.volumeInfo.title ? 
                     book.volumeInfo.title : 
                     ["No known title"]}
              authors={book.volumeInfo.authors ? 
                      book.volumeInfo.authors.join(",") : 
                      ["No known Authors"]}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : 
                ["No description available"] }        
              />
            </Col>
         </Row>
        </li>
        ))}
      </ul>
    </Col>
  </Row>
</Container>
)
}


export default Books;
