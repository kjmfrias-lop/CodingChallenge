import React from "react";

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <div id="mainBlock">
      <div>User Type: {contact.userType}</div>
      <div>First Name: {contact.firstName}</div>
      <div>Last Name: {contact.lastName}</div>
      <div>Email: {contact.email}</div>
      <div>Company ID#: {contact.company.cid}</div>
      <div>Company Name: {contact.company.cname}</div>
      <div>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReadOnlyRow;