import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ItemPickBtn(props) {
  return (
    <span className="pick-btn" {...props} role="button" tabIndex="0">
      &#10004; 	&nbsp;
    </span>
  );
}

export default ItemPickBtn;
