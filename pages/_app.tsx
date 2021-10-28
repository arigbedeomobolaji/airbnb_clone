import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import '../src/styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};
export default MyApp;
