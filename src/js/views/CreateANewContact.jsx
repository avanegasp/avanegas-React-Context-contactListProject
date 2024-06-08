import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext.jsx";

const CreateANewContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    actions.createContacts(contact);
  }

  return (
    <div>
      <div>
        <h1 className="text-center mt-5">Create a new contact</h1>
      </div>

      <div className="d-flex vh-100 justify-content-center align-items-center col-12">
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
              Save
            </button>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/contacts" className="btn btn-success me-5">
              Show me all contacts
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateANewContact;
