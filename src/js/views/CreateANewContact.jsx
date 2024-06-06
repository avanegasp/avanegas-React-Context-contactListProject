import React from "react";

const CreateANewContact = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
      </div>
      <div className="d-flex vh-100 justify-content-center align-items-center col-12">
        <form className="col-8">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Phone"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
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
