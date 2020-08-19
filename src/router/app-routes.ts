export enum AppRoute {
  HOME = '',
  ABOUT = 'about',
  HOW_TO_CONTRIBUTE = 'how-to-contribute',
  TEMPLATE = 'templates',
}

export const getInternalLink = (route: AppRoute | string) =>
  `${process.env.ASSET_PREFIX}/${route}`;
