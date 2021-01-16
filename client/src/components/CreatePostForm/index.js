import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateItemForm() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a list</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Name" />
          <select name="optionsList" id="optionslist">
            <option value="electronics">Electronics</option>
            <option value="household goods">Household goods</option>
            <option value="sporting goods">Sporting goods</option>
            <option value="automotive">Automotive</option>
            <option value="clothing">Clothing</option>
            <option value="services">Services</option>
            <option value="free stuff">Free stuff</option>
            <option value="pet supplies">Pet supplies</option>
            <option value="toys & games">Toys & Games</option>
          </select>
        <textarea className="form-control mb-5" required ref={descriptionRef} placeholder="Description" />
        <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Post Item
        </button>
      </form>
    </div>
  );
}

export default CreateItemForm;
