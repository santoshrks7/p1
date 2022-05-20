import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//addContactHandler getting as prop to, pass child data to parent component(i.e App)
const AddContact = ({ addContactHandler }) => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  // console.log(formState);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const navigate = useNavigate();
  function add(e) {
    e.preventDefault();
    if (formState.name === "" || formState.email === "") {
      alert("All fields are mandatory my friend :)");
      return;
    }
    // console.log(formState);
    //from parent component (i.e App )
    //passing child data to parent component (i.e App)
    addContactHandler(formState);
    //clearing form after adding the data
    setFormState({ name: "", email: "" });
    navigate("/");
  }
  return (
    <div className="addcontact">
      <h2>Add Contact</h2>
      <form onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={formState.name}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={formState.email}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
