export enum AppRoute {
  HOME = '',
  ABOUT = 'about',
  HOW_TO_CONTRIBUTE = 'how-to-contribute',
  TEMPLATES = 'templates',
  TEMPLATE = 'template',
}

export const getInternalLink = (route: AppRoute | string) =>
  `${process.env.ASSET_PREFIX}/${route}`;
