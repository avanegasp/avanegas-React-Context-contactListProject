import React, { useContext } from "react";
import { Context } from "../store/AppContext.jsx";

export const getContacts = () => {
  const { store } = useContext(Context);
  console.log("esto es storeee desde Contacts....", store);

  return (
    <div>
      {store.contacts.map((contact) => {
        return (
          <div className="card mb-3" key={contact.id}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://picsum.photos/200/170?people"
                  className="img-fluid rounded-start"
                  alt="people"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text">
                    {contact.address}
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  </p>
                  <p className="card-text">{contact.phone}</p>
                  <p className="card-text">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default getContacts;
