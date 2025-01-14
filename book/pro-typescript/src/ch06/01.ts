// 유니온 타입은 타입 T e U 중 하나가 될 수 있는 타입이다.
type ThemeName = 'light' | 'dark';
type Colorkey = 'primary' | 'background' | 'secondary' | 'third' | 'border' | 'text';
type HeadingSize = 'large' | 'normal' | 'small'
type ButtonSize = 'large' | 'normal' | 'small'

type ButtonKey = keyof ButtonSize

interface Theme {
	name: ThemeName;
	color: Record<Colorkey, string>
	heading: {
		[key in HeadingSize]: {
			fontSize: string
		}
	},
}

const light: Theme = {
	name: 'light',
	color: {
		primary: "#ff5800",
		background: "lightgrey",
		secondary: "5F5F5F",
		third: "green",
		border: "grey",
		text: "black"
	},
	heading: {
		large: {
			fontSize: '1rem'
		},
		normal: {
			fontSize: '1.5rem'
		},
		small: {
			fontSize: '0.5rem'
		}
	},
};

const dark: Theme = {
	...light,
	name: 'dark',
	color: {
		primary: "#ff5800",
		background: "lightgrey",
		secondary: "5F5F5F",
		third: "green",
		border: "grey",
		text: "black"
	},
};
