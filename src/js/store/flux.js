const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://playground.4geeks.com/contact/agendas/Angie_Vanegas",
      contacts: [],
    },
    actions: {
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
      editContacts: async () => {},
      deleteContacts: async (id) => {
        const response = await fetch("");
      },
    },
  };
};

export default getState;
