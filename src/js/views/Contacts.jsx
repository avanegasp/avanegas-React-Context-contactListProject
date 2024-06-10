import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/AppContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  function handleToEdit(contact) {
    actions.updateContactToEdit(contact);
    navigate("/updateContact");
  }

  function handleToDelete(contact) {
    actions.deleteContact(contact);
  }

  return (
    <div>
      <div>
        {store.contacts.length === 0 ? (
          <div className="text-center alert alert-info" role="alert">
            No hay contactos, crea uno
          </div>
        ) : null}
      </div>
      {store.contacts.map((contact) => {
        return (
          <div className="card mb-3" key={contact.id}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://picsum.photos/200/200?people"
                  className="img-fluid rounded-start"
                  alt="people"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title mb-3">{contact.name}</h5>
                  <div className="ms-5">
                    <div className="col-md-10 d-flex justify-content-end ms-5">
                      <div className="pe-5">
                        <span onClick={() => handleToEdit(contact)}>
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      </div>
                      <div className="pe-5">
                        <span onClick={() => handleToDelete(contact.id)}>
                          <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="card-text pe-5 mb-2">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </p>
                    </div>
                    <div>{contact.address}</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="card-text pe-5 mb-2">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                      </p>
                    </div>
                    <div>
                      <div>{contact.phone}</div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="card-text pe-5 mb-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </p>
                    </div>
                    <div>{contact.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
