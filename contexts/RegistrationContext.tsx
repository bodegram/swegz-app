import { createContext, ReactNode, useState, useContext } from "react";

type RegistrationData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  location: string;
  pin: string,
};

type RegistrationContextType = {
  registrationData: RegistrationData;
  updateRegistrationData: (newData: Partial<RegistrationData>) => void;
  clearRegistrationData: () => void;
};

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

type RegistrationProviderProps = {
  children: ReactNode;
};

const RegistrationProvider = ({ children }: RegistrationProviderProps) => {
  const initialData: RegistrationData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    middleName: "",
    location: "Nigeria",
    pin: "",
  };

  const [registrationData, setRegistrationData] = useState<RegistrationData>(initialData);

  const updateRegistrationData = (newData: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({
      ...prev,
      ...newData,
    }));
  };

  const clearRegistrationData = () => {
    setRegistrationData(initialData);
  };

  const value: RegistrationContextType = {
    registrationData,
    updateRegistrationData,
    clearRegistrationData,
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
};

const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

export { RegistrationProvider, useRegistration };