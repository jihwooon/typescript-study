export type ThemeName = "light" | "dark";
export type ColorKey = "primary" | "background" | "secondary" | "third";
export type HeadingSize = "large" | "medium" | "small";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontsize: string;
    };
  };
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "brown",
    background: "lightgray",
    secondary: "blue",
    third: "green",
  },
  heading: {
    large: {
      fontsize: "2rem",
    },
    medium: {
      fontsize: "1.5rem",
    },
    small: {
      fontsize: "1rem",
    },
  },
};

export const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};
