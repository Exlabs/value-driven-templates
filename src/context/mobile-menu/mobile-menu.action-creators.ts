import { MobileMenuActionType, TOGGLE_MENU } from './mobile-menu.reducer';

export const toggleMobileMenu = (): MobileMenuActionType => ({
  type: TOGGLE_MENU,
});
