import React, { createContext } from 'react';
import { userStore, postStore } from './storeMobX';
export const storeContext = createContext({
  userStore,
  postStore
});

export const StoreProvider = ({ children }) => {
  return (
    <storeContext.Provider value={{ userStore, postStore }}>
      {children}
    </storeContext.Provider>
  );
};
