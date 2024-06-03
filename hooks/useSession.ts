import { create } from 'zustand';
import { Session } from '@/api/auth';
import { removeUser, setUser } from '@/db/user';



interface AuthState {
  session?: Session;
  login: (session: Session) => void;
  logout: () => void;
}

export const useSession = create<AuthState>((set) => ({
  session: undefined,
  login: async (session: Session) => {
    try {
      await setUser(session);
      set({ session });
    } catch (e) {
      console.error(e);
    }
  },
  logout: async () => {
    try {
      await removeUser();
      set({ session: undefined });
    } catch (e) {
      console.error(e);
    }
  },
}));