import React, { createContext, ReactElement, FC } from 'react';
import { userStore, postStore } from './storeMobX';
export const storeContext = createContext({
  userStore,
  postStore
});

interface Props {
  children: ReactElement;
}

export const StoreProvider: FC<Props> = ({ children }) => {
  return (
    <storeContext.Provider value={{ userStore, postStore }}>
      {children}
    </storeContext.Provider>
  );
};
