import React, { useContext } from "react";
import { Context } from "../store/AppContext.jsx";
import { Link } from "react-router-dom";
import ContactForm from "../component/ContactForm.jsx";

const UpdateContact = () => {
  const { store } = useContext(Context);
  console.log("esto es storeeee desde updateContact", store.contactToEdit);
  // const { contactToEdit } = store;
  return (
    <div>
      <div>
        <h1 className="text-center mt-5">Update a new contact</h1>
      </div>

      <div className="d-flex vh-100 justify-content-center align-items-center">
        <ContactForm btnName={"Update"} name={store.contactToEdit.name} />
      </div>
    </div>
  );
};

export default UpdateContact;
