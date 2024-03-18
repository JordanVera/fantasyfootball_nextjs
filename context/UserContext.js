import React, { createContext, useState, useEffect, useContext } from 'react';
import UserService from '@/services/UserService'; // Assuming UserService is in the same directory

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [registrationOpen, setRegistrationOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const Users = await UserService.getAllUsers();
    const User = await UserService.getCurrentlyLoggedInUser();

    setUser(User?.user || {});
    setUsers(Users);
    setLoading(false);
  }

  const updateUserPicks = async (week, picks) => {
    await UserService.submitPicks(week, picks);
    fetchData();
  };

  return (
    <UserContext.Provider
      value={{
        users,
        updateUserPicks,
        user,
        loading,
        registrationOpen,
        setRegistrationOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
