import React from 'react';
import { MobileMenuState, MobileMenuActionType } from './mobile-menu.reducer';

export type MobileMenuApi = {
  state: MobileMenuState;
  dispatch: React.Dispatch<MobileMenuActionType>;
};

export const mobileMenuInitialState: MobileMenuState = {
  isVisible: false,
};

export const MobileMenuContext = React.createContext<MobileMenuState | MobileMenuApi>(
  mobileMenuInitialState
);
