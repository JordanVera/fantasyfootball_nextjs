import { createContext, useContext, useState } from 'react';
const RegisterContext = createContext();

export const useRegister = () => {
  return useContext(RegisterContext);
};

export const RegisterProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <RegisterContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
