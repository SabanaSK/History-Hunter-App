import { createContext, useState, useEffect } from "react";
import * as http from "./../util/http"

export const UserContext = createContext({
  users: [],
  currentUserName: { name: null, id: null },
  setCurrentUserName: (name, id) => { },
  addUser: (displayName, localId) => { }
});

const UserContextProvider = ({ children }) => {
  const [currentUserName, setCurrentUserName] = useState({ name: null, id: null });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await http.getAllUsers();

        const fetchedUsers = Object.values(userData).map(user => ({
          name: user.name,
          id: user.id
        }));

        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching user collection data:", error);
      }
    };
    fetchUsers();
  }, []);
  
  const addUser = (displayName, localId) => {
    setUsers(prevUsers => [...prevUsers, { name: displayName, id: localId }]);
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
