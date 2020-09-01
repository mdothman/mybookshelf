import React, { useState, useEffect } from "react";
import axios from 'axios';
import Jumbotron from "../components/Jumbotron";
import SaveButton from "../components/SaveButton"
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
// import API from "../utils/API";

function Books() {
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState(' ');
  const [url, setUrl] = useState(
    'https://www.googleapis.com/books/v1/volumes?q=',
  );
 

  function handleSubmit(event){
    event.preventDefault()
    setUrl(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  }

  function handleChange(event){
    event.preventDefault()
    setQuery(event.target.value)
    
  }
 
   function submitOnEnter(event) {
    if(event.key === "Enter"){
       handleSubmit()
     }
   }

  
 

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      console.log(result.data)
      setData(result.data);
    };
 
    fetchData();
  }, [url]);
 
  return ( 
  <Container fluid>
    <Row>
   
    <Col size="md-12">
       <Jumbotron>
      <h1>USE GOOGLE BOOKS</h1>
    </Jumbotron>
    <form>
      
      <Input
        autoComplete="off" 
        type="text"
        value={query}
        onChange={handleChange}
        onKeyPress={submitOnEnter}
      />
      <FormBtn
        type="button"
        onClick={handleSubmit}
      >
        Search
      </FormBtn>
      
 </form>
      <ul>
        {data.items.map(item => (
        <li key={item.id}>
          <Row>
            <Col size="sm-2">
              
              <img src={item.volumeInfo && 
              item.volumeInfo.imageLinks && 
              item.volumeInfo.imageLinks.thumbnail ?
              item.volumeInfo.imageLinks.thumbnail : "#"}
              alt={item.volumeInfo.title ? 
                item.volumeInfo.title : ["No known title"]}>
              </img>

            </Col>
            <Col size="sm-10">

              <h3>{item.volumeInfo.title ? 
              item.volumeInfo.title : ["No known title"]}</h3>

              <strong>{item.volumeInfo.authors ? item.volumeInfo.authors.join(",") : ["No known Authors"]}</strong>
        
              <p>{item.volumeInfo.description ? item.volumeInfo.description : ["No description available"] }</p>
              
              <a href={item.volumeInfo.infoLink}>More Info</a>
              
              <SaveButton
              title={item.volumeInfo.title ? item.volumeInfo.title : ["No known title"]}
              authors={item.volumeInfo.authors ? item.volumeInfo.authors.join(",") : ["No known Authors"]}
              />
            </Col>
         </Row>
        </li>
          
        ))}
      </ul>
    
    
    </Col>
    </Row>


  </Container>
    
  );
  }


export default Books;
