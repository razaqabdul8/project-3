import React, { useEffect, useState } from "react";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import 'bootstrap/dist/css/bootstrap.min.css'

function User() {
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

export default User;

// import React, { useEffect, useState } from "react";
// import Jumbotron from "../Jumbotron";
// import DeleteBtn from "../DeleteBtn";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../List";
// import { Input, TextArea, FormBtn } from "../Form";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './user.css';
// function User() {
//   // Setting our component's initial state
//   const [lists, setLists] = useState([])
//   const [formObject, setFormObject] = useState({
//     title: "",
//     author: "",
//     synopsis: ""
//   })
//   const [userInfo, setUser] = useState(null);
//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadLists();
//     setUser({
//       user_name: "User name fill in",
//       avatar_url: "avatar url if there is one"
//     })
//   }, [])

//   // Loads all books and sets them to books
//   function loadLists() {
//     API.getLists()
//       .then(res =>
//         setLists(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a list from the database with a given id, then reloads books from the db
//   function deleteList(id) {
//     API.deleteList(id)
//       .then(res => loadLists())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({ ...formObject, [name]: value })
//   };

//   // When the form is submitted, use the API.saveBook method to save the list data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveList({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(() => setFormObject({
//           title: "",
//           author: "",
//           synopsis: ""
//         }))
//         .then(() => loadLists())
//         .catch(err => console.log(err));
//     }
//   };

//   return (
//     <div className="user-profile-wrapper">
//       <div className="user-profile-content">
//         <div className="user-info">
//           <div className="user-avatar">
//             <img src={userInfo && userInfo.avatar_url ? userInfo.avatar_url : ''} class="user-avatar-image"></img>
//           </div>
//           <div className="user-details">
//             <h4 className="user-name">{userInfo && userInfo.user_name ? userInfo.user_name : ''}</h4>
//           </div>
//         </div>
//         <h4 className="list-title">My List</h4>
//         <div className="list-details">
//           {
//             lists ? lists.map((item) => (
//               <div className="list-item">{item && item.title ? item.title : ''}</div>
//             )) : <div></div>
//           }
//         </div>
//       </div>
//     </div>
//   );
// }


// export default User;