import React from "react";
import { NavLink } from "react-router-dom";
const EditIcon = ({contact}) => {
  return (
    <NavLink to={`/contact/edit/${contact.id}`}>
      <i class="fa-solid fa-pen-to-square"></i>
    </NavLink>
  );
};

export default EditIcon;
