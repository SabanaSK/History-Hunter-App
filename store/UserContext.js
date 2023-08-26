import { createContext, useState } from "react";

export const UserContext = createContext({
  users: [],
  currentUserName: { name: null },
  setCurrentUserName: (name) => { },
  addUser: (name) => { }
});

const UserContextProvider = ({ children }) => {
  const [currentUserName, setCurrentUserName] = useState({ name: null });
  const [users, setUsers] = useState([]);

  const addUser = (name) => {
    setUsers([...users, name]);
  };

  const value = {
    users,
    currentUserName,
    setCurrentUserName,
    addUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
