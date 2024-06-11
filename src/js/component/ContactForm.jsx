import React, { useState, useContext } from "react";
import { Context } from "../store/AppContext.jsx";
import { useNavigate } from "react-router";

const ContactForm = ({ btnName, name, phone, address, email, id }) => {
  const { actions } = useContext(Context);

  const [contact, setContact] = useState({
    name,
    phone,
    email,
    address,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      await actions.updateContact(id, contact);
      navigate("/contacts");
    } else {
      await actions.createContact(contact);
      navigate("/contacts");
      actions.getContacts(contact);
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
          value={contact.email}
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
          value={contact.phone}
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
          value={contact.address}
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
