import { themes } from '~/themes/index';

export interface ITheme {
  bgPrimary: string;
  bgSecondary: string;
  bgHeader: string;
  bgFooter: string;
  primary: string;
  secondary: string;
  textPrimary: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
    '--color-text-primary': variables.textPrimary || '',
    '--bg-primary': variables.bgPrimary || '',
    '--bg-secondary': variables.bgSecondary || '',
    '--bg-header': variables.bgHeader || '',
    '--bg-footer': variables.bgFooter || '',
  };
};

export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (extending: ITheme, newTheme: ITheme): ITheme => {
  return { ...extending, ...newTheme };
};
