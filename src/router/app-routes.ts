export enum AppRoute {
  HOME = '',
  ABOUT = '/about',
  HOW_TO_CONTRIBUTE = '/how-to-contribute',
}

export const getLink = (route: AppRoute) => `${process.env.ASSET_PREFIX}/${route}`;
