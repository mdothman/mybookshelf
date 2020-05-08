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
  const [bookObject,setBookObject]=useState({})
  function handleSubmit(e){
    e.preventDefault()
    setUrl(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  }
  function handleChange(event){
    setQuery(event.target.value)
  }
  // function handleSave(props){
    
  //   console.log(props)
    
  // }
 

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
        type="text"
        value={query}
        onChange={handleChange}
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
              <img src={item.volumeInfo.imageLinks.thumbnail}></img>
            </Col>
            <Col size="sm-10">
              <h3>{item.volumeInfo.title}</h3>
              <strong>{item.volumeInfo.authors.join(", ")}</strong>
        <p>{item.volumeInfo.description}</p>
              <a href={item.volumeInfo.infoLink}>More Info</a>
              <SaveButton
              title={item.volumeInfo.title ? item.volumeInfo.title : ["No known title"]}
              authors={item.volumeInfo.authors.join(", ") ? item.volumeInfo.authors.join(", ") : ["No known Authors"]}
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
