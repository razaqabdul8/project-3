import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Lists() {
  // Setting our component's initial state
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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
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
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>List Your Items Here</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
                value={formObject.author}
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
                value={formObject.synopsis}
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My List of Items</h1>
            </Jumbotron>
            {lists.length ? (
              <List>
                {lists.map(list => {
                  return (
                    <ListItem key={list._id}>
                      <a href={"/books/" + list._id}>
                        <strong>
                          {list.title} by {list.author}
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
