import React, { useContext } from "react";

const CreateANewContact = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
      </div>

      <div className="d-flex vh-100 justify-content-center align-items-center col-12">
        <form className="col-8">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Address
            </label>
            <input
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
        </form>
      </div>
    </div>
  );
};

export default CreateANewContact;
