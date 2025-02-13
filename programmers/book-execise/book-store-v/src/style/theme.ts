export type ThemeName = 'light' | 'dark'
type Colorkey = 'primary' | 'background' | 'secondary' | 'third'

interface Theme {
    name: ThemeName;
    color: Record<Colorkey, string>;
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: "#ff5800",
    background: "lightgrey",
    secondary: "5F5F5F",
    third: "green",
  },
}

export const dark: Theme = {
  name: 'dark',
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
  },
}

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
  case 'light':
    return light;
  case 'dark':
    return dark;
  }
}
