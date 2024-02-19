import React, { createContext, useState, useEffect } from 'react';
import UserService from '@/services/UserService'; // Assuming UserService is in the same directory

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const Users = await UserService.getAllUsers();
      const User = await UserService.getCurrentlyLoggedInUser();

      setUser(User?.user || {});
      setUsers(Users);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users, user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
