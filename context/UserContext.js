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
    // Count active entries for each user separately
    const activeCount = users.reduce((total, user) => {
      // Get unique entry numbers for this user
      const userEntryNumbers = [
        ...new Set((user.Picks || []).map((pick) => pick.entryNumber)),
      ];

      // Find loser entries for this specific user
      const userLoserEntryNumbers = userLoserEntries
        .filter((entry) => entry.userId === user.id)
        .map((entry) => entry.entryNumber);

      // Count active entries (not in loserEntries) for this user
      const userActiveEntries = userEntryNumbers.filter(
        (entryNum) => !userLoserEntryNumbers.includes(entryNum)
      ).length;

      return total + userActiveEntries;
    }, 0);

    console.log({ activeCount }); // Debug log
    setNumberOfTotalActiveEntries(activeCount);
  }, [users, userLoserEntries]);

  const findLoserEntries = () => {
    const loserEntries = [];

    // Iterate over each user's picks
    users.forEach((user) => {
      (user.Picks || []).forEach((pick) => {
        // Check if the pick is in the losers array
        const isLoser = losers.some(
          (loser) => loser.week === pick.week + 1 && loser.team === pick.team
        );

        if (isLoser) {
          loserEntries.push({ userId: user.id, entryNumber: pick.entryNumber });
        }
      });
    });

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
