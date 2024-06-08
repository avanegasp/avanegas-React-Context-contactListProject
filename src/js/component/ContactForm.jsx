import React, { useState, useContext } from "react";
// import { Context } from "../store/AppContext.jsx";

const ContactForm = ({ btnName, name }) => {
  // const { actions } = useContext(Context);

  const [contact, setContact] = useState({
    name,
    phone: "",
    email: "",
    address: "",
  });

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // actions.createContacts(contact);
    if (btnName === "Create") {
      console.log("Estás creando");
    } else {
      console.log("Estás actualizando");
    }
  }

  return (
    <form className="col-8" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Full Name</label>
        <input
          name="name"
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Full Name"
          value={contact.name}
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input
          name="phone"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Phone"
        />
      </div>
      <div className="mb-3">
        <label>Address</label>
        <input
          name="address"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Address"
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="submit" className="btn btn-primary col-8 text-center">
          {btnName}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
