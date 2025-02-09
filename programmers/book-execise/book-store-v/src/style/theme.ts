export type ThemeName = 'light' | 'dark'
type Colorkey = 'primary' | 'background' | 'secondary' | 'third'

interface Theme {
    name: ThemeName;
    color: Record<Colorkey, string>;
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'brown',
    background: 'lightgray',
    secondary: 'blue',
    third: 'green',
  },
}

export const dark: Theme = {
  name: 'dark',
  color: {
    primary: 'black',
    background: 'black',
    secondary: 'blue',
    third: 'darkgreen',
  },
}
