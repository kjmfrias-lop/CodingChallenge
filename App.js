import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";

const App = () => {
  const data = [
    {
      "id": 1,
      "firstName": "Krizia",
      "lastName": "Frias",
      "userType": "employee",
      "email": "km.frias@gmail.com",
      "company": {"cid": "143", "cname": "Lophils"}
    }
  ]; //dummy data


  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    userType: "",
    email: "",
    company: {cid: "", cname: ""},
  });


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      userType: addFormData.userType,
      email: addFormData.email,
      company: {cid: addFormData.cid, cname: addFormData.cname},
      

    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const options = [
    {
      label: "Owner",
      value: "Owner",
    },
    {
      label: "Admin",
      value: "Admin",
    },
    {
      label: "Employee",
      value: "Employee",
    }
  ];

  return (
  <div>
  
    <div className="app-container">
      {contacts.map((contact) => (
        <Fragment>
      <form>
        <div id="row">
            <ReadOnlyRow
                    contact={contact}
                    handleDeleteClick={handleDeleteClick}
            />
        </div>
      </form>
      </Fragment>
      ))}
    </div>
  
    <div id="create-contact">
      <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <div><input
            class="text-box"
            type="text"
            name="firstName"
            required="required"
            placeholder="Enter First Name..."
            onChange={handleAddFormChange}
          />
          </div>
          <div>
          <input
           class="text-box"
            type="text"
            name="lastName"
            required="required"
            placeholder="Enter Last Name..."
            onChange={handleAddFormChange}
          />
          </div>
          <div>
          <select name="userType" onChange={handleAddFormChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
          </select>
          </div>
          <input
           class="text-box"
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />{"\n"}
          <input
           class="text-box"
            name="cid"
            required="required"
            placeholder="Enter company ID#..."
            onChange={handleAddFormChange}
          />{"\n"}
          <input
           class="text-box"
            name="cname"
            required="required"
            placeholder="Enter company Name..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
    </div>
  </div> 
  );
};

export default App;