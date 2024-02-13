import React, { createContext, useState, useEffect } from 'react';
import UserService from '@/services/UserService'; // Assuming UserService is in the same directory

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await UserService.getAllUsers();
      setUsers(response);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading }}>
      {children}
    </UserContext.Provider>
  );
};
