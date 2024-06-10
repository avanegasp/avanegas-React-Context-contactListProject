import React, { useContext, useState } from "react";
import { Context } from "../store/AppContext.jsx";
import ContactForm from "../component/ContactForm.jsx";

const CreateANewContact = () => {
  const { actions } = useContext(Context);

  return (
    <div>
      <div>
        <h1 className="text-center mt-5">Create a new contact</h1>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <ContactForm btnName={"Create"} />
      </div>
    </div>
  );
};

export default CreateANewContact;
