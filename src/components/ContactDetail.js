import React from "react";
import user from "../images/user.svg";
// import { useParams } from "react-router-dom";

const ContactDetail = (props) => {
  //   const { id } = useParams();
  //   console.log(id);

  return (
    <div className="main">
      <div className="card">
        <div className="image">
          <img src={user} alt="ima-card" />
          <div className="content">
            <div className="header">Santosh</div>
            <div className="desc">@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
