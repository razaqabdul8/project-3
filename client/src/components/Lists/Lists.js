import React, { useEffect, useState } from "react";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";
import ItemPickBtn from "../ItemPickBtn";
import API from "../../utils/API";
import {useLoginContext} from '../../utils/GlobalState';
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import Navbar from '../Navbar';
import Sidebar from '../SideBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function Lists() {
  const [state, dispatch] = useLoginContext(); 
  // Setting our component's initial state
  const[ isOpen, setIsOpen ] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen)
  };
  const [lists, setLists] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    author: "",
    synopsis: ""
  })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadLists()
  }, [])

  // Loads all books and sets them to books
  function loadLists() {
    API.getLists()
      .then(res =>
        setLists(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a list from the database with a given id, then reloads books from the db
  function deleteList(id) {
    API.deleteList(id)
      .then(res => loadLists())
      .catch(err => console.log(err));
  }

  function savetowishList(id) {
    const item = lists.filter((list)=> list._id == id);
    // console.log(state.id);
    // item[0].usrid = state.id;
    API.saveWishLists(item[0])    
      .then(res => alert("Item added to wish list"))
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the list data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveList({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(() => setFormObject({
          title: "",
          author: "",
          synopsis: ""
        }))
        .then(() => loadLists())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <div className="mb-3">      
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />        
      </div>

      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Add Items to the List Here</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Item Name (required)"
              value={formObject.title}
            />
            <Input
              onChange={handleInputChange}
              name="author" 
              type="number"
              formatter="currency"            
              placeholder="Unit Price (required)"
              value={formObject.author}
            />
            <TextArea
              onChange={handleInputChange}
              name="synopsis"
              placeholder="Description (Optional)"
              value={formObject.synopsis}
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Item
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>List of Available Items</h1>
          </Jumbotron>
          {lists.length ? (
            <List>
              {lists.map(list => {
                return (
                  <ListItem key={list._id}>
                    <ItemPickBtn onClick={() => savetowishList(list._id)} />
                    <a href={"/lists/" + list._id}>
                      <strong>
                        {list.title} {": $"} {list.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => deleteList(list._id)} />
                    
                  </ListItem>
                );
              })}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Lists;
