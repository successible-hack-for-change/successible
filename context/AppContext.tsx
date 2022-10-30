import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextType {
  state: { userId: number };
  setUserId: Dispatch<SetStateAction<number>> | (() => void);
}

const AppContext = createContext<AppContextType>({
  state: { userId: 0 },
  setUserId: () => {},
});

export default AppContext;
