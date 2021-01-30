import React, { useEffect, useState } from "react";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLoginContext } from '../../utils/GlobalState';
import Sidebar from '../SideBar'
import { GiShoppingCart } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { NavBar, NavbarContainer, NavLogo, NavLinks, NavMenu, MobileIcon } from '../Navbar/NavbarElements';
import { BiHomeHeart } from 'react-icons/bi';
import {BodyContainer, UserContent} from './UserElements';
function User() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  // Setting our component's initial state
  const [lists, setLists] = useState([]);
  const [state, dispatch] = useLoginContext();
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
    API.getWishLists()
      .then(res =>
        setLists(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a list from the database with a given id, then reloads books from the db
  function deleteList(id) {
    API.deleteWishList(id)
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
      API.saveWishLists({
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
        <NavBar >
          <NavbarContainer>
          <NavLogo >Marcy</NavLogo>
          <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
          <NavMenu>
          <NavLinks  onClick={() => window.location = '/'} to='Home' smooth={true} duration={500} spy={true} exact='true' offset={-80}><BiHomeHeart /></NavLinks>
              <NavLinks  onClick={() => window.location = '/lists'} to='lists' smooth={true} duration={500} spy={true} exact='true' offset={-80}><GiShoppingCart /></NavLinks>
              <NavLinks  onClick={() => window.location = '/User'} to='User' smooth={true} duration={500} spy={true} exact='true' offset={-80}><MdPersonOutline /></NavLinks>
             </NavMenu>
          </NavbarContainer>
      </NavBar>
      
      </div>
      <div className='user' style={{ margin: 'auto', padding: '30px;', textAlign: 'center' }}>
        <h2>{state && state.email ? state.email : ''}</h2>
        <br />
        <img width="150px" src="https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg" />
        <br />
        <br />
        <Jumbotron>
          <h1>Your Purchase Wishlist</h1>
        </Jumbotron>
        <br />
        {lists && lists.length ? (
          <List>
            {lists.map(list => {
              return (
                <ListItem key={list._id}>
                  <a href={"/wishlits/" + list._id}>
                    <strong>
                      {list.title} : $ {list.author}
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
      </div>
    </Container>
  );
}


export default User;
