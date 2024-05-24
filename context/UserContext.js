import React, { createContext, useState, useEffect, useContext } from 'react';
import UserService from '@/services/UserService'; // Assuming UserService is in the same directory
import { useSession } from 'next-auth/react';

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userPicks, setUserPicks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingLosers, setLoadingLosers] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [openRulesDialog, setOpenRulesDialog] = useState(false);
  const [openPicksDialog, setOpenPicksDialog] = useState(false);
  const [losers, setLosers] = useState([]);
  const [userLoserEntries, setUserLoserEntries] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleOpenRulesDialog = () => setOpenRulesDialog(!openRulesDialog);

  // useEffect(() => {
  //   console.log({ losers });
  //   console.log({ userPicks });
  //   console.log({ userLoserEntries });
  // }, [losers, userPicks, userLoserEntries]);

  useEffect(() => {
    const findLoserEntries = () => {
      const loserEntries = [];

      // Iterate over each pick
      for (const pick of userPicks) {
        // Check if the pick is in the losers array
        const isLoser = losers.some(
          (loser) => loser.week === pick.week + 1 && loser.team === pick.team
        );

        if (isLoser) {
          loserEntries.push(pick.entryNumber);
        }
      }

      // Update the state with the loser entries
      setUserLoserEntries(loserEntries);
    };

    findLoserEntries();
  }, [userPicks, losers]);

  async function fetchData() {
    setLoading(true);
    try {
      const Users = await UserService.getAllUsers();
      const User = await UserService.getCurrentlyLoggedInUser();

      console.log({ User });

      setUser(User?.user || {});
      setUserPicks(User?.user?.Picks || []);
      setUsers(Users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const fetchLoserData = async () => {
    try {
      setLoadingLosers(true);
      const { losers } = await UserService.getLoserData();
      // console.log({ losers });

      setLosers(losers);
      return losers;
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingLosers(false);
    }
  };

  const updateUserPicks = async (week, picks) => {
    try {
      await UserService.submitPicks(week, picks);
      fetchData();
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
        userPicks,
        userLoserEntries,
        fetchData,
        fetchLoserData,
        isSignUp,
        setIsSignUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
