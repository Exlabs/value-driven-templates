import React from 'react';
import {
  MobileMenuContext,
  mobileMenuInitialState,
} from '../context/mobile-menu/mobile-menu.context';
import {
  MobileMenuState,
  mobileMenuReducer,
  MobileMenuActionType,
} from '../context/mobile-menu/mobile-menu.reducer';

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<MobileMenuState, MobileMenuActionType>
  >(mobileMenuReducer, mobileMenuInitialState);

  return (
    <MobileMenuContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
