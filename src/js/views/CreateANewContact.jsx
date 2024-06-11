import React, { useContext } from "react";
import ContactForm from "../component/ContactForm.jsx";

const CreateANewContact = () => {
  return (
    <div className="d-grid">
      <div>
        <h1 className="d-flex justify-content-center mt-5 mb-5">
          Create a new contact
        </h1>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <ContactForm btnName={"Create"} />
      </div>
    </div>
  );
};

export default CreateANewContact;
