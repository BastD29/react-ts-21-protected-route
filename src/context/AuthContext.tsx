import { createContext, useContext, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = {
    isAuthenticated: true,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
