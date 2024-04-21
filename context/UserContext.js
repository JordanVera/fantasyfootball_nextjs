import React, { createContext, useState, useEffect, useContext } from 'react';
import UserService from '@/services/UserService'; // Assuming UserService is in the same directory

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [openRulesDialog, setOpenRulesDialog] = useState(false);
  const [openPicksDialog, setOpenPicksDialog] = useState(false);

  const [losers, setLosers] = useState([]);

  const handleOpenRulesDialog = () => setOpenRulesDialog(!openRulesDialog);

  useEffect(() => {
    fetchData();
    fetchLoserData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const Users = await UserService.getAllUsers();
      const User = await UserService.getCurrentlyLoggedInUser();

      setUser(User?.user || {});
      setUsers(Users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const updateUserPicks = async (week, picks) => {
    try {
      await UserService.submitPicks(week, picks);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLoserData = async () => {
    try {
      const { losers } = await UserService.getLoserData();
      // console.log({ losers });

      setLosers(losers);
      return losers;
    } catch (error) {
      console.log(error);
    }
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
        openRulesDialog,
        setOpenRulesDialog,
        handleOpenRulesDialog,
        openPicksDialog,
        setOpenPicksDialog,
        losers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
