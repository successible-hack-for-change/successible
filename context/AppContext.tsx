import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextType {
  state: { userId: number; accessCode: string; accessCodeRecognised: boolean };
  setUserId: Dispatch<SetStateAction<number>> | (() => void);
  setAccessCode: Dispatch<SetStateAction<string>> | (() => void);
  setAccessCodeRecognised: Dispatch<SetStateAction<boolean>> | (() => void);
}

const AppContext = createContext<AppContextType>({
  state: { userId: 0, accessCode: '', accessCodeRecognised: true },
  setUserId: () => {},
  setAccessCode: () => {},
  setAccessCodeRecognised: () => {},
});

export default AppContext;
