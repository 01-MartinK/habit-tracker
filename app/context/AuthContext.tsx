import axios from "axios";
import { createContext, useContext, useState } from "react";
import Config from "react-native-config";
import Login from "../login";

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = Config.TOKEN_KEY;
export const API_URL = Config.API_URL;
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({ token: null, authenticated: false });

  const register = async (email: string, password: string) => {
    try {
      return await axios.post(`${API_URL}/users`, { email, password });
    } catch (e) {
      return { error: true, msg: e };
    }
  };

  const value = { onRegister: register };

  return (
    <AuthContext.Provider value={value}>
      {authState.authenticated ? children : <Login />}
    </AuthContext.Provider>
  );
};
