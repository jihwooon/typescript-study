export type ThemeName = 'light' | 'dark'
export type Colorkey = 'primary' | 'background' | 'secondary' | 'third'
export type HeadingSize = "large" | "medium" | "small"
export type ButtonSize = "small" | "medium" | "large"
export type ButtonScheme = "primary" | "secondary" | "nomal"

interface Theme {
    name: ThemeName;
    color: Record<Colorkey, string>;
    heading: {
      [key in HeadingSize]: {
        fontSize: string;
      }
    }
    button: {
      [key in ButtonSize]: {
        fontSize: string;
        padding: string;
      }
    },
    buttonScheme: {
      [key in ButtonScheme]: {
        color: string;
        background: string;
      }
    },
    borderRadius: {
      default: string;
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
  button: {
    small: {
      fontSize: "0.8rem",
      padding: "0.5rem 1rem",
    },
    medium: {
      fontSize: "1rem",
      padding: "0.7rem 1.5rem",
    },
    large: {
      fontSize: "1.5rem",
      padding: "1rem 2rem",
    },
  },
  buttonScheme: {
    primary: {
      color: "white",
      background: "midnightblue",
    },
    secondary: {
      color: "white",
      background: "#5F5F5F",
    },
    nomal: {
      color: "black",
      background: "white",
    },
  },
  borderRadius: {
    default: "4px",
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
