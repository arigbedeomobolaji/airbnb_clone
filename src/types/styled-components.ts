import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		screen: {
			tablet: string;
		};

		colors: {
			primary: string;
			secondary: string;
			dark: string;
		};
	}
}
