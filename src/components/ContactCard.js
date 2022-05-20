import React from "react";
import user from "../images/user.svg";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, deleteContactHandler }) => {
  // deleteContactHandler //child
  return (
    <div>
      <div className="item">
        <div className="user">
          <img className="user-img" src={user} alt="userimage" />
        </div>
        <div className="content">
          {/* <Link to={`/contact/${contact.id}`}> */}
          <Link
            to={{
              pathname: `/contact/${contact.id}`,
              state: { contact: contact },
            }}
          >
            <div className="header">{contact.name}</div>
            <div className="">{contact.email}</div>
          </Link>
        </div>
        <button
          onClick={() => {
            deleteContactHandler(contact.id);
          }}
        >
          del
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
