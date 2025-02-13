export type ThemeName = 'light' | 'dark'
export type Colorkey = 'primary' | 'background' | 'secondary' | 'third'
export type HeadingSize = "large" | "medium" | "small"

interface Theme {
    name: ThemeName;
    color: Record<Colorkey, string>;
    heading: {
      [key in HeadingSize]: {
        fontSize: string;
      }
    }
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: "#ff5800",
    background: "lightgrey",
    secondary: "5F5F5F",
    third: "green",
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
}

export const dark: Theme = {
  ...light,
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
