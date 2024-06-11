import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
  <div className="vw-100 d-flex align-items-center justify-content-center ">
    <div className="text-center mt-5">
      <h1>Hello you!</h1>
      <p>
        <img src="https://picsum.photos/seed/picsum/400/300" alt="Paisaje" />
      </p>
      <Link to="/contacts" className="btn btn-success">
        Show me all contacts
      </Link>

      <Link to="/createContact" className="btn btn-success ms-5">
        Create a new contact
      </Link>
    </div>
  </div>
);
