import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export const getContacts = () => {
  const { store, actions } = useContext(Context);

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
                    <FontAwesomeIcon icon={faLocationDot} />
                    {contact.address}
                  </p>
                  <p className="card-text">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                    {contact.phone}
                  </p>
                  <p className="card-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                    {contact.email}
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <span onClick={() => actions.deleteContact(contact.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <Link
          to="/createContact"
          className="btn btn-success d-flex justify-content-center"
        >
          Create a new contact
        </Link>
      </div>
    </div>
  );
};

export default getContacts;
