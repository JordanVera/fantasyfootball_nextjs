import React, { createContext, useState, useEffect, useContext } from 'react';
import UserService from '@/services/UserService'; // Assuming UserService is in the same directory

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userPicks, setUserPicks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingLosers, setLoadingLosers] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [openPicksDialog, setOpenPicksDialog] = useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);

  const [losers, setLosers] = useState([]);
  const [userLoserEntries, setUserLoserEntries] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);
  const [numberOfTotalActiveEntries, setNumberOfTotalActiveEntries] =
    useState(0);

  const handleOpenSettingsDialog = (_) =>
    setOpenSettingsDialog(!openSettingsDialog);

  // useEffect(() => {
  //   console.log({ losers });
  //   console.log({ userPicks });
  //   console.log({ userLoserEntries });
  // }, [losers, userPicks, userLoserEntries]);

  useEffect(() => {
    findLoserEntries();
  }, [userPicks, losers]);

  useEffect(() => {
    // Get all unique entry numbers
    const allEntryNumbers = [
      ...new Set(userPicks.map((pick) => pick.entryNumber)),
    ];

    // Filter out the entry numbers that have lost and get the count
    const activeCount = allEntryNumbers.filter(
      (entryNum) => !userLoserEntries.includes(entryNum)
    ).length;

    console.log({ numberOfTotalActiveEntries: activeCount });
    // Set the count of active entries
    setNumberOfTotalActiveEntries(activeCount);
  }, [userPicks, userLoserEntries]);

  const findLoserEntries = (_) => {
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

  const fetchData = async (_) => {
    setLoading(true);
    try {
      const User = await UserService.getCurrentlyLoggedInUser();
      const Users = await UserService.getAllUsers();

      console.log({ User });

      setUser(User?.user || {});
      setUserPicks(User?.user?.Picks || []);
      setUsers(Users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLoserData = async (_) => {
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
      const response = await UserService.submitPicks(week, picks);
      if (!response.error) {
        await fetchData();
      }
      return response;
    } catch (error) {
      console.error(error);
      return { error: 'Failed to update picks' };
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
        openPicksDialog,
        setOpenPicksDialog,
        openSettingsDialog,
        setOpenSettingsDialog,
        handleOpenSettingsDialog,
        losers,
        userPicks,
        userLoserEntries,
        fetchData,
        fetchLoserData,
        isSignUp,
        setIsSignUp,
        numberOfTotalActiveEntries,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
