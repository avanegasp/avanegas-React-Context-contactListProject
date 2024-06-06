const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      getContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/Angie_Vanegas"
          );
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
      addContacts: async () => {},
      editContacts: async () => {},
      deleteContacts: async () => {},
    },
  };
};
export default getState;
