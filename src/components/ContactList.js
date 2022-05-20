import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactHandler }) => {
  // console.log(contacts);
  // removeContactHandler //grandparent //App.js props drilling
  //parent
  const deleteContactHandler = (id) => {
    removeContactHandler(id);
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        deleteContactHandler={deleteContactHandler}
      />
    );
  });
  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="addcontactbtn">Add Contact</button>
      </Link>
      {renderContactList}
    </div>
  );
};

export default ContactList;
