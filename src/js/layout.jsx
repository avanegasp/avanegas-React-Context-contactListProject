import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home.jsx";
import CreateANewContact from "./views/CreateANewContact.jsx";
import Contacts from "./views/Contacts.jsx";

import Navbar from "./component/Nabvar.jsx";
import UpdateContact from "./views/UpdateContact.jsx";

import injectContext from "./store/AppContext.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="createContact" element={<CreateANewContact />}></Route>
          <Route path="updateContact" element={<UpdateContact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
