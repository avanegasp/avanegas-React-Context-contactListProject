import React, { useContext } from "react";
import { Context } from "../store/AppContext.jsx";
import ContactForm from "../component/ContactForm.jsx";

const UpdateContact = () => {
  const { store } = useContext(Context);
  // const { contactToEdit } = store;
  return (
    <div>
      <div>
        <h1 className="text-center mt-5">Update a new contact</h1>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <ContactForm
          btnName={"Update"}
          name={store.contactToEdit.name}
          phone={store.contactToEdit.phone}
          email={store.contactToEdit.email}
          address={store.contactToEdit.address}
          id={store.contactToEdit.id}
        />
      </div>
    </div>
  );
};

export default UpdateContact;
