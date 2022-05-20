import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";

const LOCAL_STORAGE_KEY = "contacts";
const getLocalStorageItems = () => {
  const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (retrieveContacts) {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  } else {
    return [];
  }
};

function App() {
  const [contacts, setContacts] = useState(getLocalStorageItems());

  //passing addContactHandler(contact) as a props to child component to get the data of Child Component
  const addContactHandler = (contact) => {
    console.log("fromapp", contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    // setContacts([...contacts, contact]);
  };

  //getting id form grandchild
  //i.e 1 - passing removeContactHandler from <App/> to <ContactList/>
  //i.e 2 - passing deleteContactHandler to <ContactCard/>
  //i.e 3 - getting id from <ContactCard/> using deleteContactHandler
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ContactList
                  contacts={contacts}
                  removeContactHandler={removeContactHandler}
                />
              }
            />
            <Route
              path="/add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route path="/contact/:id" element={<ContactDetail />} />
            {/* <ContactList
              contacts={contacts}
              removeContactHandler={removeContactHandler}
            /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
// npm i uuidv4
