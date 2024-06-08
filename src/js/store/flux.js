import getContacts from "../views/Contacts.jsx";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://playground.4geeks.com/contact/agendas/Angie_Vanegas",
      contacts: [],
      contactToEdit: {},
    },
    actions: {
      updateContactToEdit: (contact) => {
        setStore({ contactToEdit: contact });
      },
      getContacts: async () => {
        const store = getStore(); // nos devuelve los valores
        try {
          const response = await fetch(store.apiUrl);
          if (!response.ok) {
            throw new Error("Opss there has been an error");
          }
          const data = await response.json();
          console.log("esto es data....", data.contacts);
          setStore({ contacts: data.contacts });
        } catch (e) {
          console.error(e);
        }
      },

      createContacts: async (contact) => {
        const store = getStore();
        try {
          console.log("esto es contacts...", contact);
          const response = await fetch(store.apiUrl + "/contacts", {
            method: "POST",
            body: JSON.stringify({
              ...contact,
            }),
            headers: {
              "Content-type": "application/json",
            },
          });
          if (response.ok) {
            alert("Haz creado un post");
          }
        } catch (e) {
          console.error(e);
        }
      },
      updateContacts: async (id, contact) => {
        const store = getStore();
        const actions = getActions(); // traer la función que nos trae los contacts
        try {
          const response = await fetch(store.apiUrl + "/contacts" + `/${id}`, {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: { "Content-type": "applicaction/json" },
          });
          const data = await response.json();
          console.log(data);
          if (!response.ok) {
            // cuando actualice traiga los contactos
            actions.getContacts();
          }
        } catch (e) {
          console.log(e);
        }
      },

      deleteContact: async (id) => {
        try {
          const store = getStore();
          const response = await fetch(store.apiUrl + "/contacts" + `/${id}`, {
            method: "DELETE",
          });
          if (!response.ok) {
            alert("No se puede borrar");
            throw new Error("No se pudo borrar el contacto");
          } else {
            const filteredContacts = store.contacts.filter(
              (contact) => contact.id !== id
            );
            console.log("esto es filteredContacts", filteredContacts);
            setStore({ contacts: filteredContacts });
          }
        } catch (e) {
          console.error(e);
        }
      },
    },
  };
};

export default getState;
