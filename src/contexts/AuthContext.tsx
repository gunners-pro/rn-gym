import { UserDTO } from '@dtos/UserDTO';
import { api } from '@services/api';
import { createContext, ReactNode, useState } from 'react';

export type AuthContextData = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
