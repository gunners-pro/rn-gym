import { UserDTO } from '@dtos/UserDTO';
import { createContext, ReactNode, useState } from 'react';

export type AuthContextData = {
  user: UserDTO;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState({} as UserDTO);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
