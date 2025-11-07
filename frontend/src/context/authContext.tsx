import { createContext, } from "react";

export interface User { id: string; name: string; email: string; avatarUrl?: string; }

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {},
});
